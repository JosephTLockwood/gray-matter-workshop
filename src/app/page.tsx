import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Gray Matter Coding Workshop #1
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Learn FRC's best programming practices to build a robot good enough to win events. 
          Master code architecture, subsystems, PID tuning, libraries, and more!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/introduction"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Workshop
          </Link>
          <Link
            href="/prerequisites"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Prerequisites
          </Link>
        </div>
      </div>

      {/* Workshop Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Workshop 1 Topics</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Introduction - Purpose, Scope, and Prerequisites
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Updating Motors and CANivore
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Making a Motor Move
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Creating a New Project & Organization
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Command-Based Framework
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              PID and Feedforward Control
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Tuning Real Mechanisms
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Target Audience</h2>
          <p className="text-gray-600 mb-6">
            This workshop is designed for FRC Teams using Java and CTRE Hardware.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Code architecture and best practices</li>
            <li>• Subsystems structure and organization</li>
            <li>• PID tuning techniques</li>
            <li>• Libraries and framework usage</li>
            <li>• Hardware integration</li>
          </ul>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Meet the Team</h2>
        <div className="flex justify-center space-x-8 flex-wrap gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
              JB
            </div>
            <p className="font-semibold">Josh Bacon</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
              AH
            </div>
            <p className="font-semibold">Alex Haltom</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
              JL
            </div>
            <p className="font-semibold">Joe Lockwood</p>
          </div>
        </div>
      </div>
    </div>
  );
}
