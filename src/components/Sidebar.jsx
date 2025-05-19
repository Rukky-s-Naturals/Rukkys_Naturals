import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FaBox, FaEdit, FaShoppingCart, FaCog, FaUser, FaSignOutAlt, FaChartPie } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-100 shadow-lg flex flex-col">
      {/* Logo */}
      <div className="p-4 text-center border-b border-gray-200">
        <img
          src={logo}
          alt="Logo"
          className="h-12 mx-auto"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {/* Overview */}
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white ${
                  isActive ? 'bg-green-200 font-semibold' : 'text-green-900'
                }`
              }
            >
              <FaChartPie className="w-5 h-5" />
              Overview
            </NavLink>
          </li>

          {/* Products */}
          <li>
            <NavLink
              to="dashProducts"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white ${
                  isActive ? 'bg-green-200 font-semibold' : 'text-green-900'
                }`
              }
            >
              <FaBox className="w-5 h-5" />
              Products
            </NavLink>
          </li>

          {/* Blog Post */}
          <li>
            <NavLink
              to="blogPost"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white ${
                  isActive ? 'bg-green-200 font-semibold' : 'text-green-900'
                }`
              }
            >
              <FaEdit className="w-5 h-5" />
              Blog Post
            </NavLink>
          </li>

          {/* Orders */}
          <li>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white ${
                  isActive ? 'bg-green-200 font-semibold' : 'text-green-900'
                }`
              }
            >
              <FaShoppingCart className="w-5 h-5" />
              Orders
            </NavLink>
          </li>

          {/* Settings */}
          <li>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white ${
                  isActive ? 'bg-green-200 font-semibold' : 'text-green-900'
                }`
              }
            >
              <FaCog className="w-5 h-5" />
              Settings
            </NavLink>
          </li>

          {/* Profile */}
          <li>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white ${
                  isActive ? 'bg-green-200 font-semibold' : 'text-green-900'
                }`
              }
            >
              <FaUser className="w-5 h-5" />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center gap-3 p-3 text-red-600 bg-white rounded-lg hover:bg-red-100 cursor-pointer">
          <FaSignOutAlt className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
