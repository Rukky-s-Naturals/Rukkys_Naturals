import React from "react";
import { FaHome, FaBox, FaShoppingCart, FaUsers, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center p-6 border-b border-green-700">
          <img
            src="/path-to-your-logo.png" // Replace with your logo URL
            alt="Logo"
            className="w-16 h-16 rounded-full"
          />
          <h1 className="text-2xl font-bold ml-4">Admin Panel</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-green-700 rounded-lg p-2">
              <FaHome />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-green-700 rounded-lg p-2">
              <FaBox />
              <span>Products</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-green-700 rounded-lg p-2">
              <FaShoppingCart />
              <span>Orders</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-green-700 rounded-lg p-2">
              <FaUsers />
              <span>Users</span>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4">
          <button className="flex items-center space-x-2 w-full py-2 px-4 bg-red-600 hover:bg-red-500 text-white rounded-lg">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overview Cards */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700">Total Products</h2>
            <p className="text-3xl text-green-800 font-bold mt-4">120</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700">Total Orders</h2>
            <p className="text-3xl text-green-800 font-bold mt-4">450</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700">Total Users</h2>
            <p className="text-3xl text-green-800 font-bold mt-4">85</p>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white rounded-lg shadow-md">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Dummy Data */}
                <tr>
                  <td className="py-2 px-4 text-center">001</td>
                  <td className="py-2 px-4 text-center">John Doe</td>
                  <td className="py-2 px-4 text-center">₵150</td>
                  <td className="py-2 px-4 text-center text-green-700 font-bold">Completed</td>
                  <td className="py-2 px-4 text-center">
                    <button className="text-blue-500 hover:underline">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-center">002</td>
                  <td className="py-2 px-4 text-center">Jane Smith</td>
                  <td className="py-2 px-4 text-center">₵200</td>
                  <td className="py-2 px-4 text-center text-yellow-600 font-bold">Pending</td>
                  <td className="py-2 px-4 text-center">
                    <button className="text-blue-500 hover:underline">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
