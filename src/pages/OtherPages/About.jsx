import React from 'react';
import about3 from '../../assets/images/about3.png'; // Ensure correct path for the about section image
import ceo from '../../assets/images/ceo.png'; // Ensure correct path for the founder image

const About = () => {
  return (
    <section className="about-us py-16 px-6">
      {/* About Rukky's Naturals */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="about-image">
          <img
            src={about3}
            alt="About Rukky's Naturals"
            className="rounded-lg shadow-xl w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="about-content space-y-6">
          <h2 className="text-4xl font-extrabold text-green-900">
            About Rukky's Naturals
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Rukkys Naturals is a wellness brand committed to promoting health through natural, plant-based remedies. We specialize in the use of organic herbs, seeds, nuts, and spices that support general wellness, reproductive health, fertility enhancement, hormonal balance, and natural libido boosting.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our approach is rooted in traditional herbal knowledge, blended with modern wellness practices to deliver effective and sustainable results. Whether you are seeking expertly crafted herbal blends or personalized one-on-one consultations, Rukkys Naturals is here to guide you on your journey to holistic well-being.
          </p>
        </div>
      </div>

      {/* Mission and Vision Header */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="w-full bg-green-900 text-white py-4 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold uppercase">Our Commitment to Wellness</h3>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold text-green-900 text-center md:text-left">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
            Rukkys Naturals' mission is to empower individuals on their wellness journey through nature’s most powerful gifts—herbs, seeds, nuts, and spices—offering high-quality products and personalized support that nurture fertility, boost vitality, and promote holistic healing.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold text-green-900 text-center md:text-left">Our Vision</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
            Our vision is to become a trusted sanctuary for natural health, where ancient wisdom meets modern wellness. We envision a world where people reconnect with the healing power of nature to achieve balanced, vibrant, and purposeful lives.
          </p>
        </div>
      </div>

      {/* About the Founder */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex flex-col items-center space-y-8">
          {/* Founder Image */}
          <img
            src={ceo}
            alt="Founder of Rukky's Naturals"
            className="rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Founder Text */}
          <div className="bg-white shadow-xl rounded-lg p-8 space-y-6 max-w-4xl text-center">
            <h3 className="text-4xl font-extrabold text-green-900">Meet the Founder</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              Rukaiya Mohammed Ameen is the visionary founder of Rukkys Naturals—a brand rooted in tradition, health, and empowerment. As a licensed herbalist under Ghana’s Ministry of Health, Rukaiya combines the healing power of herbs, seeds, nuts, and spices with a modern, eco-conscious approach.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Her expertise lies in holistic wellness, with a special focus on female reproductive health, fertility, libido, PCOS, and overall vitality. With over eight years of experience in agribusiness, Rukaiya is more than a herbalist—she’s a celebrity foodpreneur, SME development coach, and sustainability advocate.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Her natural health products and personalized consultations are trusted by individuals seeking balance and healing through organic, locally sourced ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
