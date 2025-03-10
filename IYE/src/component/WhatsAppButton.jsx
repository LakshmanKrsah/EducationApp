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
        href="https://wa.me/message/2KRZEEKQKG2ID1"
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
