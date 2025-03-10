import React, { useState, useEffect } from "react";

const testimonials = [
  {
    "testimonials": [
      {
        "id": 1,
        "name": "Kuhu Kumari",
        "role": "Student",
        "message": "मम्मा, मेरी टीचर मुझे गिनती खेल-खेल में सिखाती हैं! कभी हम उछलते हैं, कभी तालियाँ बजाते हैं, और मम्मा, मेरी टीचर ने आज मैजिक करवाया! जब मैंने सही रंग पहचाने, तो उन्होंने ताली बजाई और मुझे स्टार स्टिकर मिला! अब मैं और भी जल्दी-जल्दी सीखना चाहता हूँ!",
        "image": "./public/NurseryParents/ns3.png"
      },
      {
        "id": 2,
        "name": "Samiksha Kumari",
        "role": "Student",
        "message": "My teacher makes me play and learn together! Before, I didn’t like writing, but now we do fun activities with colors and shapes. I made a big round sun with my crayons, and my teacher said it was amazing!",
        "image": "./public/NurseryParents/ns2.png"
      },
      
      {
        "id": 3,
        "name": "Bishnu Priya",
        "role": "Teacher",
        "message": "IYE respects teachers! I get to teach only the subjects I love, without any unnecessary workload.",
        "image": "./public/images/t4.jpg"
      },
      {
        "id": 4,
        "name": "Sahil ",
        "role": "Teacher",
        "message": "Instant payments & flexible work! I don’t have to wait till the month-end to get my earnings!",
        "image": "./public/images/t7.jpg"
      },

      {
        "id": 5,
        "name": "Mamta Anand",
        "role": "Parent",
        "message": "I wanted my child to learn in a caring and structured way, and IYE made it possible! Their teachers are warm yet disciplined, ensuring my child learns while having fun!",
        "image": "./public/NurseryParents/p3.png"
      },
      {
        "id": 6,
        "name": "Niraj Mishra",
        "role": "Parent",
        "message": "I love how my child is not just studying but also learning life skills! Activities like storytelling, sensory play, and creative tasks have improved their confidence and curiosity!",
        "image": "./public/NurseryParents/p4.png"
      },
      {
        "id": 7,
        "name": "Aajay Kumar",
        "role": "Parent",
        "message": "No more screen addiction! The interactive teaching methods keep my child engaged with real-world activities instead of mobile screens!",
        "image": "./public/NurseryParents/parents1.jpg"
      },
      {
        "id": 8,
        "name": "Khushboo priya",
        "role": "Parent",
        "message": "The teacher keeps my child active! Instead of just sitting and studying, my child learns through movement, games, and fun activities!",
        "image": "./public/NurseryParents/parents2.jpg"
      },
      {
        "id": 9,
        "name": "Sangeeta Devi",
        "role": "Parent",
        "message": "IYE focuses on overall development, not just alphabets and numbers! From motor skills to social interaction, I can already see the positive changes in my child!",
        "image": "./public/NurseryParents/parents3.jpg"
      }
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
