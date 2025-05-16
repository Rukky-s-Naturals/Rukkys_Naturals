import React from 'react';
import { FaBox, FaShoppingCart, FaChartBar, FaFileAlt } from 'react-icons/fa';

const Overview = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Products */}
        <div className="flex items-center p-4 bg-white shadow rounded-lg">
          <div className="p-3 rounded-full bg-yellow-100">
            <FaBox className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Products</p>
            <h4 className="text-xl font-bold">120</h4>
          </div>
        </div>

        {/* Total Orders */}
        <div className="flex items-center p-4 bg-white shadow rounded-lg">
          <div className="p-3 rounded-full bg-green-100">
            <FaShoppingCart className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Orders</p>
            <h4 className="text-xl font-bold">45</h4>
          </div>
        </div>

        {/* Total Sales */}
        <div className="flex items-center p-4 bg-white shadow rounded-lg">
          <div className="p-3 rounded-full bg-blue-100">
            <FaChartBar className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Sales</p>
            <h4 className="text-xl font-bold">₵4,320</h4>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="flex items-center p-4 bg-white shadow rounded-lg">
          <div className="p-3 rounded-full bg-pink-100">
            <FaFileAlt className="w-6 h-6 text-pink-600" />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Blog Posts</p>
            <h4 className="text-xl font-bold">18</h4>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-700">Sales Trend</h3>
        <div className="h-64">
          {/* Placeholder for Chart */}
          <div className="flex justify-center items-center h-full bg-gray-100 text-gray-400">
            Chart goes here
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-700">Recent Activities</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center justify-between">
            <p className="text-gray-600">New order placed by Gifty Amuzu</p>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-600">Added 5 new blog posts</p>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-600">Updated 10 products</p>
            <span className="text-sm text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
