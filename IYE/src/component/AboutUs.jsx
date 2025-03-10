import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";
import TeachersSection from './TeachersSection';
import StudentsSection from './StudentsSection';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen pt-20 dark:bg-slate-900 dark:text-white">
                <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x600)' }}>
                    <div className="absolute inset-0 bg-red-400 dark:bg-pink-500 bg-opacity-80  flex justify-center items-center">
                        <h1 className="text-white text-5xl font-bold">About Us</h1>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto py-10 px-4">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">We Prepare Your Champ for the Real World!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMHdvcmt8ZW58MHx8MHx8fDA%3D" alt="Team Work" className="rounded-lg w-full" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                            At IYE, We believe that every child is unique, blessed with some special talents. Our vision is to help students become the best version of themselves by unlocking their true potential. <br/>Instead of following the old traditional education system, we bring methods that empower students to discover their passion and build a successful & happy career around it.<br/> Education is the foundation of a child's future. Only by strengthening a child's foundation, we pave the way for a successful & happy career.<br/> We Offer - 
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                                <li>Following Two - Teacher Module.</li>
                                <li>Personalized One-on-One Learning Experience with Doubt Assistance.</li>
                                <li>We Believe in Overall Development, not Just Academic Growth.</li>
                                <li>More than Just Academics - Skill-Based Learning, Completely Free of Cost </li>
                            </ul>
                            <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300"><a href="/learn">Learn More</a></button>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-10 px-4 mr-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: Cards */}
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-teal-500 mb-2">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                            At IYE, We have a Vision for a brighter & Happier Future for each Student so that it will ILLUMINATE Our India's TOMMORROW.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-teal-500 mb-2">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                            <span className='font-semibold text-blue-500'>Skill-Oriented Education:</span> Emphasizes essential 21st-century skills such as problem-solving, programming languages, digital literacy, and confidence building.
                            </p>
                        </div>
                        <div className="bg-red-600 text-white rounded-lg p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">Our History</h3>
                            <p>
                            Illuminate Your Education (IYE) was founded to bridge the gap between traditional learning and modern skills. It integrates academic excellence with personalized learning to prepare students for real-world challenges.
                            </p>
                        </div>
                    </div>

                    {/* Middle column */}
                    <div className="space-y-4">
                        <TeachersSection/>
                        <StudentsSection/>
                        
                    </div>

                    {/* Right Column: Main Content */}
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 p-8 flex flex-col justify-center text-white">
                            <h2 className="text-2xl font-bold mb-4">
                            "Our Plan Makes You Feel More Comfortable in Unlocking Stress-Free Academic Success with Our Strategic Learning Solutions! Get Personalized Guidance from Two Expert Teachers for the Price of One—because Mastering Every Subject Alone isn't Easy!" </h2>
                            <p className="mb-6">
                            IYE offers home tuition from Nursery to Class 10, ensuring a tailored learning experience for every student.
                            </p>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition duration-300">
                                <a href="/contact">Contact Us</a>
                            </button>
                        </div>
                    </div>
                </section>


                <div className="bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-gray-100">
                    {/* Section 1 */}
                    <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="h-full">
                            <img
                                src="https://img.freepik.com/free-photo/close-up-person-holding-smartphone_23-2148389008.jpg?semt=ais_hybrid"
                                alt="Team Work"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center h-full bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                            <h3 className="text-3xl font-semibold mb-4">
                                We're Here to Help You Achieve Your Goals
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                            At IYE, we are dedicated to empowering students with personalized learning experiences and innovative strategies. Our goal is to foster growth and success through a comprehensive curriculum tailored to individual needs.
                            </p>
                            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
                                <a href="/contact">Contact Us</a>
                            </button>
                        </div>
                    </section>

                    {/* Section 2 */}


                    <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-red-600 text-white rounded-lg p-6 shadow hover:shadow-lg transition h-full">
                            <CheckCircle className="w-12 h-12 mb-4 text-white" />
                            <h3 className="text-2xl font-semibold mb-2">Commitment</h3>
                            <p>
                            At IYE, we are committed to delivering quality education and personalized support, ensuring every student reaches their full potential.
                            </p>
                        </div>
                        <div className="bg-red-600 text-white rounded-lg p-6 shadow hover:shadow-lg transition h-full">
                            <ShieldCheck className="w-12 h-12 mb-4 text-white" />
                            <h3 className="text-2xl font-semibold mb-2">Honesty</h3>
                            <p>
                            We believe in transparency and integrity, building trust through open communication and honest guidance at every step.
                            </p>
                        </div>
                        <div className="bg-red-600 text-white rounded-lg p-6 shadow hover:shadow-lg transition h-full">
                            <TrendingUp className="w-12 h-12 mb-4 text-white" />
                            <h3 className="text-2xl font-semibold mb-2">Growth</h3>
                            <p>
                            We are dedicated to continuous learning and development, empowering individuals to reach their full potential and achieve their dreams.
                            </p>
                        </div>
                    </section>


                    {/* Statistics */}
                    {/* <section className="max-w-6xl mx-auto py-10 px-4 mr-5 grid grid-cols-2 md:grid-cols-4 gap-30 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-red-600">500+</h3>
                            <p className="text-gray-600 dark:text-gray-300">Satisfied Parents</p>
                        </div>
                        {/* <div>
                            <h3 className="text-3xl font-bold text-red-600">3,456+</h3>
                            <p className="text-gray-600 dark:text-gray-300">Case Finished</p>
                        </div> */}
                        {/* <div>
                            <h3 className="text-3xl font-bold text-red-600">4.8</h3>
                            <p className="text-gray-600 dark:text-gray-300">Parents Rating</p>
                        </div> */}
                        {/* <div>
                            <h3 className="text-3xl font-bold text-red-600">10+</h3>
                            <p className="text-gray-600 dark:text-gray-300">Branch Office</p>
                    //     </div> */}
                    {/* // </section> */} 

                    {/* Team Section */}
                    <section className="max-w-6xl mx-auto py-10 px-4">
                        <h2 className="text-3xl font-semibold text-center mb-6">
                            Meet Our Professional Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src="./public/images/lakshman.png"
                                    alt="Lakshman Kumar Sah"
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold">Lakshman Kumar Sah</h3>
                                    <p>MCA-Masters's of Computer Application <br />BITS MESRA</p>
                                    <p className="text-gray-600 dark:text-gray-300">Co-Founder & CTO</p>
                                    <div className="flex justify-center mt-4 space-x-4">
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src="./public/images/shubham.jpg"
                                    alt="Ella Grace"
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold">Shubham Anand</h3>
                                    <p>MCA-Masters's of Computer Application <br />BITS MESRA</p>
                                    <p className="text-gray-600 dark:text-gray-300">Co-Founder & CEO</p>
                                    
                                    <div className="flex justify-center mt-4 space-x-4">
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src="./public/images/saurav.jpg"
                                    alt="Kylian Herrera"
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold">Surendra Saurav</h3>
                                    
                                    <p className="text-gray-600 dark:text-gray-300">Co-Founder & CMO</p>
                                    <div className="flex justify-center mt-4 space-x-4">
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>


                            
                        </div>
                    </section>
                </div>


            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
