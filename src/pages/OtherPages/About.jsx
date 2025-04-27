import React from 'react'
import ceo from '../../assets/images/ceo.png'

const About = () => {
  return (
  <section class="about-us py-16 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  
    <div class="about-image">
      <img 
        src={ceo} 
        alt="CEO of Rukky's Naturals" 
        class="rounded-lg shadow-lg w-full object-cover"
      />
    </div>

    
    <div class="about-content space-y-6">
      <h2 class="text-4xl font-extrabold text-green-900">
        About Rukky's Naturals
      </h2>
      <p class="text-lg text-gray-800">
        At Rukky's Naturals, our journey began with a simple question: How can we reconnect with the healing wisdom of nature? Founded with a passion for herbal remedies and a deep respect for traditional knowledge, Rukky's Naturals has grown into a trusted source for premium herbal products and authentic spices.
      </p>
      <p class="text-lg text-gray-800">
        Inspired by a grandmother’s kitchen filled with the aroma of fresh herbs and spices, our founder, Rukky, realized the power of natural remedies to heal, nourish, and transform lives. This passion sparked the creation of Rukky's Naturals—a brand rooted in authenticity, sustainability, and the belief that nature holds the key to wellness.
      </p>
      <p class="text-lg text-gray-800">
        From organic turmeric and aromatic ginger to handcrafted herbal blends, every product at Rukky's Naturals is a testament to our commitment to quality and health. We carefully source our ingredients from trusted farmers and ensure that every package carries the essence of nature's finest gifts.
      </p>
      <p class="text-lg font-bold text-green-900">
        “Every spice has a story, and every herb has a purpose. Together, they bring the magic of nature to your home.”
      </p>
    </div>
  </div>
</section>

  )
}

export default About