import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import { useCart } from '../../cart/CartContext';

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = productsData.herbalProducts
    .flatMap((category) => category.products)
    .map((product) => ({
      id: product.id,
      title: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
    }));

  const product = products.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product not found!</p>;
  }

  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const increaseQuantity = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => addToCart({ ...product, quantity });
  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate('/checkout');
  };
  const handleGoBack = () => navigate(-1);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row gap-10 m-5 lg:m-10">
      {/* Left Column: Product Image */}
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-full lg:w-96 lg:h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Column: Product Details */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4 text-sm lg:text-base">{product.description}</p>
          <p className="text-green-900 font-bold text-xl lg:text-2xl mb-6">
            ₵{product.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="mb-6 flex items-center space-x-4">
          <button
            onClick={decreaseQuantity}
            className="border border-gray-400 px-3 py-1 rounded"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="text-lg w-8 text-center">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="border border-gray-400 px-3 py-1 rounded"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-6">
          <button
            onClick={handleAddToCart}
            className="bg-green-900 text-white py-2 px-6 lg:py-4 lg:px-8 text-base lg:text-lg rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-yellow-500 text-white py-2 px-6 lg:py-4 lg:px-8 text-base lg:text-lg rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Buy Now
          </button>
          <button
            onClick={handleGoBack}
            className="bg-gray-300 text-gray-700 py-2 px-6 lg:py-4 lg:px-8 text-base lg:text-lg rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
