import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    // Define the onSubmit function
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup Successfully');
                    localStorage.setItem("Users", JSON.stringify(res.data.user));

                    // Redirect to home page after successful signup
                    setTimeout(() => {
                        navigate("/");  // Redirect to home page
                    }, 2000);  // Redirect after 2 seconds
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    // State to track dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check user's preference on first load
    useEffect(() => {
        const userPref = localStorage.getItem('theme');
        if (userPref === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <>
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />  {/* Toast Notification */}
            <div className='flex h-screen items-center justify-center bg-white dark:bg-slate-900 dark:text-white'>
                <div className="w-[600px]">
                    <div className="modal-box dark:bg-slate-800 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Close Button */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        
                            <h3 className="font-bold text-lg">Signup</h3>
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input 
                                    type="text" 
                                    placeholder='Enter your FullName' 
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white' 
                                    {...register("fullname",
                                        { required: "Name is required" })}
                                />
                                <br />
                                {errors.fullname && <span className='text-red-500'>{errors.fullname.message}</span>}
                            </div>
                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white' 
                                    {...register("email", { required: "Email is required" })}
                                />
                                <br />
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>
                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white' 
                                    {...register("password", { required: "Password is required" })}
                                />
                                <br />
                                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                            </div>
                            {/* Button */}
                            <div className='flex justify-around mt-4'>
                                <button 
                                    type="submit"  // Changed to button for form submission
                                    className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                    Signup
                                </button>
                                <p className='text-xl'>Have an account?{" "}
                                    <button className='underline text-blue-500 cursor-pointer'
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }>
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="absolute top-4 right-4 bg-gray-200 dark:bg-slate-700 text-black dark:text-white px-4 py-2 rounded-md shadow-md"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
