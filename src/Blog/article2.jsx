import React from 'react';
import fenugreek2 from '../assets/images/fenugreek2.png';

const Article2 = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto m-10 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">Fenugreek Seeds: A Natural Treasure for Health and Beauty</h1>

      {/* Image */}
      <img
        src={fenugreek2}
        alt="Fenugreek Seeds"
        className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
      />

      {/* Introduction */}
      <p className="text-gray-700 mb-4">
        Fenugreek seeds, small yet mighty, are a powerhouse of health benefits and have been revered for centuries in traditional medicine. Known for their slightly bitter taste and earthy aroma, these seeds are a staple in many kitchens and wellness routines around the globe.
      </p>

      {/* What are Fenugreek Seeds? */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">What are Fenugreek Seeds?</h2>
      <p className="text-gray-700 mb-4">
        Fenugreek, or <em>Trigonella foenum-graecum</em>, is an herb native to the Mediterranean, southern Europe, and western Asia. Its seeds and leaves are commonly used in cooking, cosmetics, and as a remedy for various ailments.
      </p>

      {/* Health Benefits Section */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Health Benefits of Fenugreek Seeds</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Regulates Blood Sugar Levels:</strong> Fenugreek seeds are known to improve insulin function and lower blood sugar levels.</li>
        <li><strong>Boosts Digestive Health:</strong> The high fiber content aids digestion and relieves constipation.</li>
        <li><strong>Promotes Lactation:</strong> Fenugreek is often recommended for nursing mothers to enhance milk production.</li>
        <li><strong>Supports Heart Health:</strong> Helps reduce cholesterol levels, promoting a healthy cardiovascular system.</li>
        <li><strong>Anti-inflammatory Properties:</strong> Eases inflammation and may help with conditions like arthritis.</li>
      </ul>

      {/* Beauty Benefits Section */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Beauty Benefits of Fenugreek Seeds</h2>
      <p className="text-gray-700 mb-4">
        Fenugreek seeds are not just for health; they are a boon for beauty as well. Here are some of their top benefits:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Hair Care:</strong> Strengthens hair roots, reduces dandruff, and promotes healthy hair growth.</li>
        <li><strong>Skin Health:</strong> Reduces acne, brightens the skin, and fights signs of aging.</li>
        <li><strong>Natural Exfoliant:</strong> Ground fenugreek seeds make an excellent natural scrub for the skin.</li>
      </ul>

      {/* Culinary Uses Section */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Culinary Uses of Fenugreek Seeds</h2>
      <p className="text-gray-700 mb-4">
        Fenugreek seeds are a versatile ingredient in the kitchen. Here’s how you can incorporate them into your meals:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Spices:</strong> Use ground seeds in curries and spice blends for a distinct flavor.</li>
        <li><strong>Herbal Teas:</strong> Steep the seeds in hot water to make a soothing and healthful tea.</li>
        <li><strong>Baking:</strong> Add a small amount to bread or dough for a unique taste and added nutrition.</li>
      </ul>

      {/* Precautions */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
      <p className="text-gray-700 mb-4">
        While fenugreek seeds are generally safe, overconsumption can lead to side effects such as bloating or allergic reactions. Pregnant women and individuals on medication should consult their doctor before use.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Conclusion</h2>
      <p className="text-gray-700 mb-6">
        Fenugreek seeds are a natural treasure, offering a myriad of benefits for health, beauty, and cuisine. Whether you’re spicing up your dishes, nurturing your skin and hair, or boosting your overall health, these tiny seeds pack a powerful punch.
      </p>

      {/* Call to Action */}
      <p className="text-gray-700">
        How do you use fenugreek seeds in your daily life? Share your tips and recipes in the comments below!
      </p>
    </div>
  );
};

export default Article2;
