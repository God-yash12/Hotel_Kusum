import React from 'react';
import Nav from './components/Nav';
import Routing from './Routes/Routing';
import Home from './components/home/Home';

const App = () => {
  return (
    <>
      <Nav /> {/* Ensure Nav is rendered here */}
      <Routing />
      {/* <Home/> */}
    </>
  );
};

export default App;
