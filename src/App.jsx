
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Layout from './layout/Layout';
import Home from './components/home/Home';
import Rooms from "./components/rooms/Rooms";
import Gallery from "./components/gallery/Gallery";
import Events from "./components/events/Events";
import About from "./components/about/About";

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
    <Layout>
      {/* Each section is given an `id` for smooth scrolling */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rooms">
        <Rooms />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>
      
      <section id="events">
        <Events />
      </section>
      
      
    </Layout>
  );
};

export default App;
