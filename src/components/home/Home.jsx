import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import logo1 from '../../assets/logo/landingPagephoto.jpg';
import logo2 from '../../assets/logo/landingPagephoto1.jpg';
import logo3 from '../../assets/logo/landingPagephoto3.jpg';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  
  return (
    <div className='w-full h-full relative'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}  // Using Swiper modules
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}  // Autoplay configuration
        loop={true}
      >
        <SwiperSlide>
          <div className='w-full h-[calc(100vh-112px)]'>
            <img src={logo1} alt="Landing 1" className='w-full h-full object-cover brightness-50' />
            <div className='w-[70%] absolute top-[30%] left-[10%]'>
              <h6 className='text-white text-[40px] font-thin'>
                Welcome to <span className='text-yellow-400 text-[45px] font-extrabold border-b-[1px] border-yellow-400'>HOTEL KUSUM KOHINOOR PVT.LTD</span>
              </h6>
              <h6 className='text-white text-[35px]'>
                Anticipating the <span className='text-yellow-400 text-[40px] border-b-[1px] border-yellow-300'>Guest needs...</span>
              </h6>
              <p className=' tracking-tight text-2xl text-yellow-400'>"Hotel Kusum Kohinoor Pvt. Ltd. offers luxury stays and top-tier service, ensuring a memorable experience for every guest"</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-[calc(100vh-112px)]'>
            <img src={logo2} alt="Landing 2" className='w-full h-full object-cover object-top brightness-50' />
            <div className='w-[70%] absolute top-[30%] left-[10%]'>
              <h6 className='text-white text-[40px] font-thin'>
                Welcome to <span className='text-yellow-400 text-[45px] font-extrabold border-b-[1px] border-yellow-400'>HOTEL KUSUM KOHINOOR PVT.LTD</span>
              </h6>
              <h6 className='text-white text-[35px]'>
                Providing <span className='text-yellow-400 text-[40px] border-b-[1px] border-yellow-300'>excellent services...</span>
              </h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-[calc(100vh-112px)]'>
            <img src={logo3} alt="Landing 3" className='w-full h-full object-cover object-left brightness-50' />
            <div className='w-[70%] absolute top-[30%] left-[10%]'>
              <h6 className='text-white text-[40px] font-thin'>
                Experience luxury at <span className='text-yellow-400 text-[45px] font-extrabold border-b-[1px] border-yellow-400'>HOTEL KUSUM KOHINOOR PVT.LTD</span>
              </h6>
              <h6 className='text-white text-[35px]'>
                Your comfort, our <span className='text-yellow-400 text-[40px] border-b-[1px] border-yellow-300'>priority...</span>
              </h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='checkAvailibility  w-full h-48 mt px-10 py-5'>
        <div className=' flex items-center justify-evenly w-full h-full border-2 border-gray-500 rounded-md'>
          <div className=' w-[33%] flex items-center justify-center flex-col gap-2   '>
            <h1 className='text-gray-500 font-extrabold text-xl'>Check-In  Date</h1>
            <input type="date" name="" id=""  className='w-1/2 px-5 py-2 outline-none rounded-md text-gray-500'/>

          </div >
          <div className='w-[33%] h-full flex items-center justify-center flex-col gap-2  '>
            <h1 className='text-gray-500 font-extrabold text-xl'>Check-Out Date</h1>
            <input type="date" name="" id=""  className='w-1/2 px-5 py-2 outline-none rounded-md text-gray-500'/>

          </div>
          <div className='w-[33%]  h-full flex items-center justify-center'>
            <button
    class="relative   border-2 border-gray-400  px-4 py-4 inline cursor-pointer text-gray-500 font-extrabold text-[18px] rounded-md   before:bg- hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ">
    Check Availibility
</button>


          </div>

        </div>


      </div>
    </div>
  );
};

export default Home;
