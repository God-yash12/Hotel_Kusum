import React, { useState } from "react";
import Room1Img from "../../assets/Rooms/Room1.jpg";
import Room2Img from "../../assets/Rooms/Room2.jpg";
import Room3Img from "../../assets/Rooms/Room3.jpg";
import bgImage from "../../assets/Rooms/bg-img.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Rooms = () => {
  const data = [
    {
      id: 1,
      image: Room1Img,
      title: "Normal Room",
      feature: "Wifi | In-room Slipper",
      bedType: "Twin Bed",
      icon: <MdFamilyRestroom />,
      familyType: "2 Adults + 1 Child",
      price: "Starting NRS | 2500",
    },
    {
      id: 2,
      image: Room2Img,
      title: "Semi Normal Room",
      feature: "Wifi | In-room Slipper",
      bedType: "Twin Bed",
      icon: <MdFamilyRestroom />,
      familyType: "2 Adults + 1 Child",
      price: "Starting NRS | 3000",
    },
    {
      id: 3,
      image: Room3Img,
      title: "Delux Room",
      feature: "Wifi | In-room Slipper | Hot and Cold Shower",
      bedType: "Twin Bed",
      icon: <MdFamilyRestroom />,
      familyType: "2 Adults + 1 Child",
      price: "Starting NRS | 4500",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "full",
      width: "full",
      opacity: 1,
    }}
     className="mt-20 lg:mt-44 py-6 lg:py-16">
      <div className=" lg:mx-24">
        <div data-aos = "fade-up" className="flex flex-col items-center justify-center">
          <h3 className="text-orange-600 text-lg lg:text-2xl tracking-wider uppercase text-center mb-2">Accomodation</h3> 

          <h1 className="text-center text-xl lg:text-4xl font-cormorant uppercase  text-gray-900 px-10  ">
            Contemporary Rooms That Cocoon You in Comfort
          </h1>
          <span className="h-[2px] w-24 bg-orange-600 lg:mr-9 mt-2"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 mt-6">
          {data.map((item) => (
            <div
              key={item.id}
              data-aos = "fade-down"
              className="bg-white shadow-lg border-[1px] border-gray-400 overflow-hidden group hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} image`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Price */}
                <div className=" absolute top-0 right-0 mr-2 mt-2 bg-[#B28331] h-10 w-44 text-center z-20 rounded-sm">
                  <p className="text-lg font-gilroy font-normal text-[#ffffff] pt-1">
                    {item.price}
                  </p>
                </div>

                <div className="mt-5 flex justify-center lg:justify-start">
                  <button
                    className={`absolute bottom-4 rounded-sm overflow-hidden left-0 opacity-0 translate-x-[-100%] px-6 py-3 text-gray-800 font-semibold uppercase tracking-wider group-hover:translate-x-0 group-hover:opacity-100 ease-in-out transition-all duration-500 ${
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
                    <span className="relative flex flex-row z-10 font-cormorant font-normal">
                      Book Now{" "}
                      <FaArrowRight className="text-gray-600 ml-3 mt-1 font-cormorant " />
                    </span>
                  </button>
                </div>
              </div>

              {/* Room Details */}
              <div>
                <h3 className="text-4xl font-cormorant font-bold text-gray-800 group-hover:text-orange-600 mt-5 mb-3 pl-10">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-800 group-hover:text-gray-500 mb-5 pl-10">
                  {item.feature}
                </p>

                <div className="h-[1px] w-full bg-gray-400"></div>

                {/* Icon and Bed/Family Type */}
                <div className="flex items-center justify-between mb-4 mt-5">
                  <p className="text-gray-800 text-xl font-serif pl-10">
                    {item.bedType}
                  </p>
                  <div className="h-[1px] w-10 rotate-90 bg-gray-400"></div>

                  <div className="flex items-center gap-2 pr-5 text-lg">
                    <span className="font-serif">{item.icon}</span>
                    <span className="text-gray-800 font-serif">
                      {item.familyType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
