import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../component/Cards';
import { Link } from 'react-router-dom';

function Course() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        const getCourse = async () => {
            try {
                const res = await axios.get("https://iye.onrender.com/course");
                console.log(res.data);
                setCourse(res.data);
            } catch (error) {
                console.log("AxiosError", error);
            }
        };
        getCourse();
    }, []);

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-12'>
                <div className='mt-19 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl pt-16'>We're delighted to have you
                        <span className='text-pink-500'> Here!😊</span>
                    </h1>
                    <p className='pt-6 whitespace-pre-line'>
                        At IYE, We are here to guide,
                        With learning paths open wide.
                        From home tuition to tailored care,
                        We help you grow, learn, and dare.

                        Your dreams, we help you reach,
                        With wisdom and skills we teach.
                        Together, we'll aim for the sky,
                        Achieving greatness, soaring high!
                    </p>

                    <Link to='/'>
                        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
                    {

                        course.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Course;
