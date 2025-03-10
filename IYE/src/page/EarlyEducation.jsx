import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Testimonials from "./NurseryPrents";

const EarlyEducation = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-5xl mx-auto p-6 mt-12 space-y-8 text-gray-900 dark:text-white">
        {/* Header Section */}
        <div className="p-6 rounded-lg shadow-lg bg-red-400 dark:bg-gray-900 text-center border">
          <h1 className="text-3xl font-bold">💡 Because Early Education Shapes the Future!</h1>
          <p className="mt-2 text-lg">
            At Illuminate Your Education (IYE), we nurture, engage, and develop essential life skills in your child.
            <br />
            Our structured program is carefully designed by child psychologists and educators.
          </p>
        </div>

        {/* Why Choose IYE Section */}
        <div className="p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 border">
          <h2 className="text-2xl font-semibold">🌱 Why Choose IYE for Your Child?</h2>
          <ul className="mt-2 space-y-2">
            <li><strong>✔ Expert & Trained Teachers:</strong> Personalized attention & structured learning.</li>
            <li><strong>✔ Parent Involvement:</strong> Regular updates & engagement.</li>
            <li><strong>✔ Play-Based Learning:</strong> Holistic growth through fun activities.</li>
            <li><strong>✔ Comprehensive Curriculum:</strong> Beyond traditional subjects.</li>
          </ul>
        </div>

        {/* Learning Approach Section */}
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 border">
          <h2 className="text-2xl font-semibold">📖 Our Learning Approach – More Than Just Studies!</h2>
          <ul className="mt-2 space-y-2">
            <li><strong>🧠 Nurturing Young Minds:</strong> Blending care, discipline, and fun.</li>
            <li><strong>🔹 Balanced Guidance:</strong> Structured yet friendly approach.</li>
            <li><strong>🔹 Small Rewards:</strong> Encouraging participation with fun incentives.</li>
            <li><strong>🔹 Play-Based Bonding:</strong> Games, storytelling, and creative activities.</li>
          </ul>
        </div>

        {/* Extra Skills Section */}
        <div className="p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 border">
          <h2 className="text-2xl font-semibold">🎨 Extra Skill-Based Learning for Nursery & KG</h2>
          <ul className="mt-2 space-y-2">
            <li><strong>📖 Storytelling Sessions:</strong> Enhances language and listening skills.</li>
            <li><strong>🎨 Art & Craft:</strong> Encourages creativity and coordination.</li>
            <li><strong>🎭 Sensory Play:</strong> Engaging activities like dough play and water play.</li>
          </ul>
        </div>

        {/* Sensory Activities Section */}
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 border">
          <h2 className="text-2xl font-semibold">🎯 Fun & Engaging Sensory Activities for Home Tutoring</h2>
          <ul className="mt-2 space-y-2">
            <li><strong>🎭 Feely Bag Game:</strong> Identifying objects by touch.</li>
            <li><strong>🎈 Bubble Wrap Popping:</strong> Improves finger strength.</li>
            <li><strong>🔮 Sensory Bottles:</strong> Helps in visual tracking & calming.</li>
          </ul>
        </div>

        {/* Promises to Parents */}
        <div className="p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 border">
          <h2 className="text-2xl font-semibold">📢 Promises to Parents</h2>
          <ul className="mt-2 space-y-2">
            <li><strong>✔ Beyond Just Teaching:</strong> We take responsibility for your child's development.</li>
            <li><strong>✔ Transparent Learning:</strong> Stay informed about your child’s progress.</li>
            <li><strong>✔ Expert Educators:</strong> Structured learning for success.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="p-6 rounded-lg shadow-lg bg-red-400 text-white text-center">
          <h2 className="text-2xl font-semibold">Enroll Your Child Today!</h2>
          <p className="mt-2 text-lg">Give your child the best start to their education journey.</p>
          <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 transition">
            <a href="https://wa.me/message/2KRZEEKQKG2ID1">Get Started</a>
          </button>
        </div>
      </div>
      
      <Testimonials />
      <Footer />
    </>
  );
};

export default EarlyEducation;
