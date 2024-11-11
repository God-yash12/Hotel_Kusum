// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routes/Routing';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router> 
      <Routing />
    </Router>
  );
};

export default App;
