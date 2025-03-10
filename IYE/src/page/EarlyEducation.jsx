import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Testimonials from './NurseryPrents';

const EarlyEducation = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-5xl mx-auto p-6 mt-12 space-y-8 text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">💡 Because Early Education Shapes the Future!</h1>
          <p className="mt-2 text-lg">
            At Illuminate Your Education (IYE), we nurture, engage, and develop essential life skills in your child.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center">
          <video className="w-3/4 rounded-lg shadow-lg" controls>
            <source src="/videos/nursery_lkg_ukg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Graphical Representation
        <div className="flex justify-center">
          <img src="/images/education_graphic.png" alt="Educational Representation" className="w-3/4 rounded-lg shadow-lg" />
        </div> */}

        {/* Why Choose IYE Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🌱 Why Choose IYE for Your Child?</h2>
          <ul className="pl-5 space-y-2">
            <li>✔ One Teacher, Complete Learning! Personalized attention for your child.</li>
            <li>✔ Structured & Engaging Learning Approach with games & activities.</li>
            <li>✔ Play-Based Learning for Holistic Growth in cognitive & creative development.</li>
            <li>✔ Parent Involvement ensures you stay informed about your child’s progress.</li>
            <li>✔ Curriculum Focused on Overall Growth, beyond just subjects.</li>
          </ul>
        </div>

        {/* Learning Approach Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📖 Our Learning Approach – More Than Just Studies!</h2>
          <ul className="pl-5 space-y-2">
            <li>🧠 Nurturing Young Minds with care, discipline & fun.</li>
            <li>🔹 Play-Based Bonding – Interactive games & storytelling.</li>
            <li>🔹 Small Rewards, Big Motivation – Chocolates, stickers & fun incentives.</li>
            <li>🔹 Active Learning – No Passive Sitting! Teachers move with students.</li>
            <li>🔹 Encouraging Curiosity – We nurture confidence & creative thinking.</li>
          </ul>
        </div>

        {/* Extra Skills Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🎨 Extra Skill-Based Learning for Nursery & KG</h2>
          <ul className="pl-5 space-y-2">
            <li>📖 Storytelling Sessions – Improves language skills & imagination.</li>
            <li>🎨 Art & Craft – Enhances hand-eye coordination & creativity.</li>
            <li>🎭 Sensory Play – Engaging activities like Dough Play, Sound Play & Water Play.</li>
          </ul>
        </div>

        {/* Sensory Activities Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🎯 Fun & Engaging Sensory Activities for Home Tutoring</h2>
          <ul className="pl-5 space-y-2">
            <li>🎭 Feely Bag Game – Identifying objects by touch.</li>
            <li>🎈 Bubble Wrap Popping – Improves finger strength.</li>
            <li>🔮 Sensory Bottles – Helps in visual tracking & calming.</li>
          </ul>
        </div>

        {/* Promises to Parents */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📢 Promises to Parents – What Sets Us Apart!</h2>
          <ul className="pl-5 space-y-2">
            <li>✔ Beyond Just Teaching – We Take Responsibility!</li>
            <li>✔ Transparent Learning – Stay informed about your child’s progress.</li>
            <li>✔ Expert & Trained Educators – Structured learning for success.</li>
            <li>✔ Teacher Replacement Policy – 100% Satisfaction Guaranteed!</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-red-400 text-white py-12 text-center">
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
