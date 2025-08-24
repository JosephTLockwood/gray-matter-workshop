import PageTemplate from "@/components/PageTemplate";

export default function ProjectSetup() {
  return (
    <PageTemplate 
      title="Project Setup"
      previousPage={{ href: "/hardware", title: "Hardware Setup" }}
      nextPage={{ href: "/command-framework", title: "Command Framework" }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Creating a New Project</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Learn how to set up a new WPILib project with proper organization and structure.</p>
        
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Key Topics Covered:</h3>
          <ul className="list-disc list-inside text-blue-800 dark:text-blue-300 space-y-1">
            <li>Directory Layout and Organization</li>
            <li>Java Functional Interfaces</li>
            <li>Naming Conventions</li>
            <li>Variable Types</li>
            <li>Installing Vendor Dependencies</li>
          </ul>
        </div>
      </div>

      <iframe 
        src="https://www.youtube.com/embed/Y8ExsyaCC34"
        title="Project Setup Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full aspect-video rounded-lg"
      />
      
      <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6">
        <p className="text-yellow-800 dark:text-yellow-300">
          📋 <strong>Content Coming Soon:</strong> This section will include detailed instructions for setting up your FRC project structure.
        </p>
      </div>
    </PageTemplate>
  );
}