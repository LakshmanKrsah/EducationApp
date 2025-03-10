import { useState } from 'react';

const StudentsSection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-teal-500 mb-2">Our Students</h3>

            <p className="text-gray-600 dark:text-gray-300">
                At IYE, we believe that a strong foundation is the key to a successful academic and professional future. Our mission is to ensure that every student receives the best start by focusing on fundamental concepts, structured learning, and modern skills essential for the evolving world.

            </p>

            {/* Revealed Content */}
            {showMore && (
                <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                        We offer tuition classes for students from Nursery to Grade 10, nurturing young minds with academic excellence and skill-based learning. Beyond textbooks, we emphasize communication skills, computer programming, logical reasoning, and time management strategies to prepare students for real-world challenges.

                    </p>
                    <p>
                        With structured assessments, doubt-clearance sessions, and a transparent progress tracking system, we ensure that no student is left behind.
                        At our institute, education goes beyond textbooks—we shape thinkers, innovators, and future leaders.                                                                                                           Currently, we are operating in three cities – Bangalore, Lucknow, and Bhagalpur, with a growing community of 100+ students learning with us.

                    </p>
                    <p>
                        Our Motto -
                        <br />
                        🔹 "Building the Pillars of Your Future – IYE CAN, IYE WILL."
                        <br />
                        🔹 "Illuminate, Educate, Elevate."

                    </p>
                </div>
            )}

            {/* More Button */}
            <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-teal-500 hover:text-teal-700 focus:outline-none font-semibold transition"
            >
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default StudentsSection;
