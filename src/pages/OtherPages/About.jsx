import React from 'react';
import about3 from '../../assets/images/about3.png';
import ceo from '../../assets/images/ceo.png';

const About = () => {
  return (
    <section className="bg-gradient-to-b to-white py-20 px-6">
      {/* About Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src={about3}
          alt="About Rukky's Naturals"
          className="rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-green-800">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Rukky's Naturals is your trusted partner in natural wellness. We
            specialize in plant-based remedies that support general wellness,
            fertility enhancement, hormonal balance, and more. With a unique
            blend of traditional herbal wisdom and modern science, we craft
            products that empower individuals to live vibrant, healthy lives.
          </p>
          <button className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="max-w-6xl mx-auto mt-20 space-y-12">
        <h2 className="text-center text-4xl font-bold text-green-800">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold text-green-800">Our Mission</h3>
            <p className="text-gray-700 mt-4">
              To empower individuals on their wellness journey with nature’s
              finest ingredients, offering products and guidance that inspire
              holistic living.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold text-green-800">Our Vision</h3>
            <p className="text-gray-700 mt-4">
              To create a world where wellness is accessible, natural, and
              sustainable, reconnecting people with the healing power of nature.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <img
            src={ceo}
            alt="Founder of Rukky's Naturals"
            className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="text-center lg:text-left space-y-6">
            <h3 className="text-4xl font-bold text-green-800">Meet Our Founder</h3>
            <p className="text-gray-700 leading-relaxed">
              Rukaiya Mohammed Ameen, a licensed herbalist under Ghana’s Ministry
              of Health, is the visionary behind Rukky's Naturals. With over
              eight years of experience in agribusiness, she combines ancient
              herbal wisdom with modern innovation to empower individuals on
              their wellness journeys.
            </p>
            <button className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
              Learn About Her Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
