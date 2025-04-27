import React from 'react';
import species2 from '../../assets/images/species2.png';
import { FaArrowRight } from 'react-icons/fa';

const Welcome = () => {
  return (
    <main>
      <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 md:p-12 lg:p-16 m-4 md:m-8 lg:m-16 bg-green-900 rounded-xl shadow-lg overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Text Section */}
        <div className="relative z-10 text-white space-y-4 md:space-y-6 max-w-md md:max-w-lg text-center lg:text-left lg:ml-10 animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-bold animate-slide-in-left">
            <br />
            At Rukky's <span className="text-yellow-400">Naturals</span>
          </h1>
          <p className="text-sm md:text-lg">
            We are passionate about health and herbal living for optimal well-being.
          </p>
          <a
            href="about"
            className="inline-flex items-center gap-2 text-sm md:text-lg font-medium text-white bg-green-800 px-3 py-2 md:px-4 md:py-2 rounded hover:bg-green-300 transition duration-300"
          >
            Our Story
            <FaArrowRight className="text-base md:text-xl" />
          </a>
        </div>

        {/* Image Section */}
        <div className="relative z-10 mt-8 md:mt-12 lg:mt-0 lg:mr-10">
          <img
            src={species2}
            alt="Herbal Product"
            className="rounded-lg shadow-lg w-60 h-48 md:w-80 md:h-70 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </main>
  );
};

export default Welcome;
