import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract data from location state with defaults
  const {
    totalAmount = 0,
    paymentMethod = "Visa",
    cartItems = [],
  } = location.state || {};

  // Debugging: Log the received data
  useEffect(() => {
    console.log("PaymentSuccess State:", { totalAmount, paymentMethod, cartItems });
  }, [totalAmount, paymentMethod, cartItems]);

  // Clear cart from localStorage on component mount
  useEffect(() => {
    localStorage.removeItem("cartItems");
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 text-center">
      {/* Success Icon and Message */}
      <div className="flex flex-col items-center justify-center">
        <FaCheckCircle className="text-green-700 w-24 h-24 mb-6" />
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700">
          Thank you for your payment. Your order has been processed successfully.
        </p>
      </div>

      {/* Order Summary */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Order Summary
        </h2>
        <p className="text-lg text-gray-600">
          <strong>Payment Method:</strong>{" "}
          {paymentMethod === "Visa" ? "Visa" : "Mobile Money"}
        </p>
        <p className="text-lg text-gray-600">
          <strong>Total Amount Paid:</strong> ₵{totalAmount.toFixed(2)}
        </p>

        {/* Items Purchased */}
        {/* <div className="mt-6 text-left">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Items Purchased:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  <strong>{item.name}</strong> - {item.quantity} x ₵
                  {item.price.toFixed(2)}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No items purchased.</p>
            )}
          </ul>
        </div> */}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/")}
          className="bg-green-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 cursor-pointer"
        >
          Go to Homepage
        </button>
        <button
          onClick={() => navigate("/allProducts")}
          className="ml-4 bg-green-300 text-green-900 py-3 px-6 rounded-lg shadow-md hover:bg-green-400 transition duration-300 cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
