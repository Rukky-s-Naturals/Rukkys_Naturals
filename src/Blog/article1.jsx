import React from 'react';
import ashwa2 from '../assets/images/ashwa2.png';

const Article1 = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto m-10 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">Ashwagandha: The Ancient Herb for Modern Wellness</h1>

      {/* Image */}
      <img
        src={ashwa2}
        alt="Ashwagandha"
        className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
      />

      {/* Introduction */}
      <p className="text-gray-700 mb-4">
        Ashwagandha, often referred to as the "Indian ginseng," is a powerful herb that has been a cornerstone of Ayurvedic medicine for centuries. Its unique properties make it a go-to remedy for stress relief, energy enhancement, and overall wellness.
      </p>

      {/* What is Ashwagandha */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">What is Ashwagandha?</h2>
      <p className="text-gray-700 mb-4">
        Scientifically known as <em>Withania somnifera</em>, Ashwagandha is a small shrub with yellow flowers, native to India and North Africa. The roots and berries of this plant are primarily used for medicinal purposes. The name "Ashwagandha" translates to "smell of the horse," signifying its potency and ability to boost strength.
      </p>

      {/* Health Benefits Section */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Health Benefits of Ashwagandha</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Reduces Stress and Anxiety:</strong> Promotes mental calmness and helps the body adapt to stress.</li>
        <li><strong>Boosts Energy Levels:</strong> Enhances stamina and energy by supporting adrenal function.</li>
        <li><strong>Supports Cognitive Function:</strong> Improves memory, focus, and overall brain function.</li>
        <li><strong>Enhances Immunity:</strong> Combats free radicals, strengthening the immune system.</li>
        <li><strong>Balances Hormones:</strong> Supports thyroid health and helps regulate menstrual cycles.</li>
      </ul>

      {/* How to Use Ashwagandha */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">How to Use Ashwagandha</h2>
      <p className="text-gray-700 mb-4">Ashwagandha can be consumed in various forms:</p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Powdered Form:</strong> Mix with warm milk or water for a calming bedtime drink.</li>
        <li><strong>Capsules:</strong> Convenient for daily supplementation.</li>
        <li><strong>Tea:</strong> Steep the herb in hot water to make a soothing herbal tea.</li>
      </ul>

      {/* Precautions */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Precautions</h2>
      <p className="text-gray-700 mb-4">
        While Ashwagandha is generally safe, consult a healthcare professional before use, especially if you're pregnant, nursing, or on medication. Overuse can lead to stomach upset or drowsiness in some individuals.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold text-green-700 mb-4">Why Choose Ashwagandha?</h2>
      <p className="text-gray-700 mb-6">
        In today’s fast-paced world, Ashwagandha stands out as a natural remedy to combat modern challenges. Whether you’re looking to enhance energy, improve focus, or reduce stress, this ancient herb is a versatile addition to your wellness routine.
      </p>

      {/* Call to Action */}
      <p className="text-gray-700">
        Have you tried Ashwagandha? Share your experiences and favorite ways to use it in the comments below!
      </p>
    </div>
  );
};

export default Article1;
