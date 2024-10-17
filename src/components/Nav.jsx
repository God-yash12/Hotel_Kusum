import React from 'react'
import logo from '../assets/logo/logo.png'

const Nav = () => {
  return (
    <>
    <nav className=' px-16 w-full h-28 bg-gray-200 flex items-center justify-between'>
    <div className="logo w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
        <img src={logo} alt="" />
    </div>
        <ul className='flex gap-10'>
          <button><div class="p-1 flex flex-col items-center justify-center">
    <div class="cursor-pointer">
      <button class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-gray-800 transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">BOOK NOW</span>
      <span class="relative invisible">BOOK NOW</span>
    </button>
    </div>
</div>
</button>
    
        </ul>
    </nav>
    </>
  )
}

export default Nav