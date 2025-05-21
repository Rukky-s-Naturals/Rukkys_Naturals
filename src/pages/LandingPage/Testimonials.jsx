import React from 'react';
import cus1 from '../../assets/images/cus1.png';
import cus2 from '../../assets/images/cus2.png';
import cus3 from '../../assets/images/cus3.png';

const Testimonials = () => {
  return (
    <section className="bg-green-50 py-12 px-4 h-auto flex flex-col justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What Clients Are Saying</h2>
        <p className="text-green-900 text-2xl mb-12">Real reviews from our amazing buyers</p>

        <div className="grid gap-8 md:grid-cols-3 text-white mx-4 md:mx-10">
          {[{
            img: cus1,
            name: "Adwoa Dadzie",
            role: "Happy Customer",
            stars: 5,
            review:
              "Absolutely amazing! I tried the consultation service and I learnt a lot about Herbs and why they are nature's solution. Highly recommended."
          },
          {
            img: cus2,
            name: "Ethan Simpson",
            role: "Client",
            stars: 4,
            review: "Very satisfied with the experience. Quick delivery and solid support!"
          },
          {
            img: cus3,
            name: "Emily Tamakloe",
            role: "Frequent Buyer",
            stars: 5,
            review:
              "I keep coming back to purchase these great products especially turmeric. They always deliver top-notch quality."
          }].map(({ img, name, role, stars, review }, i) => (
            <div
              key={i}
              className="bg-green-900 p-6 rounded-lg shadow-lg text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm">{role}</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className={idx < stars ? '' : 'text-white'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="italic">{`“${review}”`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
