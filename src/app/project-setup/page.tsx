import PageTemplate from "@/components/PageTemplate";

export default function ProjectSetup() {
  return (
    <PageTemplate 
      title="Project Setup"
      previousPage={{ href: "/hardware", title: "Hardware Setup" }}
      nextPage={{ href: "/command-framework", title: "Command Framework" }}
    >
      <div className="bg-white rounded-lg p-8 shadow-lg border mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Creating a New Project</h2>
        <p className="text-gray-600 mb-4">Learn how to set up a new WPILib project with proper organization and structure.</p>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Key Topics Covered:</h3>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>Directory Layout and Organization</li>
            <li>Java Functional Interfaces</li>
            <li>Naming Conventions</li>
            <li>Variable Types</li>
            <li>Installing Vendor Dependencies</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          📋 <strong>Content Coming Soon:</strong> This section will include detailed instructions for setting up your FRC project structure.
        </p>
      </div>
    </PageTemplate>
  );
}