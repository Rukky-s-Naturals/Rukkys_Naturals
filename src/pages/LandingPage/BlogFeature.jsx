import React from 'react';
import { Link } from 'react-router-dom';
import ashwa2 from '../../assets/images/ashwa2.png';
import fenugreek2 from '../../assets/images/fenugreek2.png';
import tuirmeric2 from '../../assets/images/tuirmeric2.png';

const BlogFeature = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">Latest from Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Article 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={ashwa2}
            alt="Ashwagandha"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-green-700 mb-2">The Wonders of Ashwagandha</h2>
            <p className="text-gray-700 mb-4">
              Discover the ancient herb ashwagandha and its incredible benefits for stress relief, energy, and overall wellness.
            </p>
            <Link
              to="/article1"
              className="text-green-600 font-bold hover:text-green-800"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={fenugreek2}
            alt="Fenugreek Seeds"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Fenugreek Seeds: A Natural Treasure</h2>
            <p className="text-gray-700 mb-4">
              Learn how fenugreek seeds can enhance your health, beauty, and culinary adventures with their powerful properties.
            </p>
            <Link
              to="/article2"
              className="text-green-600 font-bold hover:text-green-800"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={tuirmeric2}
            alt="Turmeric"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-green-700 mb-2">The Golden Spice: Turmeric</h2>
            <p className="text-gray-700 mb-4">
              Explore turmeric's journey from an ancient root to a modern-day superfood known for its numerous health benefits.
            </p>
            <Link
              to="/blog"
              className="text-green-600 font-bold hover:text-green-800"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeature;
