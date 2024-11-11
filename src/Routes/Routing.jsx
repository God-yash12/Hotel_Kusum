// Routing.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Gallery from '../components/gallery/Gallery';
import Events from '../components/events/Events';
import Rooms from '../components/rooms/Rooms';
import Layout from '../layout/Layout';
import AdminRouting from "./adminRoute"


const Routing = () => {
  const location = useLocation();
  
  // Check if current path is admin-related
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Render Layout for public routes */}
      {isAdminPath ? (
        <AdminRouting /> 
      ) : (
        <Layout>
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='rooms'>
          <Rooms />
        </section>
        <section id='events'>
          <Events />
        </section>
        <section id='gallery'>
          <Gallery />
        </section>
        </Layout>
      )}
    </>
  );
};

export default Routing;
