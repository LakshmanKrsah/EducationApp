import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { HiOutlineMail } from "react-icons/hi";
import Logo from '/Logo.jpg';
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 space-y-6 mt-10 dark:bg-slate-900 dark:text-white">

        {/* Quick Links and Legal Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center md:text-left">
          {/* Logo and Company Name */}
          <div className="flex justify-center md:justify-start space-x-4">
            <img src={Logo} alt="IYE Logo" className="w-12 h-12 rounded-full" />
            <h2 className="text-2xl font-bold">IYE</h2>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2 mt-2">
              <Link to="/" className="text-blue-400 hover:underline">Home</Link>
              <Link to="/about" className="text-blue-400 hover:underline">About us</Link>
            </nav>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-lg">Legal</h3>
            <nav className="flex flex-col space-y-2 mt-2">
              <Link to="/termsandconditions" className="text-blue-400 hover:underline">Terms & Conditions</Link>
              <Link to="/PrivacyPolicy" className="text-blue-400 hover:underline">Privacy & Policy</Link>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-lg">GET IN TOUCH</h3>
            <nav className="flex flex-col space-y-2 mt-2">
              <Link to="#" className="flex items-center justify-center md:justify-start text-blue-400 hover:underline">
                <HiOutlineMail className="mr-2 text-xl" />
                iyeilluminateyoureducation@gmail.com
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media Icons */}
        <SocialMediaLinks />

        {/* Footer Copyright */}
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by IYE-Illuminate Your Education.
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;