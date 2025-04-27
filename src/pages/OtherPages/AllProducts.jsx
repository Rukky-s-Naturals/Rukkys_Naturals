import React from 'react';
import { Link } from 'react-router-dom';
import turmeric from '../../assets/images/turmeric.png'

const Products = () => {
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    description: `This is a brief description of our Herbal Product ${index + 1}. It highlights its features and benefits.`,
    image: turmeric, // Use the turmeric.png image for all products
    price: `$${(10 + index).toFixed(2)}`, // Example price logic
  }));

  return (
    <section>
      <div className="w-full max-w-7xl mx-auto p-6 text-green-900">
        <h1 className="text-center font-bold text-3xl py-6">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg overflow-hidden bg-white"
            >
              {/* Product Image */}
              <img
                className="w-full h-70 object-cover"
                src={product.image}
                alt={product.title}
              />

              {/* Product Details */}
              <div className="p-4">
                {/* Product Title */}
                <h2 className="font-bold text-lg mb-2">{product.title}</h2>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>

                {/* Product Price */}
                <div className="text-green-800 font-bold text-lg mb-4">
                  {product.price}
                </div>

                {/* Learn More Button */}
                <Link to={`/allProducts/${product.id}`}>
                  <button className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
