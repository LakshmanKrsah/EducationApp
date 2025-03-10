import { useState } from 'react';

const TeachersSection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-teal-500 mb-2">Our Teachers</h3>

            <p className="text-gray-600 dark:text-gray-300">
                Our platform allows teachers to focus on their expertise without the burden of teaching subjects outside their interest.
                We offer flexible working hours, timely payments, travel allowances, and incentives to ensure a stress-free teaching experience.
            </p>

            {/* Revealed Content */}
            {showMore && (
                <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                        At IYE, teachers receive recognition and rewards based on their students' achievements.
                        With structured fortnightly feedback, progress assessments, and innovative teaching methodologies, we ensure that both students and teachers thrive together.
                    </p>
                    <p>
                        Additionally, we provide career growth opportunities, skill enhancement programs, and professional development resources that help educators achieve their personal and professional goals.
                        Whether it’s gaining more experience, improving teaching strategies, or building financial stability, we support our teachers in every step of their journey.
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

export default TeachersSection;
