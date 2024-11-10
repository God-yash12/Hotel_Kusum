// Layout.js
import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Navbar at the top */}
      <Nav />
      
      {/* Main content where sections will be displayed */}
      <main className="mb-64">
        {children}
      </main>

      {/* Optional Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
