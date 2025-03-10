import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UpdateSection = () => {
  const [updates, setUpdates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/update"); // Ensure URL is correct
        console.log("Fetched Data:", response.data); // Debugging log
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
        {/* Title Section */}
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          {updates.title || "Latest Updates"}
        </h2>

        {/* MCQ Test Section */}
        <div className="bg-white shadow-lg p-5 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
            📌 {updates.mcqTitle || "MCQ Test"}
          </h3>
          <p className="text-gray-600 mt-2">{updates.mcqDescription}</p>
          <a
            href={updates.mcqLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-500 text-white px-4 py-2 rounded-md text-center mt-3 hover:bg-blue-600"
          >
            Take Weekly Quiz
          </a>
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-lg p-5 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
            📌 {updates.skillsTitle || "Enhance Your Skills"}
          </h3>
          <p className="text-gray-600 mt-2">{updates.skillsDescription}</p>
          <a
            href={updates.skillsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white px-4 py-2 rounded-md text-center mt-3 hover:bg-green-600"
          >
            Enroll in Skill Classes
          </a>
        </div>

        {/* Exam Tips Section */}
        <div className="bg-white shadow-lg p-5 rounded-lg border">
          <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
            📌 {updates.examTipsTitle || "Exam Tips & Strategies"}
          </h3>
          <p className="text-gray-600 mt-2">{updates.examTipsDescription}</p>
          <a
            href={updates.examTipsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-500 text-white px-4 py-2 rounded-md text-center mt-3 hover:bg-yellow-600"
          >
            View Exam Tips
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateSection;
