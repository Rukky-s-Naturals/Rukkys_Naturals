import React, { useState } from 'react';

const DashboardProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    weight: '',
    price: '',
    description: '',
    image: '',
    category: '',    // Added category here
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.weight &&
      newProduct.price &&
      newProduct.image
    ) {
      setProducts([...products, newProduct]);
      setNewProduct({
        name: '',
        weight: '',
        price: '',
        description: '',
        image: '',
        category: '',  // Reset category on add
      });
    }
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleEditProduct = (index) => {
    setEditIndex(index);
    setEditProduct(products[index]);
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map((product, index) =>
      index === editIndex ? editProduct : product
    );
    setProducts(updatedProducts);
    setEditIndex(null);
    setEditProduct(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Products</h2>

      {/* Add Product Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Add New Product</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="px-4 py-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Weight"
            value={newProduct.weight}
            onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })}
            className="px-4 py-2 border rounded w-full"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="px-4 py-2 border rounded w-full"
          />
          <textarea
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="px-4 py-2 border rounded w-full col-span-1 md:col-span-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="px-4 py-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="px-4 py-2 border rounded w-full"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 px-6 py-2 bg-green-700 text-white rounded shadow hover:bg-green-500 cursor-pointer"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            {editIndex === index ? (
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  value={editProduct.name}
                  onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                  className="px-3 py-2 border rounded w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Weight"
                  value={editProduct.weight}
                  onChange={(e) => setEditProduct({ ...editProduct, weight: e.target.value })}
                  className="px-3 py-2 border rounded w-full mb-2"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={editProduct.price}
                  onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                  className="px-3 py-2 border rounded w-full mb-2"
                />
                <textarea
                  placeholder="Description"
                  value={editProduct.description}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, description: e.target.value })
                  }
                  className="px-3 py-2 border rounded w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={editProduct.image}
                  onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
                  className="px-3 py-2 border rounded w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={editProduct.category}
                  onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
                  className="px-3 py-2 border rounded w-full mb-2"
                />
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-full mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p>Weight: {product.weight}</p>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEditProduct(index)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardProducts;
