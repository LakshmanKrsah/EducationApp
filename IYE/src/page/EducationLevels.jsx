import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EducationLevels = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Nursery & KG",
      description: "Fun and interactive learning experiences to build strong foundational skills.",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-500",
      path: "/early-education", // Correctly defined path
    },
    {
      title: "1st to 3rd Class",
      description: "Engaging curriculum to develop critical thinking and creativity.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500",
      path: "/primary-education",
    },
    {
      title: "4th to 10th Class (CBSE & ICSE)",
      description: "Comprehensive academic support tailored for CBSE and ICSE students.",
      bgColor: "bg-green-100",
      borderColor: "border-green-500",
      path: "/secondary-education",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:bg-slate-900 dark:text-purple-400">
        Choose Your Learning Path
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md border-l-4 ${section.bgColor} ${section.borderColor} cursor-pointer hover:shadow-lg transition`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
            <p className="text-gray-700">{section.description}</p>
            
            {section.path && (
              <button
                onClick={() => navigate(section.path)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Know More
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationLevels;
