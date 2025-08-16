import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import ImageBlock from "@/components/ImageBlock";

export default function Hardware() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/prerequisites"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Prerequisites
        </Link>
      </div>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Hardware Setup</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hardware Components</h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border">
              <ImageBlock
                src="/images/hardware/Kracken60x.png"
                alt="Kraken Motor"
                width={250}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kraken Motor</h3>
              <p className="text-gray-600 mb-3">
                CTRE Motor. Comes with a built-in motor controller called TalonFX.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Key Features:</strong> High torque, integrated controller, CAN communication, 
                  advanced control modes including PID and Motion Magic.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border">
              <ImageBlock
                src="/images/hardware/Encoder.png"
                alt="CANCoder"
                width={250}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">CANCoder</h3>
              <p className="text-gray-600 mb-3">
                Absolute encoder. Gets the angle of a mechanism. Useful in things like swerve modules and arms.
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Key Features:</strong> 360° absolute position, magnetic sensing, 
                  no calibration needed on startup, CAN bus communication.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border">
              <ImageBlock
                src="/images/hardware/CANivore.png"
                alt="CANivore"
                width={250}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">CANivore</h3>
              <p className="text-gray-600 mb-3">
                Adds a new CAN network that allows motors to be updated more frequently and communicate faster. 
                Also enables you to control motors without a roboRIO.
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Key Features:</strong> 1000Hz update rate, reduced roboRIO load, 
                  standalone motor control, improved real-time performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mechanism Overview</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What We&apos;re Programming</h3>
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-lg inline-block">
                <p className="text-lg font-medium text-blue-900">ARM Position Control</p>
                <p className="text-blue-700 mt-2">We&apos;ll be programming an arm mechanism to demonstrate motor control and positioning</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Connecting to Your Device</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important Setup Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-yellow-800">
              <li>Plug the computer into CANivore</li>
              <li>Make sure the CANivore USB is checked</li>
              <li>Your CANivore should now appear in Phoenix Tuner</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Updating Your CTRE Products</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Using Phoenix Tuner</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-medium">Open Phoenix Tuner and connect to your robot</p>
                  <p className="text-gray-600 text-sm">
                    If you have issues connecting to your robot, 
                    <a href="https://v6.docs.ctr-electronics.com/en/stable/docs/tuner/connecting.html#connecting-tuner" 
                       className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      view this guide
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-medium">Batch update all products of the same model</p>
                  <p className="text-gray-600 text-sm">
                    Select one of the devices and then click the batch update icons
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                <div>
                  <p className="font-medium">Verify Updates</p>
                  <p className="text-gray-600 text-sm">
                    The device cards will be green if the firmware is the latest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let&apos;s Run Some Motors!</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Testing Motor Movement</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Quick Test Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Open up your motor in Phoenix Tuner</li>
                  <li>Click <strong>Config</strong></li>
                  <li>Click the three dots</li>
                  <li>Click <strong>Factory Default</strong></li>
                  <li>Set the drop-down to <strong>Voltage Out</strong></li>
                  <li>Click <strong>DISABLED</strong> to enable</li>
                  <li>Apply voltage to test the motor</li>
                </ol>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-gray-900 mb-2">⚡ Safety First</h4>
                <p className="text-sm text-gray-600">
                  Always start with low voltage values when testing motors. 
                  Make sure your mechanism can move freely and won&apos;t cause damage.
                </p>
              </div>
            </div>

            {/* Example: How to add Canva images and code */}
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold text-gray-900 mb-4">🔧 Example: Adding Your Canva Content</h4>
              
              <p className="text-gray-600 mb-4">
                Here&apos;s how you&apos;ll add images and code from your presentation:
              </p>

              <CodeBlock
                title="Motor Configuration Example"
                filename="Robot.java"
                language="java"
                code={`// Example: Basic motor setup from your Canva slides
TalonFX motor = new TalonFX(1, "CANivore");
TalonFXConfiguration config = new TalonFXConfiguration();

// Apply factory defaults
motor.getConfigurator().apply(config);

// Set control mode
motor.setControl(new VoltageOut(2.0)); // 2V output`}
              />

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>📋 To add your content:</strong><br/>
                  1. Export slides as PNG from Canva<br/>
                  2. Save to <code>/public/images/</code><br/>
                  3. Use <code>&lt;ImageBlock src=&quot;/images/your-image.png&quot; alt=&quot;Description&quot; /&gt;</code><br/>
                  4. Use <code>&lt;CodeBlock&gt;</code> for code snippets
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link 
            href="/prerequisites"
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Previous: Prerequisites
          </Link>
          <Link 
            href="/project-setup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Next: Project Setup →
          </Link>
        </div>
      </div>
    </div>
  );
}