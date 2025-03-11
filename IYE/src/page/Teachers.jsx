import React, { useState, useEffect } from "react";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import TeacherTimeline from "./TeacherTimeline";
import TeacherInfoSection from "./TeacherInfoSection";
import TeachersAnimated from "./TeachersAnimated";
import TeacherEarnings from "./TeacherEarnings";
import TeacherResponsibilities from "./TeacherResponsibilities";

const Teachers = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    whatsapp: "",
    email: "",
    experience: "",
    language: "",
    address: "",
    gender: "",
    subject: "",
  });

  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // ✅ Add success state

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("FRONTEND_URL/api/teachers");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        setTeachers(data);
        console.log("Fetched teachers:", data);
      } catch (err) {
        console.error("Error fetching teachers:", err);
      }
    };

    fetchTeachers();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success message
  
    try {
      const response = await fetch("https://iye.onrender.com/api/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || `HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Success:", data);
      
      setSuccess("Application submitted successfully! ✅"); // ✅ Set success message
      setFormData({
        name: "",
        dob: "",
        whatsapp: "",
        email: "",
        experience: "",
        language: "",
        address: "",
        gender: "",
        subject: "",
      });
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  return (
    <>
    <Navbar />
    <br />

    <TeachersAnimated />
    <br />
    <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 dark:bg-slate-900 dark:text-white">
      
      {/* Teacher Info Section */}
      <TeacherTimeline />
      
      {/* Application Form Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-slate-900 dark:text-white">
        <h3 className="text-xl font-semibold text-gray-800 dark:bg-slate-900 dark:text-white mb-4">Apply for Teaching Position</h3>
        
        {success && <p className="text-green-600">{success}</p>}  {/* ✅ Show success message */}
        {error && <p className="text-red-600">{error}</p>}  {/* Show error message */}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "dob", "whatsapp", "email", "experience", "subject"].map((field) => (
            <input
              key={field}
              type={field === "dob" ? "date" : "text"}
              name={field}
              placeholder={field.replace(/\b\w/g, (c) => c.toUpperCase())}
              value={formData[field]}
              className="w-full border p-2 rounded-md dark:bg-slate-900 dark:text-white"
              onChange={handleChange}
              required
            />
          ))}

          <select name="language" className="w-full border p-2 rounded-md dark:bg-slate-900 dark:text-white" value={formData.language} onChange={handleChange} required>
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="both">Both</option>
          </select>

          <textarea
            name="address"
            placeholder="Current Address"
            value={formData.address}
            className="w-full border p-2 rounded-md h-24 dark:bg-slate-900 dark:text-white"
            onChange={handleChange}
            required
          />

          <div className="flex space-x-4">
            {["male", "female", "other"].map((g) => (
              <label key={g} className="flex items-center">
                <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} required /> {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Submit Application
          </button>
        </form>
      </div>
    </div>
    <TeacherEarnings />
    <br />
    <TeacherInfoSection />
    <br />
    <TeacherResponsibilities />
    <Footer />
    </>
  );
};



export default Teachers;
