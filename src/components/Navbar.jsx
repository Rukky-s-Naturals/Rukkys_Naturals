import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useCart } from '../cart/CartContext';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    }
  };

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
        <ul className="hidden xl:flex flex-row gap-2 border border-gray-400 rounded-4xl shadow-2xl ml-15 p-4 w-180 justify-evenly">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="about"><li>About</li></NavLink>
          <NavLink to="allproducts"><li>Products</li></NavLink>
          <NavLink to="blog"><li>Blog</li></NavLink>
          <NavLink to="booking"><li>Consultation</li></NavLink>
          <NavLink to="contact"><li>Contact</li></NavLink>
        </ul>

        {/* Social Links */}
        <div className="hidden xl:flex gap-5">
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
            <div className="flex items-center gap-2 p-2">
              <ul
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                <NavLink to="/" onClick={toggleMenu}><li className="text-sm">Home</li></NavLink>
                <NavLink to="about" onClick={toggleMenu}><li className="text-sm">About</li></NavLink>
                <NavLink to="allproducts" onClick={toggleMenu}><li className="text-sm">Products</li></NavLink>
                <NavLink to="blog" onClick={toggleMenu}><li className="text-sm">Blog</li></NavLink>
                <NavLink to="booking" onClick={toggleMenu}><li className="text-sm">Consultation</li></NavLink>
                <NavLink to="contact" onClick={toggleMenu}><li className="text-sm">Contact</li></NavLink>
              </ul>
              <button
                onClick={scrollRight}
                className="text-green-900 text-2xl"
                aria-label="Scroll Down"
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
