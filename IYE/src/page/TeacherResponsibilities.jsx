import React from "react";

const responsibilities = [
  {
    title: "✅ Daily Student Tracking",
    text: "Check diaries to ensure homework completion & assignment progress.",
    borderColor: "border-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "✅ Daily & Weekly Reports",
    text: "Submit daily progress updates and a weekly report on topics covered & upcoming plans.",
    borderColor: "border-pink-500",
    bgColor: "bg-pink-100",
  },

  {
    title: "✅ Fortnightly Feedback & Student Evaluation",
    text: "Teachers must evaluate each student’s strengths, weaknesses, and areas for improvement and submit the report in english every alternate Sunday. Assess on consistency, focus, recall, creativity, understanding & respect (rated 1-5).",
    borderColor: "border-red-500",
    bgColor: "bg-red-100",
  },
  
  {
    title: "✅ Syllabus Completion",
    text: "Finish at least 15 days before exams to allow revision time.",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-100",
  },
 
  {
    title: "✅ Fortnightly Test Preparation",
    text: "Teachers must prepare at least 10 questions for the fortnightly test to assess student progress effectively.",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    title: "✅ Subject Assistance",
    text: "Support students with doubts or test prep, even for subjects taught by another teacher.",
    borderColor: "border-indigo-500",
    bgColor: "bg-indigo-100",
  },
  
  {
    title: "✅ Parent Communication",
    text: "Notify parents of arrival & departure for transparency via WhatsApp or message.",
    borderColor: "border-teal-500",
    bgColor: "bg-teal-100",
  },
  {
    title: "✅ Compensatory Classes",
    text: "If a student informs in advance, they can avail up to 3 makeup classes/month (online/offline).",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "✅ Extra Income Opportunities",
    text: "Teachers with fewer leaves get priority for TOC & part-time earning options.",
    borderColor: "border-gray-500",
    bgColor: "bg-gray-100",
  },
];

export default function TeacherResponsibilities() {
  return (
    <div className="max-w-4xl mx-auto text-center p-8">
      <h2 className="text-3xl font-bold text-blue-800 dark:text-purple-500 mb-6">
        Teacher's Roles & Responsibilities
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        As a teacher at IYE, your role goes beyond teaching – you shape student's futures with structured guidance and accountability.
      </p>

      <div className="space-y-6 text-left">
        {responsibilities.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} p-6 rounded-lg shadow-md border-l-4 ${item.borderColor}`}
          >
            <p className="text-gray-700 font-semibold">{item.title}</p>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
