import React from "react";
import KusumHotel from '../../assets/Proprty/KusumHtl.jpg';
import kusumKohinoor from "../../assets/about/about-img1.jpg";
import { Link } from 'react-router-dom'

const Properties = () => {
  return (
    <div className="mt-36 lg:ml-44">
      <div className="container">
        <div>
          {/* Heading */}
          <div className="relative flex flex-row items-center justify-center lg:justify-start mb-10">
            <span className="text-2xl font-gilroy font-medium text-gray-800">
              Featured Properties
            </span>
            <span className="absolute lg:left-0 bottom-[-2px] h-[2px] w-52 bg-red-500"></span>
          </div>

          {/* properties */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Kusum Aiport Hotel */}
            <div className="shadow-lg p-4 group hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img src={KusumHotel} alt="Kusum Airport Hotel" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mt-4 group-hover:text-red-500 transition-colors duration-300">Kusum Airport Hotel</h2>
              <span className="flex mt-1 items-center">
              <p className="font-gilroy font-semibold" >Location: </p> <p className="ml-1">Airport Kathmandu</p>

              </span>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nam qui, exercitationem explicabo maxime quisquam modi fugit quaerat, error ex perferendis.
              </p>
              {/* contact Kusum Airport Hotel */}
              <button className="mt-4 block text-red-500 group-hover:text-red-700 transition-colors duration-300">Check Availability</button>  
            </div>

            {/* Hotel Kusum Kohinoor */}
            <div className="shadow-lg p-4 group hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img src={kusumKohinoor} alt="Kusum Kohinoor Hotel" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mt-4 group-hover:text-red-500 transition-colors duration-300">Kusum Kohinoor Hotel</h2>
              <span className="flex mt-1 items-center">
              <p className="font-gilroy font-semibold" >Location: </p> <p className="ml-1">Maharajgunj, Kathmandu</p>
              </span>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nam qui, exercitationem explicabo maxime quisquam modi fugit quaerat, error ex perferendis.
              </p>
              <span className="mt-4 block text-red-500 group-hover:text-red-700 transition-colors duration-300">Check Availability </span>  
            </div>

            {/* Hotel Kusum */}
            <div className="shadow-lg p-4 group hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img src={KusumHotel} alt="Hotel Kusum" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mt-4 group-hover:text-red-500 transition-colors duration-300">Hotel Kusum</h2>
              <span className="flex mt-1 items-center">
              <p className="font-gilroy font-semibold" >Location: </p> <p className="font-gilroy ml-1">Kalanki, Kathmandu</p>
              </span>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nam qui, exercitationem explicabo maxime quisquam modi fugit quaerat, error ex perferendis.
              </p>
              <span className="mt-4 block text-red-500 group-hover:text-red-700 transition-colors duration-300">Contact: 9845753788</span>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
