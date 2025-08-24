import PageTemplate from "@/components/PageTemplate";
import GitHubPage from "@/components/GitHubPage";

export default function Programming() {
  return (
    <PageTemplate 
      title="Programming ARM and Flywheel"
      previousPage={{ href: "/command-framework", title: "Command Framework" }}
      nextPage={{ href: "/control-systems", title: "Control Systems" }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Programming ARM and Flywheel</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          In this section, we&apos;ll program common FRC mechanisms starting with our ARM subsystem. 
          We&apos;ll build upon this initial implementation throughout the workshop.
        </p>
        
        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">What You&apos;ll Learn:</h3>
          <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
            <li>Setting up subsystems for ARM and Flywheel</li>
            <li>Creating motor and sensor configurations</li>
            <li>Implementing control methods</li>
            <li>Command creation and deployment</li>
            <li>Iterative development and testing</li>
          </ul>
        </div>
      </div>

      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Workshop Development Approach</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">🔄 Iterative Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We&apos;ll start with basic motor control and progressively add advanced features. 
                Each step builds upon the previous implementation.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Start with voltage control</li>
                <li>• Add position feedback</li>
                <li>• Implement PID control</li>
                <li>• Add feedforward compensation</li>
                <li>• Include safety limits</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-4">🎯 Real-World Focus</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Each modification addresses real competition challenges and follows 
                FRC best practices used by successful teams.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Competition-tested patterns</li>
                <li>• Robust error handling</li>
                <li>• Performance optimization</li>
                <li>• Maintainable code structure</li>
                <li>• Team collaboration friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Initial ARM Subsystem</h2>
        
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">📋 Starting Point</h3>
          <p className="text-blue-800 dark:text-blue-300">
            This is our initial ARM implementation. Throughout the workshop, we&apos;ll enhance this code by adding:
            PID control, feedforward, position control, safety limits, and more sophisticated commands.
          </p>
        </div>

        <iframe 
          src="https://www.youtube.com/embed/Qi94fcIfop0"
          title="Project Setup Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full aspect-video rounded-lg"
        />

        <GitHubPage
          repository="Hemlock5712/Workshop-Code"
          filePath="src/main/java/frc/robot/subsystems/Arm.java"
          branch="1-Subsystem"
          title="Initial ARM Subsystem Implementation"
          description="This is our starting point for the workshop. We&apos;ll progressively enhance this code throughout the learning process."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">🔧 Key Components</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>TalonFX (ID: 20):</strong> Main motor controller</li>
              <li><strong>CANCoder (ID: 21):</strong> Position feedback sensor</li>
              <li><strong>VoltageOut:</strong> Control mode for direct voltage output</li>
              <li><strong>Brake Mode:</strong> Motor holds position when stopped</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">🎯 Current Capabilities</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>setVoltage():</strong> Apply raw voltage to motor</li>
              <li><strong>stop():</strong> Stop motor movement</li>
              <li><strong>Remote Encoder:</strong> CANCoder feedback configured</li>
              <li><strong>Basic Safety:</strong> Brake mode prevents drift</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Workshop Progression</h2>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">🚀 What We&apos;ll Build Next</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Enhanced Control</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Position-based control</li>
                <li>• PID feedback loops</li>
                <li>• Feedforward compensation</li>
                <li>• Motion Magic profiles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Advanced Features</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Safety limits and bounds</li>
                <li>• Encoder calibration</li>
                <li>• Dashboard integration</li>
                <li>• Command-based control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}