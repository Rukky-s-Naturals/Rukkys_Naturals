import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spices6 from "../../assets/images/spices6.webp";
import { FaArrowRight } from "react-icons/fa";

const Welcome = () => {
  const slides = [
    {
      title: "What is Herbalism?",
      content:
        "Herbalism is the art and science of using plants for their healing and therapeutic properties. Rooted in ancient traditions, it emphasizes natural remedies for holistic health.",
      link: "/about",
      linkText: "Learn More About Us",
    },
    {
      title: "The Principles of Herbal Living",
      content:
        "Herbal living embraces the synergy between humans and nature. It focuses on sustainability, balance, and harnessing plant-based solutions for a better quality of life.",
    },
    {
      title: "Rukky's Naturals Vision",
      content:
        "At Rukky's Naturals, we aim to revive the ancient wisdom of herbalism while integrating modern scientific insights to offer effective and sustainable solutions.",
    },
    {
      title: "Your Journey to Wellness",
      content:
        "Begin your journey to optimal health with our range of natural herbal products, crafted with care and a commitment to purity.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <main>
      <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 md:p-12 lg:p-16 m-4 md:m-8 lg:m-16 bg-green-900 rounded-xl shadow-lg overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Text Section */}
        <div className="relative z-10 text-white space-y-6 max-w-md md:max-w-lg text-center lg:text-left lg:ml-10">
          <h1 className="text-2xl md:text-4xl font-bold animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm md:text-lg transition-opacity duration-1000 ease-in-out opacity-100">
            {slides[currentSlide].content}
          </p>
          {slides[currentSlide].link && (
            <Link
              to={slides[currentSlide].link}
              className="inline-flex items-center gap-2 text-sm md:text-lg font-medium text-white bg-green-800 px-4 py-2 rounded hover:bg-yellow-400 hover:text-green-900 transition duration-300"
            >
              {slides[currentSlide].linkText}
              <FaArrowRight className="text-base md:text-xl" />
            </Link>
          )}
        </div>

        {/* Image Section */}
        <div className="relative z-10 mt-8 md:mt-12 lg:mt-0 lg:mr-10">
          <img
            src={spices6}
            alt="Herbal Product"
            className="rounded-lg shadow-lg w-70 md:w-80 md:h-70 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-yellow-400" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Welcome;
