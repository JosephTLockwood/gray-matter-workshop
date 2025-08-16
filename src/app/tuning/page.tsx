import PageTemplate from "@/components/PageTemplate";

export default function Tuning() {
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
            CTRE's Tuner X allows you to control a motor directly. You can set and change 
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
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          📋 <strong>Content Coming Soon:</strong> Step-by-step tuning procedures for ARM and Flywheel mechanisms.
        </p>
      </div>
    </PageTemplate>
  );
}