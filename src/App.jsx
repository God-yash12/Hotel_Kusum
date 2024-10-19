import React from 'react';
import { useEffect } from 'react';
import Nav from './components/Nav'
import About from './components/about/About';
import AOS from 'aos';
import "aos/dist/aos.css";
import Facilities from './components/Facilities/Facilities';
import Rooms from './components/rooms/Rooms';

const App = () => {
  useEffect(()=> {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <>
    <Nav/>
    <About />
    <Rooms />
    <Facilities />
    </>
  )
}

export default App
