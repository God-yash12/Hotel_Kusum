import React from 'react';
import { useEffect } from 'react';
import Nav from './components/Nav'
import About from './components/about/About';
import AOS from 'aos';
import "aos/dist/aos.css";

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
    </>
  )
}

export default App
