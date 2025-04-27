import React, { useState } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const Consultation = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <section className="py-16 px-6 text-green-900 rounded-lg shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Book a <span className="text-yellow-500">Consultation</span>
        </h2>
        <p className="text-center text-lg mb-12">
          Schedule your session and get personalized advice on herbal remedies and natural living.
        </p>

        {/* Consultation Form */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900"> Name</label>
              <input type="text" id="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your full name"/>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Consultation Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-900">
                Consultation Type
              </label>
              <select id="type"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                <option>General Wellness</option>
                <option>Herbal Remedies</option>
                <option>Sex Therapy</option>
                <option>Other</option>
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-900 items-center gap-2"> <FaCalendarAlt /> Select Date </label>
              <input type="date" id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-900 items-center gap-2"> <FaClock /> Select Time </label>
              <input type="time" id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-900 text-white font-medium rounded-md hover:bg-green-700 transition"
            >
              Book Consultation
            </button>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p>Have questions? Call us at <span className="font-bold">+233 456 7890</span>.</p>
          <p className="mt-2">
            <a href="/contact"
              className="text-yellow-500 hover:text-yellow-400 underline transition">
 Contact Us
            </a>{' '}
            for further details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
