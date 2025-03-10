import React from "react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col items-center sm:bottom-5 sm:right-5">
      {/* Demo Message Box */}
      <div className="bg-slate-900 dark:bg-white p-2 sm:p-3 rounded-lg shadow-md mb-1 sm:mb-2 text-center">
        <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-white dark:text-black whitespace-pre-line sm:whitespace-normal">
          3 Days Free{"\n"}Demo Class!
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 dark:text-gray-700">
          Say Hii!!!.
        </p>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917766870970?text=%22Hello%20%20IYE!%20%F0%9F%8E%89%0A%F0%9F%93%A9%20For%20more%20info%2C%20visit%3A%20www.iye.org.in%20%F0%9F%8C%8D%0A%20IYE%20revolutionizing%20personalized%20home%20tuition%20with%3A%0A%E2%9C%85%20Two-Teacher%20Module%20%E2%80%93%20Learn%20from%20two%20expert%20teachers.%0A%E2%9C%85%20Doubt%20Assistance%20%E2%80%93%20Get%20instant%20support%20anytime.%0A%E2%9C%85%20Ombudsman%20Support%20%E2%80%93%20Because%20grades%20shine%20when%20the%20mind%20is%20fine!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
