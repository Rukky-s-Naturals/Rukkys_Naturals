import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaListAlt, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../cart/CartContext'; // <-- Import your cart context

const MobileBottomNav = () => {
  const { totalItems } = useCart();  // <-- Get cart item count from context

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden flex justify-around items-center py-2 z-50">
      {/* Home */}
      <Link
        to="/"
        className="flex flex-col items-center text-gray-600 hover:text-green-700"
      >
        <FaHome size={24} className="text-green-700" /> {/* Green color for Home */}
        <span className="text-sm">Home</span>
      </Link>

      {/* Categories */}
      <Link
        to="/allProducts#categories"
        className="flex flex-col items-center text-gray-600 hover:text-green-700"
      >
        <FaListAlt size={24} className="text-green-700" /> {/* Green color for Categories */}
        <span className="text-sm">Categories</span>
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        className="relative flex flex-col items-center text-gray-600 hover:text-green-700"
      >
        <FaShoppingCart size={24} className="text-green-700" /> {/* Green color for Cart */}
        <span className="text-sm">Cart</span>
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center z-50">
            {totalItems}
          </span>
        )}
      </Link>

      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890" // <-- Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-600 hover:text-green-700"
      >
        <FaWhatsapp size={24} className="text-green-700" /> {/* Green color for WhatsApp */}
        <span className="text-sm">WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileBottomNav;
