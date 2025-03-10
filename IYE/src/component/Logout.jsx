import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Logout() {
    const [ authUser, setAuthUser ] = useAuth(); 
    const navigate = useNavigate(); // Import and use useNavigate

    const handleLogout = () => {
        try {
            setAuthUser(undefined); // Clear the auth state
            localStorage.removeItem("Users"); // Clear localStorage
            toast.success("Logout successfully");

            setTimeout(() => {
                navigate('/');  // Redirect to home page
            }, 1000);
            
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    }

    return (
        <div>
            <button 
                className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout;
