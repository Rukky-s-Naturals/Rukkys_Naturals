import React from 'react';
import { Link } from 'react-router-dom';
import ashwa2 from '../../assets/images/ashwa2.png';
import fenugreek2 from '../../assets/images/fenugreek2.png';
import tuirmeric2 from '../../assets/images/tuirmeric2.png';

const articles = [
  {
    img: ashwa2,
    alt: "Ashwagandha",
    title: "The Wonders of Ashwagandha",
    summary: "Discover the ancient herb ashwagandha and its incredible benefits for stress relief, energy, and overall wellness.",
    link: "/article1",
  },
  {
    img: fenugreek2,
    alt: "Fenugreek Seeds",
    title: "Fenugreek Seeds: A Natural Treasure",
    summary: "Learn how fenugreek seeds can enhance your health, beauty, and culinary adventures with their powerful properties.",
    link: "/article2",
  },
  {
    img: tuirmeric2,
    alt: "Turmeric",
    title: "The Golden Spice: Turmeric",
    summary: "Explore turmeric's journey from an ancient root to a modern-day superfood known for its numerous health benefits.",
    link: "/blog",
  },
];

const BlogFeature = () => {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">Latest from Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map(({ img, alt, title, summary, link }, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={img} alt={alt} loading="lazy" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-green-700 mb-2">{title}</h2>
              <p className="text-gray-700 mb-4">{summary}</p>
              <Link to={link} className="text-green-600 font-bold hover:text-green-800">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFeature;
