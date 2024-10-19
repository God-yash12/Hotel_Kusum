import React from "react";
import {
  FaCarSide,
  FaGlassCheers,
  FaConciergeBell,
  FaCreditCard,
} from "react-icons/fa";

const Facilities = () => {
  const data = [
    {
      id: 1,
      icon: <FaCarSide />,
      title: "Airport Pickup",
    },
    {
      id: 2,
      icon: <FaGlassCheers />,
      title: "Welcome Drink",
    },
    {
      id: 3,
      icon: <FaConciergeBell />,
      title: "Room Service",
    },
    {
      id: 4,
      icon: <FaCreditCard />,
      title: "Cards Accepted",
    },
  ];

  return (
    <div className="bg-[#F8F6F3] h-full mt-20">
      <div className="container py-20">
        <div>
          {/* heading */}
          
          <div 
          data-aos = "fade-down"
          className="flex flex-col items-center justify-between lg:ml-80">
            <h3 className="text-orange-600 text-sm lg:text-2xl tracking-wider uppercase text-center mb-3">
              Our Services
            </h3>
          
            <h1 className="text-center text-2xl lg:text-4xl font-cormorant uppercase  text-gray-900">
              During Your Stay
            </h1>
            <span className="h-[2px] w-24 bg-orange-600 lg:ml-16 mt-2"></span>
          </div>

          {/* facilities */}
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-10 lg:ml-36">
            {data.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                className="relative flex flex-col items-center cursor-pointer bg-white shadow-md p-6 rounded-sm border-[1px] border-slate-700 overflow-hidden group"
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-[#F8F6F3] transition-transform duration-500 transform translate-x-[-100%] group-hover:translate-x-0"></div>

                {/* Icon and Title */}
                <div className="relative z-10 text-6xl text-[#D5BC83] mb-4">
                  {item.icon}
                </div>
                <h3 className="relative z-10 font-cormorant font-medium text-2xl text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
