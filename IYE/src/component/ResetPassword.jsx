import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get("token");

    console.log("Token from URL:", token); // ✅ Debugging token

    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token) {
            setError("Invalid or missing reset token.");
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            setError("Invalid or missing reset token.");
            return;
        }

        setLoading(true);
        setError("");
        setMessage("");

        try {
            const response = await fetch("https://iye.onrender.com/user/reset-password", { 
                method: "POST",
                body: JSON.stringify({ token, newPassword }),
                headers: { "Content-Type": "application/json" },
            });

            let data;
            try {
                data = await response.json();
            } catch (err) {
                throw new Error("Invalid JSON response from server");
            }

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setMessage("Password reset successfully! You can now log in.");
            setTimeout(() => {
                if (window.opener) {
                    window.close(); // Close the tab if opened from email
                } else {
                    navigate("/"); // Redirect to Home if window.close() is blocked
                }
            }, 2000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4 text-center">Reset Password</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {message && <p className="text-green-500 text-center">{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
