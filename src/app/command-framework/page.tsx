import GithubPageWithPR from "@/components/GithubPageWithPR";
import PageTemplate from "@/components/PageTemplate";

export default function CommandFramework() {
  return (
    <PageTemplate
      title="Command-Based Framework"
      previousPage={{ href: "/project-setup", title: "Project Setup" }}
      nextPage={{ href: "/programming", title: "Programming" }}
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Triggers</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">Use BooleanSuppliers (True or False)</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Link inputs to commands (e.g., press button to drive forward, or use sensor to run Command automatically).
            All buttons/triggers on a game controller are considered &quot;Triggers&quot;.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-green-600 mb-3">Subsystems</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">Hardware components and control logic</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            (e.g., Drivetrain, Arm, or Flywheel). Motors and sensors are instantiated.
            Methods to pull data from sensors within the subsystem are defined.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-purple-600 mb-3">Commands</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">Use Runnables (void functions)</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Encapsulate robot actions (e.g., DriveForwardCommand, ShootBallCommand).
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Commands to Control the Arm
        </h2>

        <p>
          Next up, we&apos;re going to add some commands to allow us to easily control the arm.
        </p>
        <GithubPageWithPR repository="Hemlock5712/Workshop-Code" filePath="src/main/java/frc/robot/subsystems/Arm.java" branch="2-Commands" pullRequestNumber={2} focusFile="Arm.java" />
      </section>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6">
        <p className="text-yellow-800 dark:text-yellow-300">
          📋 <strong>Content Coming Soon:</strong> This section will include detailed explanations of the Command-Based Framework.
        </p>
      </div>
    </PageTemplate>
  );
}