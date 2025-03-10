import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Payment = () => {
  const upiId = "7717707814@ptsbi"; // Replace with actual UPI ID
  const whatsappNumber = "+91 7766870970"; // Replace with actual WhatsApp number
  const qrCodeUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(`upi://pay?pa=${upiId}&pn=YourName&cu=INR`);

  // Share to WhatsApp
  const shareToWhatsApp = () => {
    const formattedNumber = whatsappNumber.replace(/\D/g, ""); // Removes non-digits
    const message = encodeURIComponent("Payment successful. Please check the details.");
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white mt-12 p-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          
          {/* Logo */}
          <img
            src="/7thlogo.jpg" // Replace with actual logo
            alt="IYE Logo"
            className="w-20 h-20 rounded-full mx-auto mb-2"
          />
          <p className="text-lg font-semibold text-gray-700 dark:text-white">
            IYE Payment
          </p>

          {/* QR Code */}
          <div className="flex justify-center my-4">
            <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 rounded-md shadow-lg" />
          </div>

          {/* UPI ID */}
          <p className="text-lg font-medium text-gray-700 dark:text-white">
            Scan the QR code or use UPI ID:
          </p>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
            {upiId}
          </p>

          {/* Copy UPI ID Button */}
          <button
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              navigator.clipboard.writeText(upiId);
              alert("UPI ID copied!");
            }}
          >
            Copy UPI ID
          </button>

          {/* Payment Confirmation Message */}
          <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-800 rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-700 dark:text-white">
              📢 After payment, share the screenshot with the student ID on WhatsApp:
            </p>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-green-600 dark:text-green-400 mt-2 block"
            >
              {whatsappNumber}
            </a>
          </div>

          {/* Share to WhatsApp Button */}
          <button
            onClick={shareToWhatsApp}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Share Payment Confirmation on WhatsApp
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
