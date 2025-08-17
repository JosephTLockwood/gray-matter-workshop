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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Workshop</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Workshop #1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Workshop #1</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Fundamentals of FRC programming with command-based framework, subsystems, and PID control.
              </p>
              
              <div className="space-y-3 mb-6">
                <Link 
                  href="/hardware"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">Hardware Setup</span>
                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                  </div>
                </Link>
                
                <Link 
                  href="/project-setup"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">Project Setup</span>
                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                  </div>
                </Link>
                
                <Link 
                  href="/command-framework"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">Command Framework</span>
                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                  </div>
                </Link>
                
                <Link 
                  href="/programming"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">Programming</span>
                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                  </div>
                </Link>
                
                <Link 
                  href="/control-systems"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">Control Systems</span>
                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                  </div>
                </Link>
                
                <Link 
                  href="/tuning"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">Tuning</span>
                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                  </div>
                </Link>
              </div>
              
              <Link 
                href="/hardware"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Start Workshop #1
              </Link>
            </div>

            {/* Workshop #2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border opacity-60">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Workshop #2</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Advanced topics including vision, autonomous, path planning, and competition strategy.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-500">Vision & AprilTags</span>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-500">Autonomous Programming</span>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-500">Path Planning</span>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-500">Competition Strategy</span>
                </div>
              </div>
              
              <button 
                disabled
                className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold cursor-not-allowed text-center block"
              >
                Coming Soon
              </button>
            </div>
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