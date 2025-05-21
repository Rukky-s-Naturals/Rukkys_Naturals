import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaListAlt, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../cart/CartContext';

const MobileBottomNav = () => {
  const { totalItems } = useCart(); // Get cart item count from context
  const location = useLocation(); // Hook to get current location

  // Scroll to top on location change
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [location.pathname]);

  return (
    <>
      {/* Custom CSS for specific device inclusions */}
      <style>{`
        /* Ensure visibility on iPad Pro, Nest Hub, and Nest Hub Pro */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
               (min-width: 1024px) and (max-height: 1366px) {
          .mobile-bottom-nav {
            display: flex !important;
          }
        }

        /* Hide for larger screens */
        @media (min-width: 1025px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>

      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 flex justify-around items-center py-2 z-50 md:flex lg:hidden mobile-bottom-nav">
        {/* Home */}
        <Link
          to="/"
          className="flex flex-col items-center text-gray-600 hover:text-green-700"
        >
          <FaHome size={24} className="text-green-700" />
          <span className="text-sm">Home</span>
        </Link>

        {/* Categories */}
        <Link
          to="/allProducts#categories"
          className="flex flex-col items-center text-gray-600 hover:text-green-700"
        >
          <FaListAlt size={24} className="text-green-700" />
          <span className="text-sm">Categories</span>
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex flex-col items-center text-gray-600 hover:text-green-700"
        >
          <FaShoppingCart size={24} className="text-green-700" />
          <span className="text-sm">Cart</span>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center z-50">
              {totalItems}
            </span>
          )}
        </Link>

        {/* WhatsApp */}
        <Link to="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-600 hover:text-green-700"
        >
          <FaWhatsapp size={24} className="text-green-700" />
          <span className="text-sm">WhatsApp</span>
        </Link>
      </div>
    </>
  );
};

export default MobileBottomNav;
