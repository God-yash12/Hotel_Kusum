
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/about/about-img1.jpg";
import Image2 from "../../assets/about/about-img2.jpg";
import Properties from "../property/Properties";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <div className="container flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-4 lg:ml-36">
      {/* Slider Container */}
      <div
        data-aos="zoom-out"
        className="my-10 w-full max-w-[600px] lg:w-[600px] lg:h-[550px] transition-all ease-in-out duration-300"
      >
        <Slider {...settings}>
          <div>
            <img
              src={Image1}
              alt="About Image 1"
              className="h-auto max-h-[40rem] w-full object-cover"
            />
          </div>
          <div>
            <img
              src={Image2}
              alt="About Image 2"
              className="h-auto max-h-[40rem] w-full object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* About Information */}
      <div className="max-w-lg text-center lg:text-left">
        <h1
          data-aos="zoom-in"
          className="text-yellow-600 uppercase text-base sm:text-lg font-gilroy leading-10 mb-3"
        >
          Experience Unparalleled Comfort in Kathmandu
        </h1>
        <p
          data-aos="zoom-in"
          className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-normal uppercase mb-5 text-gray-800"
        >
          Welcome to Hotel Kusum Kohinoor
        </p>
        <div data-aos="zoom-in" className="flex flex-col justify-center">
          <p className="text-sm sm:text-lg leading-relaxed font-gilroy text-gray-700">
            Welcome to Hotel Kusum Kohinoor, Kathmandu architectural gem.
            Experience unparalleled comfort in our thoughtfully designed rooms,
            blending modern aesthetics with local charm. Positioned
            strategically, our hotel is set to be a major attraction in vibrant
            Butwal. Immerse yourself in unmatched hospitality and savor diverse
            culinary delights. Join us in ushering in a new era of exceptional
            living - book your stay now and be part of history in the making!
          </p>
          <div className="relative w-full h-0.5 bg-gray-200 mt-4">
            <span className="absolute h-0.5 w-14 bg-orange-500 animate-line-left-right"></span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5 flex justify-center lg:justify-start">
          <button
            className={`relative rounded-sm overflow-hidden px-6 py-3 text-gray-800 font-semibold uppercase tracking-wider border border-yellow-500 transition-all duration-500 ${
              isHovered ? "bg-yellow-500 text-white" : "bg-white"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Swipe effect spans */}
            <span
              className={`absolute inset-0 h-full bg-yellow-500 transition-all duration-500 transform ${
                isHovered ? "translate-x-0" : "-translate-x-full"
              }`}
            />
            <span
              className={`absolute inset-0 h-full bg-yellow-500 transition-all duration-500 transform ${
                isHovered ? "translate-x-0" : "translate-x-full"
              } right-0`}
            />
            <span className="relative z-10 font-cormorant font-normal">
              About More
            </span>
          </button>
        </div>
      </div>
     
    </div>

<Properties />

    </>
  );
};

export default About;

