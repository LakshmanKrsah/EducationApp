import React, { useState, useEffect } from "react";

const testimonials = [
  {
    "testimonials": [
      {
        "id": 1,
        "name": "Abhisek Anand",
        "role": "Student",
        "message": "I love my teachers! They explain everything so well, and I feel much more confident in class now!",
        "image": "./public/images/s1.png"
      },
      {
        "id": 2,
        "name": "Piyush Kumar",
        "role": "Student",
        "message": "I used to be scared of asking questions, but now I can ask anything without hesitation!",
        "image": "./public/images/s4.jpg"
      },
      {
        "id": 3,
        "name": "Khushi Kumari",
        "role": "Student",
        "message": "Learning at home is so much fun! My teachers make sure I understand everything, and I enjoy my classes!",
        "image": "./public/images/s2.png"
      },
      {
        "id": 4,
        "name": "Kumari Deepti",
        "role": "Student",
        "message": "The extra skill classes are my favorite! I get to learn beyond textbooks—things like coding, communication, and logical thinking.",
        "image": "./public/images/s5.jpg"
      },
      {
        "id": 5,
        "name": "Kamal Raj",
        "role": "Student",
        "message": "Fortnightly tests help me track my progress! I can see what I need to improve, and my teachers guide me to get better each time!",
        "image": "https://randomuser.me/api/portraits/men/40.jpg"
      },
      {
        "id": 6,
        "name": "Raju Anand Vardhan",
        "role": "Parent",
        "message": "Finally, a tuition service that truly cares about my child’s progress! The personalized attention has helped my child improve in ways I never expected!",
        "image": "./public/images/p1.png"
      },
      {
        "id": 7,
        "name": "Harsh Vardhan Jha",
        "role": "Parent",
        "message": "Affordable & Effective! I was worried about the cost, but IYE offers expert teachers at a reasonable price with real progress!",
        "image": "./public/images/p2.png"
      },
      {
        "id": 8,
        "name": "Savitri Devi",
        "role": "Parent",
        "message": "The real-time teacher arrival & departure notifications and complaint service make me feel more involved and assured about my child’s learning experience!",
        "image": "./public/images/Savitri.png"
      },
      {
        "id": 9,
        "name": "Devesh Singh",
        "role": "Teacher",
        "message": "IYE respects teachers! I get to teach only the subjects I love, without any unnecessary workload.",
        "image": "./public/images/t1.jpg"
      },
      {
        "id": 10,
        "name": "Ambuz Ankesh",
        "role": "Teacher",
        "message": "Instant payments & flexible work! I don’t have to wait till the month-end to get my earnings!",
        "image": "./public/images/t2.jpg"
      },
      {
        "id": 11,
        "name": "Gautam Mihsra",
        "role": "Teacher",
        "message": "The referral program is amazing! More students = more income! Teaching at IYE is truly rewarding!",
        "image": "./public/images/t3.jpg"
      },
      {
        "id": 12,
        "name": "Shubham Mishra",
        "role": "Teacher",
        "message": "Transparent & Supportive! - IYE management values teachers, gives incentives, and ensures a great work-life balance!",
        "image": "./public/images/t6.jpg"
      },
      {
        "id": 13,
        "name": "Prakesh Kumar",
        "role": "Teacher",
        "message": "Switching between online and offline is easy! Teaching at IYE is smooth, flexible, and stress-free!",
        "image": "./public/images/t5.jpg"
      },
      {
        "id": 14,
        "name": "Soni Devi",
        "role": "Parent",
        "message": "The real-time teacher arrival & departure notifications and complaint service make me feel more involved and assured about my child’s learning experience!",
        "image": "./public/images/parents3.jpg"
      },
      {
        "id": 15,
        "name": "Bhanumati Rani",
        "role": "Parent",
        "message": "I feel at ease knowing IYE provides substitute teachers whenever needed! My child’s learning never stops, even if the regular teacher is unavailable.",
        "image": "./public/images/parents2.jpg"
      },
      {
        "id": 16,
        "name": "Jyoti",
        "role": "Parent",
        "message": "Their fortnightly progress updates help me track my child's learning journey. It’s amazing to see real improvements with actual reports!",
        "image": "./public/images/parents1.jpg"
      },
    ]
  }
];


const TestimonialSection = ({ role, color }) => {
  const filteredTestimonials = testimonials[0].testimonials.filter(t => t.role === role);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Pause the sliding when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length, isPaused]);

  return (
    <div 
      className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      <h3 className={`text-xl font-semibold ${color} mb-4`}>{role}s</h3>
      <div className="overflow-hidden relative w-full">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {filteredTestimonials.map(item => (
            <div key={item.id} className="min-w-full text-center p-6">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mx-auto mb-2 border-4 border-gray-300 dark:border-gray-600" />
              <p className="text-gray-700 dark:text-gray-300 italic">"{item.message}"</p>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {filteredTestimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        What People Say About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <TestimonialSection role="Student" color="text-blue-500" />
        <TestimonialSection role="Parent" color="text-green-500" />
        <TestimonialSection role="Teacher" color="text-red-500" />
      </div>
    </div>
  );
};

export default Testimonials;
