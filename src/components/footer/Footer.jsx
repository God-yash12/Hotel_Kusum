import React from "react";
import footerBanner from "../../assets/logo/footerBanner.jpg";
import {
  FaPhoneFlip,
  FaLocationDot,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaRegCopyright
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-auto pt-10 pb-10 lg:pb-5"
    >
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {/* Quick Links */}
          <div className="text-center">
            <h1 className="text-gray-50 text-lg lg:text-2xl font-gilroy font-medium mb-5">
              Quick Links
            </h1>
            <ul className="text-white text-base lg:text-xl space-y-2 text-center">
              <li className="hover:text-orange-300 hover:underline cursor-pointer">Home</li>
              <li className="hover:text-orange-300 hover:underline cursor-pointer">About</li>
              <li className="hover:text-orange-300 hover:underline cursor-pointer">Events</li>
              <li className="hover:text-orange-300 hover:underline cursor-pointer">Gallery</li>
              <li className="hover:text-orange-300 hover:underline cursor-pointer">Contact Us</li>
              <li  className="hover:text-orange-300 hover:underline cursor-pointer">Location</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="lg:ml-24 text-center lg:text-left">
            <p className="text-gray-50 text-lg lg:text-2xl font-gilroy font-medium mb-5">
              Contact Info
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-3 lg:gap-5 text-base lg:text-xl text-white hover:text-orange-300 hover:underline cursor-pointer">
              <FaPhoneFlip className="text-lg lg:text-2xl" />
              9851249519
            </p>
            <span className="flex items-center justify-center lg:justify-start gap-3 lg:gap-5 text-base lg:text-xl text-white hover:text-orange-300 hover:underline cursor-pointer mt-4">
              <MdEmail className="text-lg lg:text-3xl" />
              itsmesuraj034@gmail.com
            </span>
            <span className="flex flex-row items-center lg:items-start justify-center lg:justify-start gap-3  lg:gap-5 text-center lg:text-xl text-white hover:text-orange-300 hover:underline cursor-pointer mt-4">
              <FaLocationDot className="text-2xl lg:text-5xl" />
              <p className="  lg:text-left">
                Basbari - 03 Maharajgunj, Kathmandu, 
                In front of Gangalal Hospital.
              </p>
            </span>
            
          </div>

          {/* Connect With Us */}
          <div className="text-white">
            <h1 className="text-lg lg:text-2xl font-medium text-center">Connect With Us</h1>
            <div className="flex justify-center gap-6 text-2xl lg:text-3xl mt-5">
              <span className="hover:text-blue-500 cursor-pointer">
                <FaFacebook />
              </span>
              <span className="hover:text-orange-300 cursor-pointer">
                <FaInstagram />
              </span>
              <span className="hover:text-black cursor-pointer">
                <FaTiktok />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 justify-center mt-6 text-white">
          <p className="flex flex-row items-center gap-1 text-center">
          <FaRegCopyright className=" lg:text-lg"/>
            Hotel Kusum Kohinoor. All Right Reserved.
          </p>
          <p>Developed by Ganesh Thapa | Suraj Pandey</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
