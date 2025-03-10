import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './ForgotPassword';

function Login() {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Logged in Successfully');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                        window.location.reload();
                    }, 1000);
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <Toaster position="top-right" reverseOrder={false} />
            {/* Login Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close Button */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => {
                                document.getElementById("my_modal_3").close();
                            }}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-gray-700 dark:text-white'
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
                                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-gray-700 dark:text-white'
                                {...register("password", { required: "Password is required" })}
                            />
                            <br />
                            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                        </div>
                        {/* Forgot Password Button */}
                        <div className="mt-2 text-right">
                            <button
                                type="button"
                                onClick={() => {
                                    document.getElementById("my_modal_3").close(); // Close login modal
                                    setTimeout(() => setShowForgotPassword(true), 300); // Open forgot password modal
                                }}
                                className="text-blue-500 underline"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        {/* Button */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Login
                            </button>
                            <p>Not registered? 
                                <a href='/signup' className='underline text-blue-500 cursor-pointer'>
                                    Signup
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>

            {/* Show ForgotPassword Modal */}
            {showForgotPassword && <ForgotPassword onClose={() => setShowForgotPassword(false)} />}
        </div>
    );
}

export default Login;
