import React, { useState } from "react";
import Carousel from "./Carousel";
import AnimatedText from "./AnimatedSection";
import EducationLevels from '../page/EducationLevels';
import ParentInfoSection from "./ParentInfoSection";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",  // Added phone field
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Enquiry submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to submit enquiry. Try again.");
      }
    } catch (error) {
      setStatus("Error submitting enquiry. Check your connection.");
    }
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Content Section */}
        <div className="space-y-6 dark:bg-slate-900 dark:text-white">
          <h2 className="text-3xl font-bold text-gray-800 dark:bg-slate-900 dark:text-blue-500">Get in Touch with Us</h2>
          <p className="text-gray-600 dark:bg-slate-900 dark:text-white">
            Have any questions or need assistance? Fill out the form, and we'll get back to you soon.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:bg-slate-900 dark:text-white space-y-2">
            <li>24/7 Customer Support</li>
            <li>Personalized Consultation</li>
            <li>Fast and Reliable Responses</li>
          </ul>
        </div>

        {/* Enquiry Form Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-slate-900 dark:text-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center dark:bg-slate-900 dark:text-white">Enquiry Form</h3>
          <form className="space-y-4 dark:bg-slate-900 dark:text-white" onSubmit={handleSubmit}>
            <div className="dark:bg-slate-900 dark:text-white">
              <label className="block text-gray-700 dark:bg-slate-900 dark:text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-slate-900 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:bg-slate-900 dark:text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-slate-900 dark:text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:bg-slate-900 dark:text-white">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-slate-900 dark:text-white"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:bg-slate-900 dark:text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-slate-900 dark:text-white"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>

          {/* Status Message */}
          {status && <p className="mt-4 text-center text-gray-700 dark:text-white">{status}</p>}
        </div>
      </div>
    </section>
  );
}
export function Banner() {
  return (
    <>
      <br />
      <section className="bg-red-300 mt-12 py-12 px-6 md:px-12 text-center dark:bg-slate-900 dark:text-white">
        <AnimatedText />
      </section>

      <div className="dark:bg-slate-900 dark:text-white">
        <Carousel />
      </div>
      <br />
      <EducationLevels />

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:mt-32 md:ml-16 text-center md:text-left">
          <div className="space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Why Study with IYE? <span className="text-pink-500"> <br /> Innovate, Educate, Elevate!!!</span>
            </h1>

            {/* Information Section */}
            <div className="space-y-6 text-left">
              {[
                {
                  title: "✅ Personalised Learning, Your Way with Expert Teachers –",
                  text: "One-on-one home tuition, available online & offline – because every student learns at their own pace and in their own unique way! 🚀📚",
                  borderColor: "border-green-500",
                  bgColor: "bg-green-200 dark:bg-green-900",
                },
                {
                  title: "🚀 Two-Teacher Module –",
                  text: "No One Can Master All Subjects! First-Ever Two-Teacher Module for Home Tuition – Expert Teachers for Subjects, Because Your Child Deserves the Best!",
                  borderColor: "border-blue-500",
                  bgColor: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  title: "🕵 Ombudsman Support,  –",
                  text: "At IYE, Your Child’s Mental Well-Being Matters! Because when the Mind is fine, Grades shine! ✨🚀 These facilities have been adopted from the Finland education system.",
                  borderColor: "border-purple-500",
                  bgColor: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  title: "💡 First-Time Ever Doubt Clearance Assistance for Home Tuition–",
                  text: "Stuck on a Question? Get Instant Solutions with Our Doubt Clearance Assistance – No Need to Wait for the Next Class!",
                  borderColor: "border-yellow-500",
                  bgColor: "bg-yellow-200 dark:bg-yellow-900",
                },

                {
                  title: "🤝 More than Just Academics – At No Additional Cost",
                  text: "💻 Computer Programming & Logical Reasoning 🕵 Personality Development & Confidence Building 📢 Communication skills & Public Speaking 📖 Smart Calculation Trick & Exam Strategies 🔥 Developing Question Asking Ability🚀",
                  borderColor: "border-orange-500",
                  bgColor: "bg-orange-200 dark:bg-orange-900",
                },

                {
                  title: "📚 Ensuring Academic Progress –",
                  text: "✅ Structured Revision Classes and School Homework Support.\n ✅ Timely Syllabus Completion – Monitored & tracked by our management to ensure readiness.",
                  borderColor: "border-teal-500",
                  bgColor: "bg-teal-200 dark:bg-teal-900",
                },

                {
                  title: "🏆 Exam-Ready Approach –",
                  text: "📖 Fortnightly Tests – Open Book, Written & Oral Exams for Stronger Learning & Retention! Regular revision is essential for academic success! These tests help students reinforce concepts, improve recall ability, and track their progress. They also enable teachers to assess whether students have fully understood the concepts and provide additional support where needed. 📚✅",
                  borderColor: "border-red-500",
                  bgColor: "bg-red-200 dark:bg-red-900",
                },
                {
                  title: "📝 Competitive Exam Prep – Weekly MCQ Tests with +4, -1 Strategy!",
                  text: "Through extensive analysis, we’ve found that time management and smart question selection are key to success.\n✅ Train students to avoid negative marking.\n✅ Learn smart question selection to identify time-consuming questions.\n✅ Prepare from the start for a strategic approach to exams.\n💡 Success isn’t just about answering—it’s about answering smartly! 🚀",
                  borderColor: "border-indigo-500",
                  bgColor: "bg-indigo-200 dark:bg-indigo-900",
                },

                {
                  title: "🏅 Unique Student Engagement & Rewards –",
                  text: "🎖 'Student of the Month' Awards – Earn certificates, goodies & social media recognition!\n🎁 Leaderboard & Reward System – Gain points, win prizes, and be featured in our Hall of Fame!",
                  borderColor: "border-amber-500",
                  bgColor: "bg-amber-200 dark:bg-amber-900",
                },
                {
                  "title": "🚀 No More Rigid Streams!",
                  "text": "With the New Education Policy, students can mix and match subjects like Maths with History or Physics with Economics – and we’re here to make that transition seamless!",
                  "borderColor": "border-orange-500",
                  "bgColor": "bg-orange-100 dark:bg-orange-900"
                },

                {
                  "title": "📚 Equal Focus on Every Subject",
                  "text": "Because every choice matters, we ensure students receive balanced attention across all subjects.",
                  "borderColor": "border-blue-500",
                  "bgColor": "bg-blue-100 dark:bg-blue-900"
                },
                {
                  "title": "🧠 Skill-Based Learning",
                  "text": "Go beyond textbooks! Develop analytical, application-based, and critical-thinking skills for real-world success.",
                  "borderColor": "border-green-500",
                  "bgColor": "bg-green-100 dark:bg-green-900"
                },
                {
                  "title": "🚀 Smooth Adaptation to NEP",
                  "text": "The New Education Policy brings subject flexibility and skill-based learning. We make sure students transition seamlessly and excel with confidence!",
                  "borderColor": "border-purple-500",
                  "bgColor": "bg-purple-100 dark:bg-purple-900"
                }



              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-md border-l-4 ${item.borderColor} ${item.bgColor}`}
                >
                  <p className="text-gray-900 font-semibold dark:text-white">{item.title}</p>
                  <p className="text-gray-800 dark:text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-bold">Book Free Demo Now..</p>

              <a
                href="https://wa.me/message/2KRZEEKQKG2ID1"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition inline-block mt-4"
              >
                Join IYE Today 🚀
              </a>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-36 md:mr-10 px-4 dark:bg-slate-900 dark:text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:bg-slate-900 dark:text-white">
              Why Teach with IYE?
            </h2>
            <div className="space-y-6 text-left">
              {[
                {
                  title: "✅ Flexible Teaching –",
                  text: "Teach only the subjects you love with no extra burden. Choose your preferred schedule and location.",
                  borderColor: "border-green-500",
                  bgColor: "bg-green-100",
                },
                {
                  title: "✅ Work-Life Balance –",
                  text: "Maximum up to 24 classes per month. Compensatory leave options available.",
                  borderColor: "border-green-500",
                  bgColor: "bg-green-100",
                },
                {
                  title: "✅ Job Security & Growth –",
                  text: "Consistent earnings, multiple income streams, and career stability. We also offer full-time positions for stability to the best teachers.",
                  borderColor: "border-blue-500",
                  bgColor: "bg-blue-100",
                },
                {
                  title: "✅ Substitute Teacher Allocation –",
                  text: "If a teacher takes a long leave, a substitute teacher is assigned with their consent to cover part of the syllabus. This ensures that the returning teacher faces no syllabus burden and has no concerns about job security.",
                  borderColor: "border-green-500",
                  bgColor: "bg-green-100",
                },
                {
                  title: "💰 Teach. Earn. Withdraw – No Waiting! 💰",
                  text: "Withdraw your earnings anytime in 10-day cycles and enjoy instant rewards for your hard work!",
                  borderColor: "border-yellow-500",
                  bgColor: "bg-yellow-100",
                },
                {
                  title: "🎯 Teach More, Earn More, Withdraw Instantly! 🎯",
                  text: "✅ Get paid instantly for doubt sessions. Complete your session, receive your payment—no waiting!",
                  borderColor: "border-blue-500",
                  bgColor: "bg-blue-100",
                },
                {
                  title: "✅ Teacher Incentive Program –",
                  text: "Earn extra incentives when students achieve 85%+ marks and when parents rate you highly.",
                  borderColor: "border-green-500",
                  bgColor: "bg-green-100",
                },
                {
                  title: "✅ Bonuses & Recognition –",
                  text: "Earn bonuses for student performance, top ratings, and referrals. Stand out as the Teaching Tycoon with rewards, certificates, and a spot in the Hall of Fame.",
                  borderColor: "border-green-500",
                  bgColor: "bg-green-100",
                },
                {
                  title: "💼 Profit-Sharing Opportunity –",
                  text: "Get up toS 50% profit-sharing for every student you bring to IYE, paid monthly until they continue studying with us.",
                  borderColor: "border-blue-500",
                  bgColor: "bg-blue-100",
                },
                {
                  title: "✅ Travel Support –",
                  text: "Get travel expenses covered when teaching outside your preferred location.",
                  borderColor: "border-purple-500",
                  bgColor: "bg-purple-100",
                },
                {
                  title: "✅ Unlimited Earning Potential –",
                  text: "Teach more, earn more! Choose part-time, full-time, online, offline, or even Teacher on Call (TOC) roles.",
                  borderColor: "border-orange-500",
                  bgColor: "bg-orange-100",
                },

                {
                  "title": "👩🏫 Flexible Teaching Mode",
                  "text": "Switch between offline & online! Teachers can shift up to 2 classes per month online with parent’s consent if needed.",
                  "borderColor": "border-teal-500",
                  "bgColor": "bg-teal-100"
                },
                {
                  "title": "💼 Teach the Way You Want",
                  "text": "Choose part-time, full-time, online, offline, or even Teacher on Call (TOC) roles to fit your lifestyle.",
                  "borderColor": "border-blue-500",
                  "bgColor": "bg-blue-100"
                },
                {
                  "title": "📈 Upskill & Grow",
                  "text": "Stay ahead with skill-based teaching, training sessions, and continuous learning opportunities.",
                  "borderColor": "border-green-500",
                  "bgColor": "bg-green-100"
                },
                {
                  "title": "🤝 Join a Supportive Community",
                  "text": "Be part of a network of passionate educators, share knowledge, and grow together.",
                  "borderColor": "border-teal-500",
                  "bgColor": "bg-teal-100"
                }



              ].map((item, index) => (
                <div key={index} className={`${item.bgColor} p-6 rounded-lg shadow-md border-l-4 ${item.borderColor}`}>
                  <p className="text-gray-700 font-semibold">{item.title}</p>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-bold">Become a Valued Member of the IYE Teaching Family.</p>

              <a
                href="https://chat.whatsapp.com/JwdLc21LHb1GEjBUjo2dFF"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition inline-block mt-4"
              >
                Join IYE Today 🚀
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <ParentInfoSection />

      {/* Enquiry Form */}
      <hr />
      <EnquiryForm />
    </>
  );
}

export default Banner;
