"use client";

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import GithubPageWithPR from "@/components/GithubPageWithPR";

export default function Tuning() {
  return (
    <PageTemplate
      title="Tuning Real Mechanisms"
      previousPage={{ href: "/control-systems", title: "Control Systems" }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          How to Tune Feedforward and PID
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          There are many recommended ways to tune PID, including fancy formulas
          and tests. However, we have always found it best to manually tune.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
            Tuner X Benefits
          </h3>
          <p className="text-blue-800 dark:text-blue-300 mb-3">
            CTRE&apos;s Tuner X allows you to control a motor directly. You can
            set and change voltage, PID, FF, and MotionMagic values without
            deploying code!
          </p>
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Why Use On-Motor Controllers?
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
              <li>• Runs at 1000Hz vs 50Hz</li>
              <li>• Set and Forget operation</li>
              <li>• Advanced Motion Magic for smoother, consistent movement</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
            Motion Magic Advantages
          </h3>
          <p className="text-green-800 dark:text-green-300">
            Profiled controllers enable you to limit and set realistic maximum
            velocities and accelerations. This makes movements repeatable and
            smoother by following realistic targets and allowing feedforward
            control.
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Code Evolution: From Basic to Advanced
        </h2>

        <article className="flex flex-col gap-8 bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Verifying Encoder Setup
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <p className="col-span-2">You&apos;ll need to make sure your encoder is configured correctly. With the device facing you like the following image, ensure that the encoder position is going up as you rotate the arm counterclockwise.</p>

            <div className="flex w-full">
              <Image src="/images/mechanisms/arm.jpg" alt="Arm" width={300} height={200} className="rounded-lg" />
            </div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/zJgSQKrz8yE"
            title="Encoder Setup"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full aspect-video rounded-lg"
          />
        </article>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            🎯 Workshop Journey Complete
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Explore the final Arm implementation and see exactly how we
            transformed basic voltage control into sophisticated position
            control with PID, feedforward, and Motion Magic.
          </p>
        </div>

        <GithubPageWithPR repository="Hemlock5712/Workshop-Code" filePath="src/main/java/frc/robot/subsystems/Arm.java" branch="3-PID" pullRequestNumber={3} focusFile="Arm.java" />
      </section>
    </PageTemplate>
  );
}
