import React from 'react';
import { Link, useParams } from 'react-router-dom';
import productsData from '../../data/products.json'; // Import the JSON file
import { useCart } from '../../cart/CartContext'; // Import the custom hook to access cart context

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  // Extract products from JSON data
  const products = productsData.herbalProducts
    .flatMap((category) => category.products)
    .map((product) => ({
      id: product.id,
      title: product.name,
      description: product.description,
      image: product.image, // Image comes from the JSON file
      price: Number(product.price), // Ensure price is stored as a number
    }));

  // Find the specific product based on the `id` from the URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart using the context function
  };

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
          <p className="text-green-900 font-bold text-2xl mb-6">
            ₵{product.price.toFixed(2)} {/* Format price for display */}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart} // Trigger addToCart function on click
          className="bg-green-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
