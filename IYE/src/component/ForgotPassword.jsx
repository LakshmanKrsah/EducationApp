import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      console.log("📤 Sending request to backend...");
      const response = await fetch("http://localhost:4001/user/forgot-password", { 
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log("📥 Response received:", data);

      if (response.ok) {
        setMessage("✅ Reset link sent to your email!");
        setTimeout(() => {
          onClose(); // Close modal
          navigate("/"); // Redirect to Home page
        }, 2000);
      } else {
        setMessage(`❌ Error: ${data.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("❌ Request Failed:", error);
      setMessage("Failed to send request.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-2 text-center">{message}</p>}
        <button 
          onClick={onClose} 
          className="mt-4 w-full text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
