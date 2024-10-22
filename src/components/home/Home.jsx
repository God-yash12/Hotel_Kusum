import React from 'react';
import logo from '../../assets/logo/landingPagephoto.jpg';

const Home = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-[calc(100vh-112px)]'>
        <img src={logo} alt="Landing" className='w-full h-full object-cover  brightness-50' />
        <div className='w-[70%]  absolute top-[30%] left-[10%]'>
          <h6 className=' text-white text-[40px] font-thin u'>Welcome to <span className='text-yellow-400 text-[45px] font-extrabold border-b-[1px] border-yellow-400'>HOTEL KUSUM KOHINOOR PVT.LTD</span></h6>
          <h6 className=' text-white text-[35px]'>Ancipating the <span className='text-yellow-400 text-[40px] border-b-[1px] border-yellow-300'>Guest needs...</span></h6>
          <p className='text-white'>cliquam, repellecere numquam doloremque vel debitis optio, ullam facilis nostrum pariatur o</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
