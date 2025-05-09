import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Corrected import
import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa'; // Import Cart Icon
import { useCart } from '../cart/CartContext'; // Import the custom hook to access cart
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { totalItems } = useCart(); // Get the total number of items in the cart

  return (
    <nav className="flex flex-wrap items-center justify-between p-2 font-bold font-sans bg-green-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        {/* Logo Image */}
        <img
          src={logo} // Replace with the correct path to your logo
          alt="Rukkys Naturals Logo"
          className="h-22 w-50 mr-2" // Adjust size as needed
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex flex-row gap-2 border-1 border-gray-400 rounded-4xl shadow-2xl ml-15 p-4 w-180 justify-evenly">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="about"><li>About</li></NavLink>
        <NavLink to="allproducts"><li>Products</li></NavLink>
        <NavLink to="blog"><li>Blog</li></NavLink>
        <NavLink to="booking"><li>Consultation</li></NavLink>
        <NavLink to="contact"><li>Contact</li></NavLink>
      </ul>

      {/* Social Links */}
      <span className="hidden lg:flex gap-5">
        <a
          href="https://www.whatsapp.com/"
          className="text-green-900 hover:text-green-600 transition duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>

        {/* Cart Icon with Total Items Badge */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-3xl text-green-900 hover:text-green-600 transition duration-300" />
          {totalItems > 0 && (
            <span className="absolute top-[-5px] right-[-5px] bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </span>

      {/* Explore Button */}
      <Link to="allproducts">
        <button className="hidden lg:flex border-2 border-green-300 rounded-4xl w-30 p-3 bg-green-900 text-white justify-center cursor-pointer hover:bg-green-700 transition duration-300">
          Explore
        </button>
      </Link>

      {/* Mobile Menu */}
      <div className="lg:hidden flex flex-col w-full mt-4">
        <ul className="flex flex-col gap-2 items-center text-center">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="about"><li>About</li></NavLink>
          <NavLink to="allproducts"><li>Products</li></NavLink>
          <NavLink to="blog"><li>Blog</li></NavLink>
          <NavLink to="booking"><li>Consultation</li></NavLink>
          <NavLink to="contact"><li>Contact</li></NavLink>
        </ul>
        <div className="flex gap-5 mt-4 justify-center">
          <a
            href="https://www.whatsapp.com/"
            className="text-green-900 hover:text-green-600 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>
        <Link to="allproducts">
          <button className="flex border-2 border-green-300 rounded-4xl w-full p-3 bg-green-900 text-white justify-center cursor-pointer hover:bg-green-700 transition duration-300 mt-4">
            Explore
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
