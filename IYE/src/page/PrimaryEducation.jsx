import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const PrimaryEducation = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white mt-12">
        {/* Header Section */}
        <div className="bg-red-400 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Primary Education (Grades 1st - 3rd )</h1>
          <p className="mt-2 text-lg">A strong foundation for lifelong learning. <br />
            <span className="text-bold">Our structured program is carefully designed by child psychologists and educators </span>
          </p>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Description */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-500">Why Primary Education Matters?</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Our primary education program focuses on interactive and engaging learning experiences.
                We help children develop critical thinking, creativity, and a strong academic base through
                structured activities.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Develops logical thinking and problem-solving skills</li>
                <li>Encourages creativity through interactive lessons</li>
                <li>Strengthens communication and language skills</li>
                <li>Builds confidence in a fun learning environment</li>
              </ul>
            </div>

            {/* Right Side - Image */}
            <div>
              <img
                src="https://storage.googleapis.com/orchidsinternational-cms/blog/Primary-education-scaled.jpg"
                alt="Primary Education"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* WHY STUDY WITH IYE Section */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">🎯 WHY STUDY WITH IYE? </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            💡 Because Early Education Shapes the Future! At Illuminate Your Education (IYE), we go beyond just academics —
            we nurture, engage, and develop essential life skills in your child. Our structured program is carefully designed by
            child psychologists and educators to ensure mental, physical, and emotional development, helping your child learn
            in a fun, engaging, and effective way.
          </p>

          <h3 className="text-2xl font-semibold text-blue-500 mt-6">🌱 Why Choose IYE for Your Child?</h3>

          <div className="mt-4 text-gray-700 dark:text-gray-300 text-lg space-y-6">
            <div>
              <strong>✔ Expert & Trained Teachers:</strong> A perfect balance of learning, discipline & fun!
              <br />Our well-trained educators provide personalized attention, focusing on every aspect of early learning. Unlike traditional tuition, we nurture young minds with care and responsibility. Our Nursery & Kindergarten teachers follow a child-centered approach, creating a safe and engaging learning environment.
            </div>

            <div>
              <strong>✔ Parent Involvement:</strong> We ensure that parents stay informed about how their child is learning and growing. (Fortnightly – Alternate Sunday of month).
              <br />We don’t just teach subjects—we develop essential skills that help children excel in academics and beyond!
            </div>

            <div>
              <strong>✔ Structured, Engaging & Play-Based Curriculum for Overall Growth:</strong> Our structured curriculum goes beyond academics, using games, activities, and play-based methods to develop cognitive, sensory, physical, and creative skills, ensuring a joyful and well-rounded learning experience for your child.
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Interactive Learning", desc: "Hands-on activities and digital learning tools." },
              { title: "Creative Curriculum", desc: "Designed to nurture imagination and curiosity." },
              { title: "Safe & Fun Environment", desc: "Encouraging confidence and social development." },
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-blue-500">{feature.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY STUDY WITH IYE Section */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">📖 Our Learning Approach – More Than Just Studies!</h2>

          <div className="text-gray-700 dark:text-gray-300 text-lg space-y-6">
            <div><strong>🧠 Nurturing Young Minds with Care, Discipline & Fun!</strong></div>
            <div><strong>🔹 Balanced Guidance –</strong> Teachers maintain a structured yet friendly approach, ensuring children stay on track while learning in a playful manner.</div>
            <div><strong>🔹 Play-Based Bonding –</strong> Interactive games, storytelling, and creative activities make learning engaging & joyful.</div>
            <div><strong>🔹 Small Rewards, Big Motivation –</strong> Chocolates, stickers, and fun incentives encourage active participation.</div>
            <div><strong>🔹 Active Learning – No Passive Sitting! –</strong> Teachers move around with students, ensuring they stay engaged & attentive. Since young children often struggle to sit still for long periods, our teachers use a movement-based learning approach to keep them engaged, ensuring better focus and effective learning.</div>
            <div><strong>🔹 Encouraging Curiosity –</strong> 90% of children hesitate to ask questions. At IYE, we nurture curiosity, confidence, and creative thinking from an early age!</div>
          </div>
        </div>

        <br />

        {/* 📚 IYE Learning Plan for Grades 1st to 3rd */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">📚 IYE Learning Plan </h2>

          <div className="text-gray-700 dark:text-gray-300 text-lg space-y-6">
            <div><strong>✔ Firm Yet Friendly Approach –</strong> Teach with a mix of discipline and playfulness, ensuring engagement.</div>
            <div><strong>✔ Interactive & Play-Based Learning –</strong> Move with students, use games, storytelling, and creative activities.</div>
            <div><strong>✔ Motivational Rewards –</strong> Encourage participation with stickers, chocolates, and behavior-based rewards.</div>
            <div><strong>✔ Encouraging Questions –</strong> Help students ask more, think more, and explore.</div>
            <div><strong>✔ Building Happy Learning Experiences –</strong> Learning should be fun, memorable, and discipline-focused.</div>
          </div>
        </div>

        <br />
        {/* 📖 Language & Communication Skills */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">📖 Language & Communication Skills</h2>
          <div className="text-gray-700 dark:text-gray-300 text-lg">
            <p><strong>✔ English & Hindi Reading & Writing –</strong> Books provided for practice.</p>
            <p><strong>✔ Speaking & Vocabulary –</strong> Learning English meanings & public speaking skills.</p>
            <p><strong>✔ Storytelling & Interpretation –</strong> Making stories from pictures to boost creativity.</p>
          </div>
        </div>
        <br />
        {/* 🧠 Confidence & Social Development */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">🧠 Confidence & Social Development</h2>
          <div className="text-gray-700 dark:text-gray-300 text-lg">
            <p><strong>✔ Question Asking Ability –</strong> Encouraging curiosity and expression.</p>
            <p><strong>✔ Public Speaking & Interaction –</strong> Learning how to speak confidently in groups.</p>
            <p><strong>✔ Success Stories of Great People –</strong> Motivational stories to inspire children.</p>
          </div>
        </div>
        <br />
        {/* 🧠 Cognitive & Memory Skills */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">🧠 Cognitive & Memory Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="text-gray-700 dark:text-gray-300 text-lg">
              <p><strong>✔ Retention Techniques –</strong> Activities to boost memory & recall power.</p>
              <p><strong>✔ Learning Approach Development –</strong> Identifying if a child learns better by listening or writing.</p>
              <p><strong>✔ General Knowledge & Current Affairs –</strong> Awareness of world events & basic geography.</p>
            </div>

            {/* Right Side */}
            <div className="text-gray-700 dark:text-gray-300 text-lg">
              <p><strong>✔ Math Fundamentals –</strong> Learning tables, squares, cubes & quick calculations.</p>
              <p><strong>✔ Problem-Solving Skills –</strong> Developing logical reasoning & analytical thinking.</p>
              <p><strong>✔ Clock Reading & Time Management –</strong> Understanding how to read time & manage daily tasks.</p>
            </div>
          </div>
        </div>
        <br />
        {/* 🖋 Handwriting & Fine Motor Skills, 🎭 Discipline & Manners, 💻 Tech Learning, 🎉 Fun Activities, 🧩 Problem-Solving */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">📚 Skill Development & Learning Enhancement</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="text-gray-700 dark:text-gray-300 text-lg">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">🖋 Handwriting & Fine Motor Skills</h3>
              <p><strong>✔ Handwriting Improvement –</strong> Focus on clarity & speed in writing.</p>

              <h3 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">🎭 Discipline, Manners & Social Awareness</h3>
              <p><strong>✔ Good Manners & Behavior –</strong> Teaching respect, etiquette & responsibility.</p>
              <p><strong>✔ Importance of Parents –</strong> Understanding family values & emotional connection.</p>

              <h3 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">💻 Technology & Digital Learning</h3>
              <p><strong>✔ Basic Computer Knowledge –</strong> Learning through pictures & interactive activities.</p>
            </div>

            {/* Right Side */}
            <div className="text-gray-700 dark:text-gray-300 text-lg">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">🎉 Fun & Interactive Learning (Extra Skills on Saturdays!)</h3>
              <p><strong>✔ Prayers & Rhymes Learning –</strong> Encouraging cultural & moral values.</p>
              <p><strong>✔ Skill-Based Games for Brain Development:</strong></p>
              <ul className="mt-2 space-y-2">
                <li>🎲 <strong>OX Game –</strong> Strategic thinking</li>
                <li>✋ <strong>Stone-Paper-Scissors –</strong> Quick decision-making</li>
                <li>🏆 <strong>Cup Game –</strong> Hand-eye coordination</li>
              </ul>

              <h3 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">🧩 Problem-Solving & Critical Thinking</h3>
              <p><strong>✔ Logical & Analytical Thinking –</strong> Engaging in puzzles, real-life problem-solving.</p>
              <p><strong>✔ Step-by-Step Approach –</strong> Teaching how to break down & solve problems efficiently.</p>
              <p><strong>✔ Creative Thinking –</strong> Encouraging mind-mapping, brainstorming & different perspectives.</p>
              <p><strong>✔ Coding & Logical Reasoning –</strong> Introduction to structured problem-solving through coding activities.</p>
            </div>
          </div>
        </div>
        <br />
        {/* 💡 IYE's Commitment to Students & Parents */}
        <div className="container mx-auto px-6 py-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">💡 Our Commitment to Your Child’s Future!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
            At IYE, we ensure that students develop not just academically but also in essential life skills,
            preparing them for future challenges! 🚀📚
          </p>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-500 text-center mb-4">📢 Our Promises to Parents – Why Choose IYE?</h3>

            <div className="text-gray-700 dark:text-gray-300 text-lg space-y-4">
              <p><strong>✅ Beyond Just Teaching – We Take Responsibility!</strong><br />
                We don’t just teach; we ensure your child’s complete development with a structured learning approach.</p>

              <p><strong>✅ Transparent & Engaging Learning</strong><br />
                Parents stay updated on their child’s progress with regular updates and structured learning plans.</p>

              <p><strong>✅ Open Parent Communication!</strong><br />
                Parents can share teacher feedback anytime via WhatsApp or book an appointment for a Parent-Mentor Meeting.
                If a teacher violates policies or pressures students unfairly, strict action will be taken.</p>
            </div>
          </div>
        </div>
        <br />

        {/* Call to Action */}
        <div className="bg-red-400 text-white py-12 text-center">
          <h2 className="text-2xl font-semibold">Enroll Your Child Today!</h2>
          <p className="mt-2 text-lg">Give your child the best start to their education journey.</p>
          <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 transition">
            <a href="https://wa.me/917766870970?text=%22Hello%20%20IYE!%20%F0%9F%8E%89%0A%F0%9F%93%A9%20For%20more%20info%2C%20visit%3A%20www.iye.org.in%20%F0%9F%8C%8D%0A%20IYE%20revolutionizing%20personalized%20home%20tuition%20with%3A%0A%E2%9C%85%20Two-Teacher%20Module%20%E2%80%93%20Learn%20from%20two%20expert%20teachers.%0A%E2%9C%85%20Doubt%20Assistance%20%E2%80%93%20Get%20instant%20support%20anytime.%0A%E2%9C%85%20Ombudsman%20Support%20%E2%80%93%20Because%20grades%20shine%20when%20the%20mind%20is%20fine!">Get Started</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrimaryEducation;
