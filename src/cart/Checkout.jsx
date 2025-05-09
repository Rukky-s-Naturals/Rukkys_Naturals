import React, { useState } from "react";
import { useCart } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalItems, removeItem } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactType: "email",
    contactValue: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!cartItems.length) {
      alert("Your cart is empty!");
      return;
    }

    if (!formData.name || !formData.address || !formData.contactValue) {
      alert("Please fill out all required fields.");
      return;
    }

    // Redirect to the payment page with form data and total amount
    navigate("/payment", {
      state: {
        totalAmount,
        formData,
      },
    });
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cart Summary Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">
              Your cart is empty. <br />
              Try stocking it with our products.
            </p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4 border-b pb-4"
                >
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-800 font-bold">
                      ₵{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-semibold">
                Total Items: {totalItems}
              </h3>
              <h3 className="text-lg font-semibold">
                Total Amount: ₵{totalAmount.toFixed(2)}
              </h3>
            </div>
          )}
        </div>

        {/* Checkout Form Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <label className="block font-semibold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2" htmlFor="address">
                Delivery Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Contact</label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="email"
                  name="contactType"
                  value="email"
                  checked={formData.contactType === "email"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="email" className="mr-4">
                  Email
                </label>
                <input
                  type="radio"
                  id="phone"
                  name="contactType"
                  value="phone"
                  checked={formData.contactType === "phone"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="phone">Phone</label>
              </div>
              <input
                type={formData.contactType === "email" ? "email" : "tel"}
                id="contactValue"
                name="contactValue"
                value={formData.contactValue}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
