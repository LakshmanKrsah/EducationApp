import React from "react";

const benefits = [
  {
    title: "✅ Flexible Teaching –",
    text: "Teach only the subjects you love with no extra burden. Choose your preferred schedule and location.",
    borderColor: "border-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "✅ Work-Life Balance –",
    text: "Maximum up to 24 classes per month. Compensatory leave options available.",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "💰 Teach. Earn. Withdraw – No Waiting! 💰",
    text: "Withdraw your earnings anytime in 10-day cycles and enjoy instant rewards for your hard work!",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    title: "✅ Incentives & Recognition –",
    text: "Earn bonuses for student performance, top ratings, and referrals.",
    borderColor: "border-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "✅ Teacher Incentive Program –",
    text: "Earn extra incentives when students achieve 85%+ marks or when parents rate you highly.",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    title: "✅ Profit-Sharing Opportunity –",
    text: "Get up to 50% profit-sharing for every student you bring to IYE.",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "✅ Travel Support –",
    text: "Get travel expenses covered when teaching outside your preferred location.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "✅ Job Security & Growth –",
    text: "Consistent earnings, multiple income streams, and career stability.",
    borderColor: "border-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "✅ Unlimited Earning Potential –",
    text: "Teach more, earn more! Choose part-time, full-time, online, offline, or even Teacher on Call (TOC) roles.",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-100",
  },
];

export default function TeacherInfoSection() {
  return (
    <div className="max-w-4xl mx-auto text-center p-8">
      <h2 className="text-3xl font-bold text-blue-800 dark:text-purple-500 mb-6">
        Join Our Teaching Team
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        We are looking for passionate and skilled teachers who love to educate and inspire students. 
        If you have experience and are enthusiastic about teaching, apply now!
      </p>
      
      <div className="space-y-6 text-left">
        {benefits.map((item, index) => (
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
