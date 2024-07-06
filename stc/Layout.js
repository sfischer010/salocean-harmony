import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ heading, children }) => {
    return (
     <div>
      <Navbar />
        <div className="relative flex my-5 justify-center min-h-screen mb-5 overflow-hidden">
         <div
         className="relative z-30 p-5 text-2xl text-white bg-blue-300 bg-opacity-50 rounded-xl content-main">
          <h1 className="text-center tracking-widest">{heading}</h1>
          <br />
          <main>
            {children}
          </main>
        </div>
    </div>
   <Footer />
  </div>
    );
};

export default Layout;