import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const PrimaryEducation = () => {
  return (
    <>
     <Navbar />
     <br />
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white mt-10">
      {/* Header Section */}
      <div className="bg-red-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Primary Education (1st - 3rd Class)</h1>
        <p className="mt-2 text-lg">A strong foundation for lifelong learning.</p>
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

      {/* Call to Action */}
      <div className="bg-red-400 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold">Enroll Your Child Today!</h2>
        <p className="mt-2 text-lg">Give your child the best start to their education journey.</p>
        <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 transition">
          <a href="https://wa.me/message/2KRZEEKQKG2ID1">Get Started</a>
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrimaryEducation;
