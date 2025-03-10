import React from "react";

const benefits = [
  {
    title: "🎯 Get 3 Days of Free Demo Classes – Experience Before You Proceed!",
    text: "In a world where many focus only on profit, we focus on your child’s improvement first. See the quality of our teaching and then decide! Try it first, believe in it, then invest in your child’s future! ✅",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "🔄 Hassle-Free Teacher Replacement – Your Satisfaction Matters!",
    text: "Not satisfied? Request a teacher change within 3 days of the demo. Get 2 more free demo days with a new teacher—and if you're still not happy, 100% fee will be refunded! ✅",
    borderColor: "border-red-500",
    bgColor: "bg-red-100",
  },
  {
    title: "⏳ No More Worries About Teaching Duration!",
    text: "Parents get real-time arrival & departure notifications of teachers, ensuring complete transparency and peace of mind. ✅",
    borderColor: "border-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "📊 Fortnightly Student Reports for Complete Transparency!",
    text: "Get detailed progress tracking with test scores, teacher feedback on strengths & areas for improvement. Updates on daily task completion by the teacher. Stay informed about your child’s growth with easy-to-understand graphical reports for a clear and simple overview!",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    title: "💬 Parent Feedback System",
    text: "Share your thoughts or complaints anytime via WhatsApp or scheduled calls. We value your input and strive to ensure the best learning experience for your child.",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    "title": "🌍 Traveling or Your Child is Sick?",
    "text": "No worries! Students can switch between offline & online classes with parental consent for uninterrupted learning.",
    "borderColor": "border-blue-500",
    "bgColor": "bg-blue-100"
  },
  {
    "title": "⏳ Missed a Class? No Problem!",
    "text": "Students can avail up to 2 compensatory classes per month to cover missed lessons and stay ahead.",
    "borderColor": "border-orange-500",
    "bgColor": "bg-orange-100"
  },

  {
    title: "📅 Substitute Teachers",
    text: "If a teacher takes a long leave, we ensure seamless learning continuity with a qualified substitute, so your child’s education never stops.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "👩🏫 Female Teachers Available",
    text: "Upon request, we provide female teachers for comfort & preference, ensuring a supportive learning environment for your child.",
    borderColor: "border-pink-500",
    bgColor: "bg-pink-100",
  },
  
  {
    "title": "📚 Seamless Learning Experience",
    "text": "Keep your child’s education on track with flexible class options and personalized support.",
    "borderColor": "border-green-500",
    "bgColor": "bg-green-100"
  },
 
  {
    "title": "🚀 Learning Without Interruptions!",
    "text": "We ensure a smooth, flexible, and stress-free education experience—anytime, anywhere!",
    "borderColor": "border-purple-500",
    "bgColor": "bg-purple-100"
  }
];

export default function ParentInfoSection() {
  return (
    <div className="max-w-4xl mx-auto text-center p-8">
      <h2 className="text-3xl font-bold text-blue-800 dark:text-purple-500 mb-6">
        Why Parents Trust IYE?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        We prioritize your child's learning experience and ensure complete satisfaction.
        Here's why parents love IYE!
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

      <div className="mt-8">
        <a
          href="https://wa.me/message/2KRZEEKQKG2ID1"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition"
        >
          Join IYE Today 🚀
        </a>
      </div>
    </div>
  );
}
