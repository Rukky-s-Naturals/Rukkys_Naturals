import React from 'react';
import { Link, useParams } from 'react-router-dom';
import turmeric from '../../assets/images/turmeric.png';

const SingleProduct = () => {
  const { id } = useParams();

  // Define your product data directly in this file
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    description: `This is a brief description of Turmeric Product ${index + 1}. It highlights its features and benefits.`,
    image: turmeric,
    price: `$${(10 + index).toFixed(2)}`, // Example price logic
  }));

  // Find the specific product based on the `id` from the URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row gap-10 m-10">
      {/* Left Column: Product Image */}
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto lg:w-96 lg:h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Column: Product Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-green-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-green-900 font-bold text-2xl mb-6">{product.price}</p>
        </div>

        {/* Add to Cart Button */}
        <Link to='/cart'>
        <button className="bg-green-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 cursor-pointer">
          Add to Cart
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
