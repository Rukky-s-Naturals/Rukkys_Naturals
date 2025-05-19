import React, { useState } from "react";

const DashboardProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    weight: "",
    image: null,
  });
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, image: file });
      setSelectedImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddProduct = () => {
    const { name, description, price, weight, image } = newProduct;

    if (!name || !description || !price || !weight || !image) {
      alert("Please fill in all fields!");
      return;
    }

    const newProductEntry = {
      id: products.length + 1,
      name,
      description,
      price: parseFloat(price),
      weight,
      image: selectedImagePreview,
    };

    setProducts([...products, newProductEntry]);
    setNewProduct({ name: "", description: "", price: "", weight: "", image: null });
    setSelectedImagePreview(null);
  };

  return (
    <section className="w-full p-4">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-green-900 text-center mb-6">Manage Products</h1>

        {/* Add Product Form */}
        <div className="space-y-4 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-1/2 px-4 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Weight"
            value={newProduct.weight}
            onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })}
            className="w-1/2 px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Price (₵)"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="w-1/2 px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Product Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            rows="3"
          />
          <div className="flex items-center space-x-4">
            <label className="bg-green-100 text-green-900 px-4 py-2 rounded cursor-pointer">
              Choose Image
              <input type="file" onChange={handleImageChange} className="hidden" />
            </label>
            {selectedImagePreview && (
              <>
                <img
                  src={selectedImagePreview}
                  alt="Selected"
                  className="w-16 h-16 object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSelectedImagePreview(null);
                    setNewProduct({ ...newProduct, image: null });
                  }}
                  className="text-red-600 hover:underline"
                >
                  Remove Image
                </button>
              </>
            )}
          </div>
          <button
            onClick={handleAddProduct}
            className="bg-green-900 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Add Product
          </button>
        </div>

        {/* Products List */}
        <h2 className="text-xl font-bold text-green-900 mt-8 mb-4">Current Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="text-green-800 font-bold">
                  Price: ₵{parseFloat(product.price).toFixed(2)} <br />
                  Weight: {product.weight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardProducts;
