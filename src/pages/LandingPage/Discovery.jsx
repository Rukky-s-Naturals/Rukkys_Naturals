import React, { useState } from 'react';

const Discovery = React.memo(() => {
  const [showText, setShowText] = useState(false);

  const handleTimeUpdate = (event) => {
    const video = event.target;

    // Show text when video time exceeds 5 seconds
    if (video.currentTime >= 5) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  };

  return (
    <section className="relative overflow-hidden w-full h-[70vh] md:h-[80vh]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/rukkysNaturals2.mp4"
        autoPlay
        loop
        muted
        onTimeUpdate={handleTimeUpdate}
        preload="auto" // Native video preload
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Text Content */}
      {showText && (
        <div
          className="absolute flex flex-col items-center justify-center font-bold inset-0 z-20 text-white px-4 text-center animate-fadeIn"
        >
          <span className="text-3xl md:text-5xl">More Discovery</span>
          <p className="text-lg md:text-2xl pt-6 md:pt-10">Our Herbal Products are Versatile</p>
        </div>
      )}
    </section>
  );
});

export default Discovery;
