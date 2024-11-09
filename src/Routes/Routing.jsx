import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Rooms from '../components/rooms/Rooms';
import Gallery from '../components/gallery/Gallery';
import Events from '../components/events/Events';
import About from '../components/about/About';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Routing;
