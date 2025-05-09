import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCreditCard, FaMobileAlt } from "react-icons/fa";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount = 0 } = location.state || {}; // Handle missing data gracefully

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({ cardNumber: "", expiry: "", cvv: "", mobileNumber: "", mobileProvider: "" });
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    // Simulate payment process
    setTimeout(() => {
      setLoading(false); // Set loading to false before navigating
      navigate("/paymentSuccess", { state: { totalAmount, paymentMethod: selectedMethod } });
    }, 2000);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Complete Your Payment
      </h1>

      {/* Order Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Order Total:{" "}
          <span className="text-green-700">₵{totalAmount.toFixed(2)}</span>
        </h2>
      </div>

      {/* Payment Methods */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Select Your Payment Method
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={() => setSelectedMethod("visa")}
            className={`p-4 border rounded-lg cursor-pointer shadow-md transition duration-300 ${
              selectedMethod === "visa" ? "border-green-800 bg-green-50" : "border-gray-300"
            } hover:border-green-700`}
          >
            <div className="flex items-center gap-4">
              <FaCreditCard className="w-8 h-8 text-green-800" />
              <h4 className="text-lg font-medium text-gray-800">Visa Payment</h4>
            </div>
            <p className="text-gray-600 mt-2">
              Pay securely using your Visa or Mastercard.
            </p>
          </div>

          <div
            onClick={() => setSelectedMethod("mobileMoney")}
            className={`p-4 border rounded-lg cursor-pointer shadow-md transition duration-300 ${
              selectedMethod === "mobileMoney"
                ? "border-green-800 bg-green-50"
                : "border-gray-300"
            } hover:border-green-700`}
          >
            <div className="flex items-center gap-4">
              <FaMobileAlt className="w-8 h-8 text-green-800" />
              <h4 className="text-lg font-medium text-gray-800">Mobile Money</h4>
            </div>
            <p className="text-gray-600 mt-2">
              Use MTN, Vodafone, or AirtelTigo Mobile Money.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      {selectedMethod === "visa" && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Visa Payment Form
          </h3>
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-80 border rounded-lg p-2"
                required
              />
            </div>
            <div className="flex gap-4">
              <div>
                <label className="block text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  className="w-40 border rounded-lg p-2"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-40 border rounded-lg p-2"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`bg-green-800 text-white py-2 px-4 rounded-lg shadow-md ${
                loading ? "cursor-not-allowed opacity-50" : "hover:bg-green-700 cursor-pointer"
              }`}
            >
              {loading ? "Processing..." : `Pay ₵${totalAmount.toFixed(2)}`}
            </button>
          </form>
        </div>
      )}

      {selectedMethod === "mobileMoney" && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Mobile Money Payment Form
          </h3>
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Select Provider</label>
              <select
                name="mobileProvider"
                value={formData.mobileProvider}
                onChange={handleInputChange}
                className="w-80 border rounded-lg p-2"
                required
              >
                <option value="">Select Provider</option>
                <option value="mtn">MTN</option>
                <option value="vodafone">Vodafone</option>
                <option value="airtelTigo">AirtelTigo</option>
              </select>
            </div>
            {formData.mobileProvider && (
              <div>
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-80 border rounded-lg p-2"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`bg-green-800 text-white py-2 px-4 rounded-lg shadow-md ${
                loading ? "cursor-not-allowed opacity-50" : "hover:bg-green-700 cursor-pointer"
              }`}
            >
              {loading ? "Processing..." : `Pay ₵${totalAmount.toFixed(2)}`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
