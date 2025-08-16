import PageTemplate from "@/components/PageTemplate";

export default function Programming() {
  return (
    <PageTemplate 
      title="Programming ARM and Flywheel"
      previousPage={{ href: "/command-framework", title: "Command Framework" }}
      nextPage={{ href: "/control-systems", title: "Control Systems" }}
    >
      <div className="bg-white rounded-lg p-8 shadow-lg border mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Programming Mechanisms</h2>
        <p className="text-gray-600 mb-4">Learn how to program common FRC mechanisms like arms and flywheels.</p>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">What You'll Learn:</h3>
          <ul className="list-disc list-inside text-green-800 space-y-1">
            <li>Setting up subsystems for ARM and Flywheel</li>
            <li>Creating motor and sensor configurations</li>
            <li>Implementing control methods</li>
            <li>Command creation and deployment</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          📋 <strong>Content Coming Soon:</strong> Detailed programming instructions for ARM and Flywheel mechanisms.
        </p>
      </div>
    </PageTemplate>
  );
}