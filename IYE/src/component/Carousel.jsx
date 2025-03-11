import React, { useState, useEffect } from "react";
import axios from "axios";

const Carousel = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch Cards from Backend
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("https://iye.onrender.com/carousel");
        setCards(response.data);
      } catch (err) {
        console.error("Error fetching cards:", err);
      }
    };
    fetchCards();
  }, []);

  // Animation Logic
  useEffect(() => {
    if (isPaused) return; // Pause animation when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (!isReversing) {
          if (prevIndex < cards.length - 1) return prevIndex + 1;
          setIsReversing(true);
        } else {
          if (prevIndex > 0) return prevIndex - 1;
          setIsReversing(false);
        }
        return prevIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isReversing, cards.length, isPaused]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-r from-blue-200 to-purple-200 dark:bg-slate-900 dark:text-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-transform duration-1000 ease-in-out 
            ${index === currentIndex ? "translate-x-0" : index < currentIndex ? "-translate-x-full" : "translate-x-full"}`}
        >
          <div
            className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-3xl shadow-2xl bg-white p-8 transform transition duration-500 hover:scale-105 relative"
            onMouseEnter={() => setIsPaused(true)} // Pause when hovered
            onMouseLeave={() => setIsPaused(false)} // Resume when left
          >
            <div className="flex justify-center mb-4 relative">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="rounded-full w-40 h-40 shadow-lg bg-purple-500 object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-center text-blue-800 mb-1">
              {card.title}
            </h2>
            <h3 className="text-2xl text-center text-blue-600 mb-4">
              {card.subtitle}
            </h3>
            <p className="text-gray-500 text-center mb-4">{card.description}</p>
            <div className="flex justify-center">
              <button className="bg-green-500 text-white rounded-full px-8 py-3 shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-110">
              <a
                href="https://wa.me/message/2KRZEEKQKG2ID1"
                
              >
                Contact Us
              </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
