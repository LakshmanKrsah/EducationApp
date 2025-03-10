import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <br />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors">
        <div className="max-w-3xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-all">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information when you use our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">1. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We may collect personal information such as your name, email, and usage data to improve our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">2. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We use your information to enhance our services, provide customer support, and ensure security.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">3. Data Protection</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We implement strong security measures to protect your data from unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">4. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you have any questions about this Privacy Policy, you can contact us at{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">support@iye.com</span>.
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">Last Updated: {currentDate}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
