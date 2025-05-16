import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/MobileBottomNav'; // Adjust the path based on where you save the MobileBottomNav file
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-16"> {/* Add padding to avoid content overlap */}
        <Outlet />
      </div>
      <MobileBottomNav /> {/* Add MobileBottomNav here */}
      <Footer />
    </div>
  );
};

export default RootLayout;
