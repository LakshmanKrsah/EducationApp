import React from "react";
import { FaYoutube, FaLinkedin, FaTwitter, FaTelegramPlane, FaExternalLinkAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { name: "YouTube", icon: <FaYoutube />, url: "#", color: "text-red-500", bg: "bg-red-100" },
  { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=61573935812227&mibextid=ZbWKwL", color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Twitter", icon: <FaTwitter />, url: " https://x.com/Illuminate87081?t=4CkH2lXYqLr5OOtHmH4oaA&s=08 ", color: "text-sky-500", bg: "bg-sky-100" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/illuminate_your_education?igsh=MmR1aDlra2RyejV4", color: "text-blue-400", bg: "bg-blue-100" }
];

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-10">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.url} className="flex flex-col items-center space-y-3 group">
          {/* Icon inside circle */}
          <div className={`p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 ${social.bg} dark:bg-gray-800`}>
            {React.cloneElement(social.icon, { size: 40, className: `${social.color}` })}
          </div>
          {/* Social name with external link */}
          <span className={`flex items-center gap-1 text-sm font-medium ${social.color} group-hover:underline`}>
            <FaExternalLinkAlt className="text-xs" /> {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
