import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TeacherEarnings() {
  const [earnings, setEarnings] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      setEarnings((prev) => (prev < 30000 ? prev + 1000 : 10000));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">Teacher Earnings</h2>

      {/* Earnings Display */}
      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
        ₹{earnings.toLocaleString()} / month
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
        <motion.div
          className="h-6 bg-green-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${((earnings - 10000) / 20000) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Earning Range Labels */}
      <div className="flex justify-between w-full text-sm font-semibold mt-2 text-gray-600 dark:text-gray-400">
        <span>₹10K <br />per month</span>
        <span>₹30K <br />per month</span>
      </div>
    </div>
  );
}
