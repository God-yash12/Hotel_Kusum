import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [top, setTop] = useState(0);
  const prevScrollPos = useRef(window.scrollY);

  // Function to scroll smoothly to the section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id);
      setIsOpen(false); // Close the mobile menu if open
    }
  };

  // Logo animation with GSAP (simplified to avoid performance issues)
  useEffect(() => {
    gsap.from(".logo", {
      duration: 2,
      rotate: 360,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (prevScrollPos.current > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-180); // Adjust based on your navbar height to hide it
      }

      prevScrollPos.current = currentScrollPos; // Update previous scroll position
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means it only runs once, on mount

  return (
    <nav
      style={{ top: `${top}px` }}
      className="fixed w-full h-24 top-0 z-50 transition-all duration-300 bg-gray-800 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="logo w-24 h-24 rounded-full p-2 mix-blend-screen">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => scrollToSection("home")}
            />
          </div>

          {/* Hamburger Menu */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Nav Links for larger screens */}
          <div className="hidden lg:flex font-poppins space-x-9">
            {["home", "rooms", "gallery", "events", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative text-gray-600 hover:text-orange-500 ${
                  activeItem === item ? "text-orange-500" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 transition-all duration-300 ${
                    activeItem === item ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}

            {/* Booking Button */}
            <button
              onClick={() => scrollToSection("booking")}
              className="w-28 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg uppercase hover:bg-orange-700 transition duration-300"
            >
              Booking
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="w-full lg:hidden mt-4">
            <div className="flex flex-col items-center space-y-3">
              {["home", "rooms", "gallery", "events", "about"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-200 text-xl hover:text-orange-500 cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              {/* Booking Button in Mobile Menu */}
              <button
                onClick={() => {
                  scrollToSection("booking");
                  setIsOpen(false); // Close mobile menu after clicking
                }}
                className="w-28 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-black font-semibold text-lg uppercase hover:bg-orange-700 transition duration-300"
              >
                Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
