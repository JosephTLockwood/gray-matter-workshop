'use client';

import { useState } from 'react';
import PageTemplate from "@/components/PageTemplate";
import GitHubPR from "@/components/GitHubPR";
import GitHubPage from "@/components/GitHubPage";

export default function Tuning() {
  const [activeTab, setActiveTab] = useState<'ide' | 'diff'>('ide');
  return (
    <PageTemplate 
      title="Tuning Real Mechanisms"
      previousPage={{ href: "/control-systems", title: "Control Systems" }}
    >
      <div className="bg-white rounded-lg p-8 shadow-lg border mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Tune Feedforward and PID</h2>
        <p className="text-gray-600 mb-6">
          There are many recommended ways to tune PID, including fancy formulas and tests. 
          However, we have always found it best to manually tune.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Tuner X Benefits</h3>
          <p className="text-blue-800 mb-3">
            CTRE&apos;s Tuner X allows you to control a motor directly. You can set and change 
            voltage, PID, FF, and MotionMagic values without deploying code!
          </p>
          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold text-gray-900 mb-2">Why Use On-Motor Controllers?</h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Runs at 1000Hz vs 50Hz</li>
              <li>• Set and Forget operation</li>
              <li>• Advanced Motion Magic for smoother, consistent movement</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Motion Magic Advantages</h3>
          <p className="text-green-800">
            Profiled controllers enable you to limit and set realistic maximum velocities 
            and accelerations. This makes movements repeatable and smoother by following 
            realistic targets and allowing feedforward control.
          </p>
        </div>
      </div>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Code Evolution: From Basic to Advanced</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Workshop Journey Complete</h3>
          <p className="text-gray-700">
            Explore the final ARM implementation and see exactly how we transformed basic voltage control 
            into sophisticated position control with PID, feedforward, and Motion Magic.
          </p>
        </div>

        {/* External Tabbed Interface */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('ide')}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === 'ide'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                💻 Final Implementation
              </button>
              <button
                onClick={() => setActiveTab('diff')}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === 'diff'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🔄 GitHub Changes
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-0">
            {activeTab === 'ide' ? (
              <div>
                <GitHubPage
                  repository="Hemlock5712/2025-Workshop"
                  filePath="src/main/java/frc/robot/subsystems/Arm.java"
                  branch="5-SubsystemAdditions"
                  className="m-0"
                />
              </div>
            ) : (
              <div>
                <GitHubPR
                  repository="Hemlock5712/2025-Workshop"
                  pullRequestNumber={1}
                  focusFile="Arm.java"
                  className="m-0"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}