import React from 'react';
import { Link } from 'react-router';
import tuirmeric2 from '../../assets/images/tuirmeric2.png';
import ashwagandhaImage from '../../assets/images/ashwa2.png';
import fenugreekImage from '../../assets/images/fenugreek2.png';

const Blog = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto m-10 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        The Golden Spice: Unlocking the Power of Turmeric
      </h1>

      {/* Image */}
      <img
        src={tuirmeric2}
        alt="Turmeric root and powder"
        className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
      />

      {/* Introduction */}
      <p className="text-gray-700 mb-4">
        Turmeric, often referred to as the "golden spice," has long been celebrated for its vibrant color, distinct flavor, and remarkable health benefits. This ancient root, originating from South Asia, is more than just a culinary ingredient; it’s a treasure trove of medicinal properties that have stood the test of time.
      </p>

      {/* History Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">A Brief History of Turmeric</h2>
        <p className="text-gray-700 mb-4">
          Turmeric has been a staple in Ayurvedic and traditional Chinese medicine for centuries. Known as <em>Haldi</em> in India, this spice was used not only in cooking but also in rituals and as a natural dye. Ancient texts laud turmeric for its ability to purify the body and mind, making it an integral part of cultural and spiritual practices.
        </p>
      </section>

      {/* Health Benefits Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Health Benefits of Turmeric</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Boosts Immunity:</strong> Turmeric enhances the body's defense mechanisms, helping you stay resilient against common illnesses.</li>
          <li><strong>Reduces Inflammation:</strong> Ideal for individuals with arthritis or inflammatory conditions, turmeric can provide natural relief.</li>
          <li><strong>Improves Digestion:</strong> Adding a pinch of turmeric to your meals aids in digestion and reduces bloating.</li>
          <li><strong>Supports Mental Health:</strong> Studies suggest that turmeric can improve mood and even alleviate symptoms of depression.</li>
        </ul>
      </section>

      {/* Culinary Uses Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Culinary Uses of Turmeric</h2>
        <p className="text-gray-700 mb-4">
          Turmeric’s earthy, slightly bitter taste adds depth to a variety of dishes. From golden milk lattes to savory curries, its versatility is unmatched. Here are some creative ways to incorporate turmeric into your diet:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Smoothies:</strong> Add a dash of turmeric to your morning smoothie for a healthful kick.</li>
          <li><strong>Roasted Vegetables:</strong> Sprinkle turmeric on roasted veggies for a vibrant and nutritious side dish.</li>
          <li><strong>Soups and Stews:</strong> Enhance your soups with a touch of turmeric for a warming and flavorful boost.</li>
        </ul>
      </section>

      {/* Beauty Benefits Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Beauty Benefits of Turmeric</h2>
        <p className="text-gray-700 mb-4">
          Turmeric isn’t just for your kitchen; it’s also a star ingredient in skincare. Its antibacterial and anti-inflammatory properties make it perfect for:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Treating acne and blemishes</li>
          <li>Brightening the skin</li>
          <li>Reducing the appearance of scars</li>
        </ul>
        <p className="text-gray-700 mb-6">
          A simple DIY turmeric face mask made with yogurt and honey can work wonders for your skin.
        </p>
      </section>

      {/* Storage and Usage Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">How to Store and Use Turmeric</h2>
        <p className="text-gray-700 mb-6">
          To get the most out of turmeric, store it in an airtight container away from sunlight. If you’re using fresh turmeric, keep it refrigerated. Always pair turmeric with black pepper when cooking, as it enhances the absorption of curcumin in the body.
        </p>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Final Thoughts</h2>
        <p className="text-gray-700 mb-6">
          Turmeric is more than just a spice; it’s a golden gift from nature with endless possibilities. Whether you’re using it to flavor your meals, enhance your beauty routine, or boost your health, turmeric deserves a spot in your daily life. Embrace the golden spice and unlock its powerful benefits today!
        </p>
      </section>

      {/* Call to Action */}
      <p className="text-gray-700">
        Do you use turmeric in your daily routine? Share your favorite recipes and tips in the comments below!
      </p>

      {/* Related Articles Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Other Articles You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={ashwagandhaImage}
              alt="Ashwagandha roots and powder"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-green-700 mb-2">The Wonders of Ashwagandha</h3>
              <p className="text-gray-700 mb-4">
                Discover the ancient herb ashwagandha and its incredible benefits for stress relief, energy, and overall wellness.
              </p>
              <Link to="/article1"
                className="text-green-600 font-bold hover:text-green-800"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={fenugreekImage}
              alt="Fenugreek seeds"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-green-700 mb-2">Fenugreek Seeds: A Natural Treasure</h3>
              <p className="text-gray-700 mb-4">
                Learn how fenugreek seeds can enhance your health, beauty, and culinary adventures with their powerful properties.
              </p>
              <Link to="/article1"
                className="text-green-600 font-bold hover:text-green-800"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
