import React from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../assets/logo/logo.png';


const Nav = () => {

  useGSAP(()=>{
    gsap.from(".logo",{
      duration:9,
      delay:1,
      rotate:360,
      repeat:-1,
      yoyo:true


  })

    })
  
  return (
    <nav className='px-8 w-full h-28   flex items-center justify-between'>
      <div className="logo w-24 h-24  rounded-full p-2  mix-blend-screen">
        <NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>
        <img src={logo} alt="Logo" className='w-full h-full object-contain cursor-default' />
        </NavLink>
      </div>
      <ul className='flex gap-8 items-center'>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/rooms" className={({ isActive }) => isActive ? 'active' : ''}>
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
            Gallery
          </NavLink>
        </li>
         <li>
         <NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>
            Events
          </NavLink>
         </li>
         <li>
          
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
         </li>
        <button><div class="p-4 flex flex-col items-center justify-center">
      <div class="cursor-pointer">
        <button class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-gray-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-400 group-hover:translate-x-0 ease">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Book now</span>
      <span class="relative invisible">Book now</span>
    </button>
    </div>
    </div></button>
      </ul>
    </nav>
  );
};

export default Nav;
