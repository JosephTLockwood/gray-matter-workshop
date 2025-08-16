import Link from "next/link";

export default function Introduction() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Gray Matter Coding Workshop
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-lg font-medium text-blue-900 mb-2">Quick Note</p>
          <p className="text-blue-800">
            All underlined text and images of code or products will have built-in links to resources
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why are we here?</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg border">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-2xl mr-4">🎯</span>
                <span>To learn FRC&apos;s best programming practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🏆</span>
                <span>To have a robot that is good enough to win events</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Goal</h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border">
            <p className="text-lg text-gray-700">
              Cover code architecture, subsystems structure, PID tuning, libraries, odometry, vision, and more!
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Target Audience</h2>
          <div className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
            <p className="text-lg text-gray-700">
              <strong>FRC Teams using Java and CTRE Hardware</strong>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Workshop Overviews</h2>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Workshop Topics</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Introduction - Purpose, Scope, and Prerequisites</li>
              <li>• Updating Motors and CANivore</li>
              <li>• Making a Motor Move</li>
              <li>• Creating a New Project</li>
              <li>• Project Organization - Directory Layout</li>
              <li>• Java Functional Interfaces</li>
              <li>• Command-Based Framework</li>
              <li>• Project Organization - Naming Conventions</li>
              <li>• Project Organization - Variable Types</li>
              <li>• Subsystems</li>
              <li>• PID and Feedforward Control</li>
              <li>• Tuning a real mechanism</li>
            </ul>
          </div>
        </section>

        <div className="flex justify-between items-center pt-8 border-t">
          <div></div>
          <Link 
            href="/prerequisites"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Next: Prerequisites →
          </Link>
        </div>
      </div>
    </div>
  );
}