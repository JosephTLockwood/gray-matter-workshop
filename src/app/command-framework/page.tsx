import PageTemplate from "@/components/PageTemplate";

export default function CommandFramework() {
  return (
    <PageTemplate 
      title="Command-Based Framework"
      previousPage={{ href: "/project-setup", title: "Project Setup" }}
      nextPage={{ href: "/programming", title: "Programming" }}
    >
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-lg border">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Triggers</h3>
          <p className="text-gray-600 mb-3">Use BooleanSuppliers (True or False)</p>
          <p className="text-sm text-gray-500">
            Link inputs to commands (e.g., press button to drive forward, or use sensor to run Command automatically).
            All buttons/triggers on a game controller are considered "Triggers".
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg border">
          <h3 className="text-xl font-bold text-green-600 mb-3">Subsystems</h3>
          <p className="text-gray-600 mb-3">Hardware components and control logic</p>
          <p className="text-sm text-gray-500">
            (e.g., Drivetrain, Arm, or Flywheel). Motors and sensors are instantiated. 
            Methods to pull data from sensors within the subsystem are defined.
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg border">
          <h3 className="text-xl font-bold text-purple-600 mb-3">Commands</h3>
          <p className="text-gray-600 mb-3">Use Runnables (void functions)</p>
          <p className="text-sm text-gray-500">
            Encapsulate robot actions (e.g., DriveForwardCommand, ShootBallCommand).
          </p>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          📋 <strong>Content Coming Soon:</strong> This section will include detailed explanations of the Command-Based Framework.
        </p>
      </div>
    </PageTemplate>
  );
}