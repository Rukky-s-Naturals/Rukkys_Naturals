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
      <div className="w-full max-w-7xl mx-auto p-6 text-green-900">
        {/* Page Title */}
        <h1 className="text-center font-bold text-3xl py-6">Our Products</h1>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {['All', ...productsData.herbalProducts.map((cat) => cat.category)].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/allProducts/${product.id}`} // Navigate to product details
              className="border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Product Image */}
              <img
                className="w-full h-70 object-cover"
                src={product.image || ''} // Provide image path if available
                alt={product.name}
              />

              {/* Product Details */}
              <div className="p-4">
                {/* Product Title */}
                <h2 className="font-bold text-lg mb-2">{product.name}</h2>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>

                {/* Product Price and Weight */}
                <div className="text-green-800 font-bold text-lg">
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
