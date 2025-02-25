import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Define the onSubmit function
    const onSubmit = (data) => {
        console.log(data);
        // You can add logic for form submission here, e.g., API call for login
    };
    

    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close Button */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
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
                                className='w-80 px-3 py-1 border rounded-md outline-none' 
                                {...register("email", { required: "Email is required" })}
                            />
                            
                            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input 
                                type="password" 
                                placeholder='Enter your password' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                        </div>
                        {/* Button */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Login
                            </button>
                            <p>Not registered? 
                                <Link to='/signup' className='underline text-blue-500 cursor-pointer'>
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
