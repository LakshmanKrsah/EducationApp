import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const TermsAndConditions = () => {
  return (
   <>
   <Navbar />
   <br />
   <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-12 dark:bg-slate-800 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
      
      {/* Teacher Terms and Conditions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">For Teachers</h2>
        <ul className="list-decimal pl-6 space-y-2">
          <li>Teachers will be compensated daily if parents fail to make payments after recharge expiry.</li>
          <li>Demo classes remain unpaid regardless of whether parents proceed with hiring.</li>
          <li>No leave policy applies during exams; teachers must adhere to the schedule.</li>
          <li>Violating company policies may lead to termination or disciplinary action.</li>
          <li>A 15-day notice is required before leaving; failure to do so may impact pending payments.</li>
          <li>Salaries can be withdrawn every 10 days or monthly (paid on the 10th of each month).</li>
          <li>Unauthorized tutoring outside the platform is strictly prohibited.</li>
          <li>Legal offenses such as harassment, theft, fraud, or misconduct result in immediate termination.</li>
          <li>Policies may change at any time; updates will be communicated via WhatsApp/Mail.</li>
          <li>Failure to complete a syllabus on time requires extra classes at no additional cost.</li>
          <li>Absence for more than 3 days without notice may lead to replacement and forfeited payments.</li>
          <li>Rude behavior, negligence, or misconduct may lead to termination.</li>
          <li>Personal contact details must not be shared unless permitted by IYE.</li>
          <li>Direct payments from parents are not allowed; all transactions go through IYE.</li>
          <li>Confidential information must not be shared outside IYE.</li>
          <li>Content created for IYE belongs to IYE and cannot be used elsewhere.</li>
          <li>Leaving without clearing responsibilities may lead to legal action.</li>
        </ul>
      </section>

      {/* Student Terms and Conditions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">For Students</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fees are non-refundable once a paid class is attended.</li>
          <li>Regular class attendance is required; no replacement class for unnotified absences.</li>
          <li>Pending dues must be cleared before discontinuation of service.</li>
          <li>Misconduct or disruptions may lead to removal from the program.</li>
          <li>The company is not responsible for personal transactions between parents and teachers.</li>
          <li>Direct payments to teachers are prohibited; all payments must go through IYE.</li>
          <li>Complaints against teachers should be reported formally to IYE.</li>
          <li>Policy changes will be communicated via WhatsApp/Mail.</li>
          <li>False allegations against IYE or teachers may lead to legal action.</li>
          <li>Student achievements may be used for marketing unless parents opt out in writing.</li>
          <li>If a teacher is absent for more than 3 days without notice, IYE may terminate them.</li>
        </ul>
      </section>
    </div>
    <Footer />

   </>
  );
};

export default TermsAndConditions;
