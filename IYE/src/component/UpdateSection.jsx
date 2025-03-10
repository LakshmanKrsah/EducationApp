import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UpdateSection = () => {
  const [updates, setUpdates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showQuizzes, setShowQuizzes] = useState(false);
  const [showExamMaterials, setShowExamMaterials] = useState(false);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/update");
        console.log("Fetched Data:", response.data);
        setUpdates(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching updates:", error);
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  if (loading) {
    return <div className="text-center py-6 text-lg font-semibold">Loading updates...</div>;
  }

  if (!updates) {
    return <div className="text-center py-6 text-lg font-semibold">No updates available.</div>;
  }

  return (
    <>
      <Navbar />
      <br />
      <div className="p-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          {updates.title || "Latest Updates"}
        </h2>

        {/* MCQ Test Section with Expandable Quiz List */}
        <div className="bg-white shadow-lg p-5 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
            📌 {updates.mcqTitle || "Weekly MCQ Test"}
          </h3>
          <p className="text-gray-600 mt-2">{updates.mcqDescription}</p>
          <button
            onClick={() => setShowQuizzes(!showQuizzes)}
            className="block bg-blue-500 text-white px-4 py-2 rounded-md text-center mt-3 hover:bg-blue-600 w-full"
          >
            {showQuizzes ? "Hide Quizzes" : "Take Weekly Quiz"}
          </button>
          {showQuizzes && (
            <div className="mt-4">
              {updates.quizzes && updates.quizzes.length > 0 ? (
                updates.quizzes.map((quiz, index) => (
                  <a
                    key={index}
                    href={quiz.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-center mt-2 hover:bg-gray-300"
                  >
                    {quiz.title}
                  </a>
                ))
              ) : (
                <p className="text-gray-500">No quizzes available.</p>
              )}
            </div>
          )}
        </div>

        {/* Enroll in Skill Classes Section */}
        <div className="bg-white shadow-lg p-5 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
            📌 {updates.skillsTitle || "Enroll in Skill Classes"}
          </h3>
          <p className="text-gray-600 mt-2">{updates.skillsDescription}</p>
          <a
            href={updates.skillsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white px-4 py-2 rounded-md text-center mt-3 hover:bg-green-600"
          >
            Enroll Now
          </a>
        </div>

        {/* Exam Tips & Strategies with Expandable Study Materials */}
        <div className="bg-white shadow-lg p-5 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
            📌 {updates.examTipsTitle || "Exam Tips & Strategies"}
          </h3>
          <p className="text-gray-600 mt-2">{updates.examTipsDescription}</p>
          <button
            onClick={() => setShowExamMaterials(!showExamMaterials)}
            className="block bg-yellow-500 text-white px-4 py-2 rounded-md text-center mt-3 hover:bg-yellow-600 w-full"
          >
            {showExamMaterials ? "Hide Materials" : "View Exam Tips"}
          </button>
          {showExamMaterials && (
            <div className="mt-4">
              {updates.examMaterials && updates.examMaterials.length > 0 ? (
                updates.examMaterials.map((material, index) => (
                  <a
                    key={index}
                    href={material.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-center mt-2 hover:bg-gray-300"
                  >
                    {material.title}
                  </a>
                ))
              ) : (
                <p className="text-gray-500">No materials available.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateSection;