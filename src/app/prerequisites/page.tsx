import Link from "next/link";

export default function Prerequisites() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/introduction"
          className="text-blue-600 hover:text-blue-800 font-medium dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Introduction
        </Link>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Prerequisites</h1>

        <div className="grid gap-6 mb-12">
          {/* Software Requirements */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">📋 Software Requirements</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-200 dark:border-blue-900 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <a href="https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html" 
                     className="text-blue-600 underline hover:no-underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                    WPILib
                  </a> & <a href="https://www.ni.com/en/support/downloads/drivers/download.frc-game-tools.html#553883"
                           className="text-blue-600 underline hover:no-underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                    Game Tools
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Install WPILib VS Code and National Instruments Game Tool (includes Driver Station and RoboRIO imaging).
                </p>
              </div>

              <div className="border-l-4 border-green-200 dark:border-green-900 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <a href="https://apps.microsoft.com/detail/9NVV4PWDW27Z" 
                     className="text-green-600 underline hover:no-underline dark:text-green-400" target="_blank" rel="noopener noreferrer">
                    Phoenix Tuner X
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Essential for configuring and tuning TalonFX and other CTRE hardware.
                </p>
              </div>

              <div className="border-l-4 border-purple-200 dark:border-purple-900 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <a href="https://git-scm.com/downloads" 
                     className="text-purple-600 underline hover:no-underline dark:text-purple-400" target="_blank" rel="noopener noreferrer">
                    Git
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Use Git for version control. Summarize changes clearly (e.g., &apos;Add drivetrain PID tuning logic&apos;).
                </p>
              </div>

              <div className="border-l-4 border-orange-200 dark:border-orange-900 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <a href="https://github.com/mjansen4857/pathplanner/releases" 
                     className="text-orange-600 underline hover:no-underline dark:text-orange-400" target="_blank" rel="noopener noreferrer">
                    PathPlanner
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Allows you to draw paths for your swerve drive to follow.
                </p>
              </div>

              <div className="border-l-4 border-red-200 dark:border-red-900 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <a href="https://github.com/Gold872/elastic-dashboard" 
                     className="text-red-600 underline hover:no-underline dark:text-red-400" target="_blank" rel="noopener noreferrer">
                    Elastic Dashboard
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Drivers use a dashboard to easily view the robot and key items, such as selecting autonomous routines or viewing motor errors.
                </p>
              </div>

              <div className="border-l-4 border-yellow-200 dark:border-yellow-900 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <a href="https://www.codecademy.com/learn/learn-java" 
                     className="text-yellow-600 underline hover:no-underline dark:text-yellow-400" target="_blank" rel="noopener noreferrer">
                    Java Knowledge
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Ideally, some basic knowledge of Java coding (optional but recommended).
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">Ready to Start?</h3>
          <p className="text-blue-800 dark:text-blue-300">
            Make sure you have all the prerequisites installed before proceeding to the hardware setup section.
          </p>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link 
            href="/introduction"
            className="text-gray-600 hover:text-gray-800 font-medium dark:text-gray-300 dark:hover:text-gray-100"
          >
            ← Previous: Introduction
          </Link>
          <Link 
            href="/hardware"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Next: Hardware Setup →
          </Link>
        </div>
      </div>
    </div>
  );
}