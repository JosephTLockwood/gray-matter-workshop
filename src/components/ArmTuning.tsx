"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type ArmState = {
  angleRad: number; // arm angle relative to horizontal, radians (0 = horizontal)
  angularVelocity: number; // rad/s
};

type ControllerGains = {
  kP: number;
  kI: number;
  kD: number;
  kG: number; // gravity feedforward multiplier for cos(theta)
  kS: number; // static term feedforward applied by sign of movement
};

export default function ArmTuning() {
  // UI state: controller gains and plant params
  const [gains, setGains] = useState<ControllerGains>({
    kP: 6,
    kI: 0,
    kD: 0.35,
    kG: 2.5,
    kS: 0.2,
  });
  const [massKg, setMassKg] = useState<number>(2.0);
  const [setpointDeg, setSetpointDeg] = useState<number>(45);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // Simulation constants (chosen for smooth demonstration)
  const gravity = 9.81; // m/s^2
  const armLengthMeters = 0.6; // fixed length for simplicity
  const viscousFriction = 0.08; // N*m*s/rad
  const maxMotorTorque = 4.0; // N*m (saturation torque)

  // Derived inertia about shoulder: uniform rod pivoted at one end
  const inertia = useMemo(() => (1 / 3) * massKg * armLengthMeters * armLengthMeters, [massKg]);

  // Simulation state refs
  const stateRef = useRef<ArmState>({ angleRad: 0.0, angularVelocity: 0.0 });
  const integralErrorRef = useRef<number>(0);
  const previousErrorRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const resetSimulation = useCallback(() => {
    stateRef.current = { angleRad: 0, angularVelocity: 0 };
    integralErrorRef.current = 0;
    previousErrorRef.current = 0;
  }, []);

  // Controller calculation (PID + FF)
  const computeControlTorque = useCallback(
    (dt: number, angleRad: number, angularVelocity: number, targetAngleRad: number) => {
      const error = wrapAngle(targetAngleRad - angleRad);

      // PID terms
      // Integral with simple anti-windup via clamping
      const integralError = clamp(
        integralErrorRef.current + error * dt,
        -2.0 / Math.max(1e-6, Math.max(1, gains.kI)),
        2.0 / Math.max(1e-6, Math.max(1, gains.kI))
      );
      integralErrorRef.current = integralError;

      const derivative = (error - previousErrorRef.current) / Math.max(1e-6, dt);
      previousErrorRef.current = error;

      const pidCommand = gains.kP * error + gains.kI * integralError + gains.kD * derivative;

      // Feedforward terms
      // kG compensates gravity using cos(theta)
      const gravityFF = gains.kG * Math.cos(angleRad);
      // kS counters static friction depending on intended direction of motion
      const directionSign = Math.sign(targetAngleRad - angleRad) || 0;
      const staticFF = gains.kS * directionSign;

      // Combine to a requested torque (then clamp to motor capability)
      const requestedTorque = pidCommand + gravityFF + staticFF;
      return clamp(requestedTorque, -maxMotorTorque, maxMotorTorque);
    },
    [gains, maxMotorTorque]
  );

  // Main simulation loop
  const step = useCallback(
    (timestamp: number) => {
      if (!isRunning) return;
      if (lastTimeRef.current == null) {
        lastTimeRef.current = timestamp;
      }

      const dt = Math.min(0.02, (timestamp - lastTimeRef.current) / 1000); // clamp dt for stability
      lastTimeRef.current = timestamp;

      const targetRad = degreesToRadians(setpointDeg);
      const { angleRad, angularVelocity } = stateRef.current;

      // Physics: tau = I*alpha => alpha = (tau_motor - tau_gravity - tau_viscous) / I
      const gravityTorque = massKg * gravity * (armLengthMeters / 2) * Math.cos(angleRad);
      const viscousTorque = viscousFriction * angularVelocity;

      const motorTorque = computeControlTorque(dt, angleRad, angularVelocity, targetRad);
      const netTorque = motorTorque - gravityTorque - viscousTorque;
      const angularAcceleration = netTorque / Math.max(1e-6, inertia);

      // Integrate (semi-implicit Euler)
      const newAngularVelocity = angularVelocity + angularAcceleration * dt;
      let newAngle = angleRad + newAngularVelocity * dt;
      newAngle = normalizeAngle(newAngle);

      stateRef.current = {
        angleRad: newAngle,
        angularVelocity: newAngularVelocity,
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [armLengthMeters, computeControlTorque, gravity, inertia, isRunning, massKg, setpointDeg, viscousFriction]
  );

  useEffect(() => {
    if (isRunning) {
      rafRef.current = requestAnimationFrame(step);
    }
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [isRunning, step]);

  // Canvas rendering
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Background
    ctx.fillStyle = "#0b1020"; // dark background that works for both themes
    ctx.fillRect(0, 0, width, height);

    // Coordinate system
    const pivotX = Math.round(width * 0.15);
    const pivotY = Math.round(height * 0.6);
    const pixelsPerMeter = Math.min(width * 0.7, height * 0.7) / armLengthMeters;

    // Draw setpoint ray
    const targetRad = degreesToRadians(setpointDeg);
    const setX = pivotX + Math.cos(targetRad) * armLengthMeters * pixelsPerMeter;
    const setY = pivotY - Math.sin(targetRad) * armLengthMeters * pixelsPerMeter;
    ctx.strokeStyle = "rgba(56, 189, 248, 0.9)"; // sky-400
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(setX, setY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw arm
    const angle = stateRef.current.angleRad;
    const endX = pivotX + Math.cos(angle) * armLengthMeters * pixelsPerMeter;
    const endY = pivotY - Math.sin(angle) * armLengthMeters * pixelsPerMeter;

    // Arm line
    ctx.strokeStyle = "#60a5fa"; // blue-400
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Mass at center of mass
    const comX = pivotX + Math.cos(angle) * (armLengthMeters * 0.5) * pixelsPerMeter;
    const comY = pivotY - Math.sin(angle) * (armLengthMeters * 0.5) * pixelsPerMeter;
    ctx.fillStyle = "#fca5a5"; // red-300
    ctx.beginPath();
    ctx.arc(comX, comY, Math.max(6, Math.min(14, 6 + massKg)), 0, Math.PI * 2);
    ctx.fill();

    // Pivot
    ctx.fillStyle = "#e5e7eb"; // gray-200
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 8, 0, Math.PI * 2);
    ctx.fill();

    // HUD text
    ctx.fillStyle = "#e5e7eb";
    ctx.font = "12px ui-sans-serif, system-ui, -apple-system";
    const errorDeg = radiansToDegrees(wrapAngle(targetRad - angle));
    const velDeg = radiansToDegrees(stateRef.current.angularVelocity);
    const lines = [
      `Angle: ${radiansToDegrees(angle).toFixed(1)}°`,
      `Setpoint: ${setpointDeg.toFixed(1)}°`,
      `Error: ${errorDeg.toFixed(1)}°`,
      `Velocity: ${velDeg.toFixed(1)}°/s`,
      `Mass: ${massKg.toFixed(2)} kg`,
    ];
    lines.forEach((t, i) => ctx.fillText(t, 12, 18 + i * 16));
  }, [armLengthMeters, massKg, setpointDeg]);

  // Render at 60fps using rAF
  useEffect(() => {
    let raf: number;
    const renderLoop = () => {
      draw();
      raf = requestAnimationFrame(renderLoop);
    };
    raf = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(raf);
  }, [draw]);

  // Resize canvas to device pixels
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(320, Math.floor(rect.width * dpr));
      canvas.height = Math.max(220, Math.floor((rect.width * 9) / 16 * dpr));
      canvas.style.width = `${Math.floor(rect.width)}px`;
      canvas.style.height = `${Math.floor((rect.width * 9) / 16)}px`;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Helpers to change gains safely
  const updateGain = (key: keyof ControllerGains, value: number) => {
    setGains((g) => ({ ...g, [key]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Controller</h3>
          <GainInput label="kP" value={gains.kP} step={0.1} min={0} max={50} onChange={(v) => updateGain("kP", v)} />
          <GainInput label="kI" value={gains.kI} step={0.01} min={0} max={5} onChange={(v) => updateGain("kI", v)} />
          <GainInput label="kD" value={gains.kD} step={0.01} min={0} max={5} onChange={(v) => updateGain("kD", v)} />
          <GainInput label="kG" value={gains.kG} step={0.1} min={0} max={20} onChange={(v) => updateGain("kG", v)} />
          <GainInput label="kS" value={gains.kS} step={0.01} min={0} max={5} onChange={(v) => updateGain("kS", v)} />

          <div className="pt-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Setpoint (deg)</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={-30}
                max={120}
                step={1}
                value={setpointDeg}
                onChange={(e) => setSetpointDeg(Number(e.target.value))}
                className="w-full"
              />
              <input
                type="number"
                value={setpointDeg}
                step={1}
                min={-90}
                max={180}
                onChange={(e) => setSetpointDeg(Number(e.target.value))}
                className="w-24 px-2 py-1 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Arm Mass (kg)</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0.2}
                max={8}
                step={0.1}
                value={massKg}
                onChange={(e) => setMassKg(Number(e.target.value))}
                className="w-full"
              />
              <input
                type="number"
                value={massKg}
                step={0.1}
                min={0.2}
                max={20}
                onChange={(e) => setMassKg(Number(e.target.value))}
                className="w-24 px-2 py-1 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsRunning((r) => !r)}
            >
              {isRunning ? "Pause" : "Run"}
            </button>
            <button
              className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={resetSimulation}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Visualization */}
        <div className="lg:col-span-2">
          <div ref={containerRef} className="w-full">
            <canvas ref={canvasRef} />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
            Tip: Increase <span className="font-semibold">kP</span> until it oscillates, add
            <span className="font-semibold"> kD</span> to dampen overshoot, introduce a small
            <span className="font-semibold"> kI</span> to remove steady-state error. Use
            <span className="font-semibold"> kG</span> to counter gravity and
            <span className="font-semibold"> kS</span> to overcome static friction.
          </p>
        </div>
      </div>
    </div>
  );
}

function GainInput({
  label,
  value,
  step,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  step: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-24 px-2 py-1 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>
    </div>
  );
}

function degreesToRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

function radiansToDegrees(rad: number): number {
  return (rad * 180) / Math.PI;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function normalizeAngle(angle: number): number {
  // keep roughly within [-2pi, 2pi] to avoid drift of large numbers
  if (angle > Math.PI * 2 || angle < -Math.PI * 2) return ((angle + Math.PI) % (2 * Math.PI)) - Math.PI;
  return angle;
}

function wrapAngle(angle: number): number {
  // Wrap to [-pi, pi]
  let a = angle;
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
}


