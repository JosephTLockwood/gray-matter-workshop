import PageTemplate from "@/components/PageTemplate";

export default function ControlSystems() {
  return (
    <PageTemplate 
      title="Feedback and Feedforward Control"
      previousPage={{ href: "/programming", title: "Programming" }}
      nextPage={{ href: "/tuning", title: "Tuning" }}
    >
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-lg border">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Feedforward Control</h3>
          <p className="text-gray-600 mb-4">
            A feedforward loop that adjusts outputs based on the inputs of the setpoint value.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Components:</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li><strong>kS:</strong> Voltage to overcome static friction</li>
              <li><strong>kV:</strong> Voltage for rotations per second</li>
              <li><strong>kA:</strong> Amount of output per target acceleration</li>
              <li><strong>kG:</strong> Voltage to overcome gravity (arm/elevator)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg border">
          <h3 className="text-xl font-bold text-green-600 mb-4">Feedback Control (PID)</h3>
          <p className="text-gray-600 mb-4">
            A feedback loop that adjusts outputs based on the error between setpoint and actual value.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Components:</h4>
            <ul className="text-green-800 space-y-1 text-sm">
              <li><strong>Proportional:</strong> Current error</li>
              <li><strong>Integral:</strong> Past accumulated error</li>
              <li><strong>Derivative:</strong> Predicted future error</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          📋 <strong>Content Coming Soon:</strong> Detailed control systems theory and implementation.
        </p>
      </div>
    </PageTemplate>
  );
}