import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8">
      {/* Hero Section */}
      <div className="text-center flex flex-col gap-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
          Gray Matter Coding Workshop
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn FRC&apos;s best programming practices to build a robot good
          enough to win events. Master code architecture, subsystems, PID
          tuning, libraries, and more!
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
            className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Prerequisites
          </Link>
        </div>
      </div>

      {/* Workshop Overview */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Target Audience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This workshop is designed for FRC Teams using Java and CTRE
            Hardware.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            What You&apos;ll Learn
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-left max-w-md mx-auto">
            <li>• Code architecture and best practices</li>
            <li>• Subsystems structure and organization</li>
            <li>• PID tuning techniques</li>
            <li>• Libraries and framework usage</li>
            <li>• Hardware integration</li>
          </ul>
        </div>
      </div>

      {/* Mechanisms Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Mechanisms We&apos;ll Program
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="mb-4">
              <Image
                src="/images/mechanisms/arm.jpg"
                alt="Robot Arm Mechanism"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Robot Arm
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn to program a robot arm with precise positioning control.
              Master PID tuning, encoder feedback, and motion profiling to achieve smooth,
              accurate movements for game piece manipulation.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="mb-4">
              <Image
                src="/images/mechanisms/flywheel.png"
                alt="Flywheel Mechanism"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Flywheel Shooter
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Program a high-speed flywheel shooter system for consistent game piece
              launching. Explore velocity control, feedforward calculations, and
              real-time adjustments for accuracy across varying distances.
            </p>
          </div>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Meet the Team
        </h2>
        <div className="flex justify-center space-x-8 flex-wrap gap-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2">
              <Image
                src="/images/presentors/joshPhoto.jpg"
                alt="Josh Bacon"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold">Josh Bacon</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2">
              <Image
                src="/images/presentors/alexPhoto.jpg"
                alt="Alex Haltom"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold">Alex Haltom</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2">
              <Image
                src="/images/presentors/joePhoto.jpg"
                alt="Joe Lockwood"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold">Joe Lockwood</p>
          </div>
        </div>
      </div>
    </div>
  );
}
