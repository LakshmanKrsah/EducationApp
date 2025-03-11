import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !phone) {
      setError('Please fill in all fields.');
      setSuccess('');
    } else {
      try {
        const response = await fetch('https://iye.onrender.com/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, phone }),
        });

        const data = await response.json();
        if (response.ok) {
          setSuccess(data.message);
          setError('');
          setEmail('');
          setName('');
          setPhone('');
        } else {
          setError(data.message);
          setSuccess('');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Server error. Please try again later.');
        setSuccess('');
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-20 mt-15 dark:bg-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-800">
          <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">Contact Us</h2>
          <p className="text-gray-600 mb-6 dark:text-gray-300">
            Any questions or remarks? Just write us a message!
          </p>

          <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter a valid email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300 disabled:opacity-50"
              disabled={!email || !name || !phone}
            >
              SUBMIT
            </button>
          </form>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </div>

        <div className="bg-blue-500 mt-10 py-10 text-white">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2" aria-label="About WhatsApp">
                <a href="https://wa.me/message/2KRZEEKQKG2ID1">
                  <FaWhatsapp className="text-4xl" />
                </a>
              </div>
              <h3 className="text-xl font-bold">
                <a href="https://wa.me/message/2KRZEEKQKG2ID1">WhatsApp</a>
              </h3>
            </div>

            <div>
              <div className="flex justify-center mb-2" aria-label="Phone">
                <FaPhoneAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold">PHONE (LANDLINE)</h3>
              <p>
                <a href="tel:+917766870970" className="text-white hover:underline">
                  +91 7766870970
                </a>
              </p>
              <p>
                <a href="tel:+919798992691" className="text-white hover:underline">
                  +91 9798992691
                </a>
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-2" aria-label="Location">
                <FaMapMarkerAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold">OUR OFFICE LOCATION</h3>
              <p>Illuminate Your Education</p>
              <p>H.No. 096, Near P.T Middle School, Tilkamanjhi, Bhagalpur, Bihar, (812001)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
