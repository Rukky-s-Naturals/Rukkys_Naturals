import React from 'react';
import { Link } from 'react-router-dom';
import herbal10 from '../../assets/images/herbal10.png';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img src={herbal10} className="absolute inset-0 w-full h-full object-cover" alt="background picture" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
        <p className="text-5xl font-bold pb-5">Welcome to</p>
        <p className="text-6xl font-extrabold pb-6">Rukky's Naturals</p>
        
        {/* Call to Action Text */}
        <p className="text-xl mb-10">Your destination for natural herbal wellness</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="booking"
            className="px-8 py-3 border-3 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-green-900 cursor-pointer transition duration-300"> Book Consultation
          </Link>
          <Link to="allproducts"
            className="px-8 py-3 border-3 border-green-300 bg-green-900 text-white rounded-lg hover:bg-green-600 cursor-pointer transition duration-300"> Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
