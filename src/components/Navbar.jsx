import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../cart/CartContext';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Scrollbar hide styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;             /* Chrome, Safari, Opera */
        }
      `}</style>

      <nav className="flex flex-wrap items-center justify-between p-2 font-bold font-sans bg-green-50 shadow-md">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between w-full xl:w-auto">
          <Link to="/">
            <img
              src={logo}
              alt="Rukkys Naturals Logo"
              className="h-22 w-50 mr-2"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="xl:hidden text-green-900 text-2xl"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex flex-row gap-6 p-4 border border-gray-400 rounded-4xl shadow-2xl w-auto justify-evenly items-center">
          <NavLink to="/" className="text-lg font-bold hover:underline">
            Home
          </NavLink>
          <NavLink to="about" className="text-lg font-bold hover:underline">
            About
          </NavLink>
          <NavLink to="allproducts" className="text-lg font-bold hover:underline">
            Products
          </NavLink>
          <NavLink to="blog" className="text-lg font-bold hover:underline">
            Blog
          </NavLink>
          <NavLink to="booking" className="text-lg font-bold hover:underline">
            Consultation
          </NavLink>
          <NavLink to="contact" className="text-lg font-bold hover:underline">
            Contact
          </NavLink>
        </ul>

        {/* Social Links */}
        <div className="hidden xl:flex gap-5 items-center">
          <a
            href="https://www.whatsapp.com/"
            className="text-green-900 hover:text-green-600 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-3xl text-green-900 hover:text-green-600 transition duration-300" />
            {totalItems > 0 && (
              <span className="absolute top-[-5px] right-[-5px] bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Explore Button */}
        <Link to="allproducts">
          <button className="hidden xl:flex border-2 border-green-300 rounded-4xl w-30 p-3 bg-green-900 text-white justify-center cursor-pointer hover:bg-green-700 transition duration-300">
            Explore
          </button>
        </Link>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden w-full mt-4 bg-green-50 shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="text-2xl font-bold text-green-900 hover:underline"
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                onClick={toggleMenu}
                className="text-2xl font-bold text-green-900 hover:underline"
              >
                About
              </NavLink>
              <NavLink
                to="allproducts"
                onClick={toggleMenu}
                className="text-2xl font-bold text-green-900 hover:underline"
              >
                Products
              </NavLink>
              <NavLink
                to="blog"
                onClick={toggleMenu}
                className="text-2xl font-bold text-green-900 hover:underline"
              >
                Blog
              </NavLink>
              <NavLink
                to="booking"
                onClick={toggleMenu}
                className="text-2xl font-bold text-green-900 hover:underline"
              >
                Consultation
              </NavLink>
              <NavLink
                to="contact"
                onClick={toggleMenu}
                className="text-2xl font-bold text-green-900 hover:underline"
              >
                Contact
              </NavLink>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
