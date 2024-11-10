import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Navbar from "../components/Nav";

const Routing = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </>
  );
};

export default Routing;
