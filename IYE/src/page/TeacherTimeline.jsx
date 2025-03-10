import React from "react";

export default function TeacherJourney() {
  const steps = [
    { icon: "👨‍🏫", text: "Become a Teacher" },
    { icon: "📖", text: "Share your Knowledge" },
    { icon: "📊", text: "Work Part Time" },
    { icon: "💰", text: "Earn Extra Income" },
  ];

  return (
    <div className="flex flex-col items-center space-y-6 bg-gray-50 dark:bg-gray-900 p-8 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-white mb-6">Teacher Journey</h2>

      {/* Rectangle Container */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-8 w-full max-w-2xl">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Icon & Vertical Line Container */}
            <div className="flex flex-col items-center mr-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl shadow-lg">
                {step.icon}
              </div>
              {/* Connecting Line (Only if not last item) */}
              {index !== steps.length - 1 && (
                <div className="w-1 bg-blue-500 h-14"></div>
              )}
            </div>

            {/* Text - Now aligned properly with the icon */}
            <div className="text-lg font-semibold text-gray-800 dark:text-white h-12">{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
