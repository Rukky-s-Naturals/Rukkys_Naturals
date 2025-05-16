import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json'; // Import the JSON file

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? productsData.herbalProducts.flatMap((category) => category.products)
      : productsData.herbalProducts
          .find((category) => category.category === selectedCategory)
          ?.products || [];

  return (
    <section>
      <div className="w-full max-w-lg sm:max-w-7xl mx-auto p-4 sm:p-6 text-green-900">
        {/* Page Title */}
        <h1 className="text-center font-bold text-2xl sm:text-3xl py-4 sm:py-6">Our Products</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {['All', ...productsData.herbalProducts.map((cat) => cat.category)].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-green-900 text-white'
                  : 'bg-green-100 text-green-900 hover:bg-green-300'
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 p-2">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/allProducts/${product.id}`} // Navigate to product details
              className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Product Image */}
              <img
                className="w-full h-48 sm:h-56 object-cover" // Adjust image width and height
                src={product.image || ''} // Provide image path if available
                alt={product.name}
              />

              {/* Product Details */}
              <div className="p-3 sm:p-4">
                {/* Product Title */}
                <h2 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{product.name}</h2>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-1 sm:mb-2">{product.description}</p>

                {/* Product Price and Weight */}
                <div className="text-green-800 font-bold text-sm sm:text-lg">
                  Price: ₵{product.price.toFixed(2)} <br />
                  Weight: {product.weight}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
