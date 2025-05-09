import React from "react";
import { useCart } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Your Cart</h1>

        {cartItems.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="py-4 px-6">Product</th>
                    <th className="py-4 px-6">Price</th>
                    <th className="py-4 px-6">Quantity</th>
                    <th className="py-4 px-6">Subtotal</th>
                    <th className="py-4 px-6">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6 flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover mr-4 rounded-md"
                        />
                        <span className="font-medium">{item.name}</span>
                      </td>
                      <td className="py-4 px-6">₵{item.price.toFixed(2)}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className={`w-8 h-8 flex items-center justify-center text-white bg-red-500 rounded-full ${
                              item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-400"
                            }`}
                          >
                            -
                          </button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-white bg-green-500 rounded-full hover:bg-green-400"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        ₵{(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-green-800">
                Total: ₵{totalPrice.toFixed(2)}
              </h2>
              <button
                onClick={handleProceedToCheckout}
                className="px-8 py-4 bg-green-800 text-white text-lg rounded-md hover:bg-green-600 transition cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-2xl text-gray-600">Your cart is empty. <br />Stock it now!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
