import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import herbal10 from '../../assets/images/herbal10.png';
import herbal from '../../assets/images/herbal.png';
import species4 from '../../assets/images/species4.jpg';

const HeroSection = React.memo(() => {
  const images = [herbal10, herbal, species4];
  const textData = [
    { heading: "Welcome to", subheading: "Rukky's Naturals", description: "Your destination for natural herbal wellness" },
    { heading: "Discover Herbal Healing", subheading: "With Rukky's Naturals", description: "Experience the natural power of herbs for your health and well-being" },
    { heading: "Nurture Your Health Naturally", subheading: "Rukky's Naturals", description: "Harness the healing properties of organic herbal medicine for a balanced life" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Preload images for smoother transitions
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slideshow */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Original animation time retained
          alt={`background ${currentIndex + 1}`}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: currentIndex === 1 ? '-100%' : currentIndex === 2 ? '100%' : 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentIndex === 1 ? '100%' : currentIndex === 2 ? '-100%' : 0 }}
            transition={{ duration: 1 }} // Original animation time retained
            className="space-y-4"
          >
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold">{textData[currentIndex].heading}</p>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold">{textData[currentIndex].subheading}</p>
            <p className="text-base sm:text-lg lg:text-xl">{textData[currentIndex].description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            to="booking"
            className="px-8 py-3 border-3 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-green-900 cursor-pointer transition duration-300"
          >
            Book Consultation
          </Link>
          <Link
            to="allproducts"
            className="px-8 py-3 border-3 border-green-300 bg-green-900 text-white rounded-lg hover:bg-green-600 cursor-pointer transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
