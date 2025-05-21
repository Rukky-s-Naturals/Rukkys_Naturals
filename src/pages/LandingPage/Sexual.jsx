import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import woman from '../../assets/images/woman.png';
import woman3 from '../../assets/images/woman3.png';
import woman4 from '../../assets/images/woman4.png';
import woman5 from '../../assets/images/woman5.png';

const Sexual = React.memo(() => {
  const slides = [
    {
      image: woman,
      text: "Rediscover the Power of Herbal Intimacy",
    },
    {
      image: woman5,
      text: "Empower Your Relationships with Nature",
    },
    {
      image: woman3,
      text: "Learn the Secrets of Natural Vitality",
    },
    {
      image: woman4,
      text: "Your Journey to Sexual Wellness Starts Here",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Adjust slide duration

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="sexual-section relative h-[650px] w-full md:h-[750px]">
      <div className="relative h-full w-full overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-cover bg-center flex items-center justify-center transition-opacity duration-1500 ${
              index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 space-y-6">
              <motion.h2
                className="text-3xl md:text-5xl font-extrabold tracking-wide"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {slide.text}
              </motion.h2>
              <motion.p
                className="text-sm md:text-lg font-medium max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                At Rukky's Naturals, we believe in holistic solutions for intimate wellness.
              </motion.p>
              <motion.p
                className="text-sm md:text-lg italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                "I can teach you how to transform your sex life naturally."
              </motion.p>
              <motion.div
                className="bg-white hover:bg-green-200 text-green-900 font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/booking">Book Consultation</Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default Sexual;
