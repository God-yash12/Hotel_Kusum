import React from 'react'
import logo from '../assets/logo/logo.png'

const Nav = () => {
  return (
    <>
    <nav className=' px-16 w-full h-24 bg-gray-400 flex items-center justify-between'>
    <div className="logo w-24 h-24">
        <img src={logo} alt="" />
    </div>
        <ul className='flex gap-10'>
         
        <button>Book now</button>
        </ul>
    </nav>
    </>
  )
}

export default Nav