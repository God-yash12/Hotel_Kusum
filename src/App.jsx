import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Nav from './components/Nav';
import Routing from './Routes/Routing';



const App = () => {
  useEffect(()=> {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <>

      <Nav /> {/* Ensure Nav is rendered here */}
      <Routing />

    </>
  );
};

export default App;
