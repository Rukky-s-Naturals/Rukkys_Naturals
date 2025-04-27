import React, { useState } from 'react';
import herbal from '../../assets/images/herbal.png';
import { CgPlayButton } from 'react-icons/cg';

const Discovery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden w-full h-[70vh] md:h-[80vh]"> {/* Adjusted height for responsiveness */}
      {/* Background Image */}
      <img className="absolute inset-0 w-full h-full object-cover z-0" src={herbal} alt="background image" />
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Text Content */}
      <div
        style={{ fontFamily: 'cursive' }}
        className="absolute flex flex-col items-center justify-center inset-0 z-20 text-white px-4 text-center"
      >
        <span className="text-3xl md:text-5xl">More Discovery</span>
        <p className="text-lg md:text-2xl pt-6 md:pt-10">Our Herbal Products are Versatile</p>

        {/* Play Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 md:mt-10 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer transition"
        >
          <CgPlayButton className="text-3xl md:text-4xl" />
        </button>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-30">
          <div className="relative w-11/12 md:w-3/4 max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-lg p-2 md:p-3 bg-red-500 rounded-md hover:bg-red-600 transition z-40"
            >
              ×
            </button>
            <video
              className="w-full h-auto rounded-lg shadow-lg z-30"
              controls
              autoPlay
            >
              <source
                src="https://videos.pexels.com/video-files/28283519/12351626_3840_2160_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Discovery;
