import Link from "next/link";
import ImageBlock from "@/components/ImageBlock";

export default function Hardware() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/prerequisites"
          className="text-blue-600 hover:text-blue-800 font-medium dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Prerequisites
        </Link>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Hardware Setup
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Hardware Components
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <ImageBlock
                src="/images/hardware/Kracken60x.png"
                alt="Kraken Motor"
                width={250}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Kraken X60/X44
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                CTRE Motor. Comes with a built-in motor controller called
                TalonFX.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Key Features:</strong> High torque, integrated
                  controller, CAN communication, advanced control modes
                  including PID, FeedForward, and Motion Magic.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <ImageBlock
                src="/images/hardware/Encoder.png"
                alt="CANCoder"
                width={250}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                CANCoder
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Absolute encoder. Gets the angle of a mechanism. Useful in
                things like swerve modules and arms.
              </p>
              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-300">
                  <strong>Key Features:</strong> 360° absolute position,
                  magnetic sensing, no calibration needed on startup, CAN bus
                  communication.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <ImageBlock
                src="/images/hardware/CANivore.png"
                alt="CANivore"
                width={250}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                CANivore
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                USB-to-CAN FD device that adds a secondary CAN FD bus to the roboRIO.
                Enables hardware-attached simulation and direct control of CTRE devices
                during development.
              </p>
              <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                <p className="text-sm text-purple-800 dark:text-purple-300">
                  <strong>Key Features:</strong> 1000Hz update rate (vs 50Hz roboRIO), 
                  CAN FD technology for improved bandwidth, hardware-attached simulation support, 
                  direct USB connection for development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Mechanism Overview
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              What We&apos;re Programming
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <ImageBlock
                  src="/images/mechanisms/arm.jpg"
                  alt="Robot Arm Mechanism"
                  width={400}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg">
                  <p className="text-xl font-medium text-blue-900 dark:text-blue-300 mb-3">
                    ARM Position Control
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    We&apos;ll be programming an arm mechanism to demonstrate
                    motor control and positioning. Learn PID tuning, encoder feedback, 
                    and motion profiling for precise positioning control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Why We Choose CTRE Hardware
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-8 border border-gray-200 dark:border-gray-800 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              🎯 CTRE&apos;s Unique Advantages
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Full PID Control</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Complete PID implementation with kP, kI, kD, and advanced filtering options that other vendors don&apos;t provide.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">FeedForward (FF)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Built-in feedforward control for gravity compensation and velocity control that competitors lack.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Motion Profiling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Advanced Motion Magic and motion profiling capabilities for smooth, controlled movements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2">Rotations Units</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Motor positions measured in intuitive rotations instead of confusing encoder ticks or radians.
                </p>
              </div>
            </div>
            
            {/* Phoenix Software Resources - moved inside CTRE advantages */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                🔧 Phoenix Software Resources
              </h4>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="https://v6.docs.ctr-electronics.com/en/stable/docs/canivore/canivore-intro.html"
                    className="block text-blue-600 underline hover:no-underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → CANivore Introduction
                  </a>
                  <a
                    href="https://v6.docs.ctr-electronics.com/"
                    className="block text-blue-600 underline hover:no-underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → Phoenix 6 Documentation
                  </a>
                  <a
                    href="https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/"
                    className="block text-blue-600 underline hover:no-underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → Phoenix 6 API Reference
                  </a>
                  <a
                    href="https://v6.docs.ctr-electronics.com/en/stable/docs/tuner/"
                    className="block text-blue-600 underline hover:no-underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → Phoenix Tuner X Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Connecting to Your Device
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
              ⚠️ Important Setup Steps
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-yellow-800 dark:text-yellow-300">
              <li>Plug the computer into CANivore</li>
              <li>Make sure the &quot;CANivore USB&quot; is checked</li>
              <li>Change &quot;Team # or IP&quot; to &quot;localhost&quot;</li>
              <li>Your CANivore should now appear in Phoenix Tuner</li>
              <li>For this workshop, please name your CANivore: &quot;canivore&quot;</li>
            </ol>
          </div>

          {/* GIF Demo Section - Ready for your CANivore setup GIF */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
              🎬 Visual Setup Guide
            </h3>
            <p className="text-blue-800 dark:text-blue-300 mb-4">
              Watch the complete CANivore setup process:
            </p>
            {/* 
            Add your GIF here when ready:
            <ImageBlock
              src="/images/setup/canivore-setup.gif"
              alt="Complete CANivore Setup Process"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
            */}
            <div className="bg-blue-100 dark:bg-blue-900/50 rounded-lg p-4 text-center">
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                📹 GIF demonstration will be added here
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Updating Your CTRE Products
          </h2>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Using Phoenix Tuner
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <div>
                  <p className="font-medium">
                    Open Phoenix Tuner and connect to your robot
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    If you have issues connecting to your robot,
                    <a
                      href="https://v6.docs.ctr-electronics.com/en/stable/docs/tuner/connecting.html#connecting-tuner"
                      className="text-blue-600 underline hover:no-underline dark:text-blue-400 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view this guide
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <div>
                  <p className="font-medium">
                    Batch update all products of the same model
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Select one of the devices and then click the batch update
                    icons
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-medium">Verify Updates</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The device cards will be green if the firmware is the latest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Motor Update Process & Status Colors
          </h2>

          <div className="mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800 mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                📱 How to Update Motors
              </h3>
              <ImageBlock
                src="/images/update/update.jpg"
                alt="Motor Update Process in Phoenix Tuner"
                width={400}
                height={300}
                className="mb-4 rounded-lg"
              />
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Use Phoenix Tuner to update your motor firmware. Select devices and use the batch update feature to ensure all motors are running the latest firmware version.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
              🎨 Card Colors
            </h4>
            <p className="text-blue-800 dark:text-blue-300 mb-4">
              The color of the device cards is helpful as a visual indicator of device state. The meaning of the card color is also shown as text underneath the device title.
            </p>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-2 px-3 font-semibold text-gray-900 dark:text-gray-100 w-32">Color</th>
                      <th className="py-2 px-3 font-semibold text-gray-900 dark:text-gray-100">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-3 align-top">
                        <div className="flex items-center whitespace-nowrap">
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                          <strong className="text-green-700 dark:text-green-400">Green</strong>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-gray-700 dark:text-gray-300 align-top">Device has latest firmware.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-3 align-top">
                        <div className="flex items-center whitespace-nowrap">
                          <span className="inline-block w-4 h-4 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
                          <strong className="text-purple-700 dark:text-purple-400">Purple</strong>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-gray-700 dark:text-gray-300 align-top">Device has an unexpected/beta firmware version.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-3 align-top">
                        <div className="flex items-center whitespace-nowrap">
                          <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                          <strong className="text-yellow-700 dark:text-yellow-400">Yellow</strong>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-gray-700 dark:text-gray-300 align-top">A new firmware version is available.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 px-3 align-top">
                        <div className="flex items-center whitespace-nowrap">
                          <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                          <strong className="text-red-700 dark:text-red-400">Red</strong>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-gray-700 dark:text-gray-300 align-top">Device has a duplicate ID.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 align-top">
                        <div className="flex items-center whitespace-nowrap">
                          <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                          <strong className="text-blue-700 dark:text-blue-400">Blue</strong>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-gray-700 dark:text-gray-300 align-top">Failed to retrieve list of available firmware.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                <strong>💡 Tip:</strong> Always update all motors to the same firmware version for consistency and use batch update to save time when updating multiple devices.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Let&apos;s Run Some Motors!
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Testing Motor Movement
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Quick Test Steps:
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Open up your motor in Phoenix Tuner</li>
                  <li>
                    Click <strong>Config</strong>
                  </li>
                  <li>Click the three dots</li>
                  <li>
                    Click <strong>Factory Default</strong>
                  </li>
                  <li>
                    Set the drop-down to <strong>Voltage Out</strong>
                  </li>
                  <li>
                    Click <strong>DISABLED</strong> to enable
                  </li>
                  <li>Apply voltage to test the motor</li>
                </ol>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  ⚡ Safety First
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Always start with low voltage values when testing motors. Make
                  sure your mechanism can move freely and won&apos;t cause
                  damage.
                </p>
              </div>
            </div>

          </div>
        </section>

        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/prerequisites"
            className="text-gray-600 hover:text-gray-800 font-medium dark:text-gray-300 dark:hover:text-gray-100"
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
