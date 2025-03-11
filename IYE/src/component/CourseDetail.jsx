import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                console.log(`Fetching course with ID: ${id}`); // Debugging

                const res = await axios.get(`http://localhost:4001/course/${id}`);
                console.log("API Response:", res.data); // Debugging

                if (res.data) {
                    setCourse(res.data);
                } else {
                    console.log("No course data received");
                }
            } catch (error) {
                console.error("Error fetching course:", error);
            }
        };
        fetchCourse();
    }, [id]);



    if (!course) return <h1>Loading...</h1>;

    return (

        <>
            <Navbar />
            <br />
            <div className="max-w-3xl mx-auto p-6 mt-8 dark:bg-slate-900 dark:text-white">
                <h1 className="text-3xl font-bold text-center">{course.name}</h1>
                <img src={course.image} alt={course.name} className="w-full mt-4 rounded-md shadow-lg" />
                <p className="mt-4 text-lg">{course.title}</p>
                <p className="mt-2 text-blue-600">Category: {course.category}</p>
                <p className="mt-2 font-semibold">Price: {course.price}</p>
                <div className='mt-2 text-slate-900 dark:bg-slate-900 dark:text-white'>
                    <h2 className="font-semibold">Details:</h2>
                    {course.details.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>

                
                <Link to="/course">
                    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                        Back to Courses
                    </button>
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default CourseDetail;
