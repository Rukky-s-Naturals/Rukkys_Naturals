import React, { useState } from 'react';
import { FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashNav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  return (
    <div className="w-full h-22 bg-white shadow-md flex items-center justify-between px-4">
      {/* Title */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-green-900">Admin Dashboard</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative">
          <FaBell className="w-6 h-6 text-green-900 hover:text-green-700 cursor-pointer" />
          <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 bg-green-100 rounded-lg hover:bg-green-200 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaUser className="w-6 h-6 text-green-900" />
            <span className="text-green-900">Admin</span>
          </button>
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
              <Link
                to="profile"
                className="block px-4 py-2 text-green-900 hover:bg-green-200"
              >
                Profile
              </Link>
              <Link
                to="settings"
                className="block px-4 py-2 text-green-900 hover:bg-green-200"
              >
                Settings
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                onClick={() => alert('Logged Out')}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <FaSearch className="w-5 h-5 text-green-900" />
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-green-700 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default DashNav;
