import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import spices1 from "../../assets/images2/spices1.jpg"; // Main image
import ceo from "../../assets/images/ceo.png"; // Founder image

// Import all slideshow images individually
import herbalism from "../../assets/images2/herbalism.png";
import herbalism2 from "../../assets/images2/herbalism2.png";
import herbalism3 from "../../assets/images2/herbalism3.png";
import herbalism4 from "../../assets/images2/herbalism4.png";
import herbalism5 from "../../assets/images2/herbalism5.png";
import herbalism6 from "../../assets/images2/herbalism6.png";

// Create the images2 array with these images
const images2 = [
  herbalism,
  herbalism2,
  herbalism3,
  herbalism4,
  herbalism5,
  herbalism6,
];

// Corresponding captions for each slideshow image
const slideshowTexts = [
  "Unlock the Potential of Herbs for Mind, Body, and Soul",
  "Herbs have been used for centuries to promote natural healing and wellness.",
  "Incorporating herbs into your daily routine can support overall vitality.",
  "Herbal remedies offer a sustainable and eco-friendly approach to health care.",
  "Discover the power of herbs to enhance immunity and energy levels.",
  "Herbs connect us to nature and its endless healing potential.",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readMore, setReadMore] = useState(false); // Ensure the state is initialized

  // Update slide index automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images2.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-gray-800 space-y-12 px-4 sm:px-6 md:px-10 lg:px-16 py-12"
    >
      {/* Introduction Section */}
      <motion.section
        variants={fadeIn}
        className="max-w-4xl text-center space-y-6"
      >
        <motion.h1
          variants={fadeIn}
          className="text-3xl md:text-5xl font-bold text-green-900"
        >
          The Timeless Power of Herbs
        </motion.h1>
        <motion.img
          src={spices1}
          alt="Herbal Spices"
          className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <p className="text-lg md:text-xl leading-relaxed">
          From the sacred practices of the Mayan and Ancient Egyptian
          Civilisations to the bustling markets of the Great Malian Empire,
          herbs have been a symbol of life, healing, and trade. Cultures across
          Asia revered their medicinal properties, with Ayurvedic and Chinese
          herbal traditions flourishing for centuries. In Ghanaian culture,
          herbs form the backbone of spiritual and physical well-being,
          connecting us deeply with nature. Famous herbs like ginger, turmeric,
          neem, and hibiscus have stood the test of time, symbolizing not only
          health but also trade and prosperity.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          The “medicine man,” a figure of reverence in many societies, is a
          custodian of this wisdom, using knowledge passed through generations
          to heal and guide communities. But who, exactly, is a herbalist?
        </p>
      </motion.section>

      {/* Definition Section */}
      <motion.section variants={fadeIn} className="max-w-4xl text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-green-800">
          Who is a Herbalist?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          A herbalist is not just a practitioner; they are a bridge between the
          natural world and human well-being. With years of study, practice, and
          deep reverence for plants, our founder has brought this ancient wisdom
          into the modern world. As a certified herbalist, she has transformed
          this passion into a mission, blending tradition and innovation to
          craft exceptional herbal products.
        </p>
      </motion.section>

      {/* Slideshow Section */}
      <motion.section
        variants={fadeIn}
        className="w-full max-w-5xl mx-auto relative mt-8"
      >
        <div className="relative w-full h-60 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images2[currentIndex]})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white text-lg md:text-2xl text-center"
                >
                  {slideshowTexts[currentIndex]}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

       {/* About the Brand Section */}
      <motion.section
        variants={fadeIn}
        className="max-w-4xl text-center space-y-6"
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-green-800">
          About Rukky's Naturals
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Rukky's Naturals is rooted in a passion for herbalism and a commitment
          to purity and sustainability. Each product is crafted with care,
          guided by the philosophy that natural solutions are the key to
          holistic health and well-being.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Founded by a certified herbalist with years of expertise, Rukky's
          Naturals bridges the gap between ancient traditions and modern
          innovations, offering you the best of nature's bounty.
        </p>

        {/* Mission and Vision Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-900">Mission Statement</h3>
            <p className="text-lg leading-relaxed">
              Rukkys Naturals Missions is to empower individuals on their wellness
              journey through nature’s most powerful gifts—herbs, seeds, nuts, and
              spices—offering high-quality products and personalized support that
              nurture fertility, boost vitality, and promote holistic healing.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-900">Vision Statement</h3>
            <p className="text-lg leading-relaxed">
              Our vision is to become a trusted sanctuary for natural health, where
              ancient wisdom meets modern wellness. We envision a world where
              people reconnect with the healing power of nature to achieve balanced,
              vibrant, and purposeful lives.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        variants={fadeIn}
        className="flex flex-col lg:flex-row items-center max-w-5xl mx-auto gap-12 mt-8"
      >
        <img
          src={ceo}
          alt="Founder of Rukky's Naturals"
          className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="text-center lg:text-left space-y-6">
          <h3 className="text-3xl font-bold text-green-800">Meet Our Founder</h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Rukaiya Mohammed Ameen is the visionary founder of Rukkys Naturals—a
            brand rooted in tradition, health, and empowerment. As a licensed herbalist
            under Ghana’s Ministry of Health, Rukaiya combines the healing power of
            herbs, seeds, nuts, and spices with a modern, eco-conscious approach. Her
            expertise lies in holistic wellness, with a special focus on female
            reproductive health, fertility, libido, PCOS, and overall vitality. 
          </p>
          {!readMore ? (
            <button
              className="text-green-800 underline mt-4 cursor-pointer"
              onClick={() => setReadMore(true)}
            >
              Read More
            </button>
          ) : (
            <>
              <p className="text-lg md:text-xl leading-relaxed mt-4">
                With over eight years of experience in agribusiness, Rukaiya is more than
                a herbalist—she’s a celebrity foodpreneur, SME development coach, and
                sustainability advocate. Her natural health products and personalized
                consultations are trusted by individuals seeking balance and healing
                through organic, locally sourced ingredients. <button
                className="text-green-800 underline mt-4 cursor-pointer"
                onClick={() => setReadMore(false)}
              >
                Read Less
              </button>
              </p>
              
              <div>
              <Link
                  to="health"
                  className="bg-green-800 text-white px-4 py-2 rounded-lg shadow-lg mt-4 hover:bg-green-700"
                >
                  Learn More
                </Link>
            </div>
            </>
          )}
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;
