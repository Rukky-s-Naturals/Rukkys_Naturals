import React, { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Consultation = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [otherConsultation, setOtherConsultation] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);

  // Predefined time slots in 24-hour format
  const allTimeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  // Convert 24-hour time to 12-hour format with AM/PM
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const intHour = parseInt(hour, 10);
    const period = intHour >= 12 ? "PM" : "AM";
    const adjustedHour = intHour > 12 ? intHour - 12 : intHour || 12;
    return `${adjustedHour}:${minute} ${period}`;
  };

  const availableSlots = allTimeSlots.filter(
    (slot) => !bookedSlots.includes(slot)
  );

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedTime && !bookedSlots.includes(selectedTime)) {
      setBookedSlots((prev) => [...prev, selectedTime]);
      alert("Consultation booked successfully!");
      setSelectedDate("");
      setSelectedTime("");
      setConsultationType("");
      setOtherConsultation("");
    } else {
      alert("Please select an available time slot.");
    }
  };

  return (
    <section className="py-16 px-6 text-green-900 rounded-lg shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Book a <span className="text-yellow-500">Consultation</span>
        </h2>
        <p className="text-center text-lg mb-12">
          Schedule your session and get personalized advice on herbal remedies
          and sexual wellness.
        </p>

        {/* Consultation Form */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handleBooking}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Consultation Type */}
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-900"
              >
                Consultation Type
              </label>
              <select
                id="type"
                value={consultationType}
                onChange={(e) => setConsultationType(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Select type</option>
                <option>General Wellness</option>
                <option>Herbal Remedies</option>
                <option>Sexual Wellness</option>
                <option>Other</option>
              </select>
            </div>

            {/* "Other" Consultation Details */}
            {consultationType === "Other" && (
              <div>
                <label
                  htmlFor="other"
                  className="block text-sm font-medium text-gray-900"
                >
                  Please specify
                </label>
                <input
                  type="text"
                  id="other"
                  value={otherConsultation}
                  onChange={(e) => setOtherConsultation(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Specify your consultation type"
                  required
                />
              </div>
            )}

            {/* Date Selection */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-900 items-center gap-2"
              >
                <FaCalendarAlt /> Select Date
              </label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Time Selection */}
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-900 items-center gap-2"
              >
                <FaClock /> Select Time
              </label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Select time</option>
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {formatTime(slot)}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                Remaining slots: {availableSlots.length}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-900 text-white font-medium rounded-md hover:bg-green-700 transition cursor-pointer"
            >
              Book Consultation
            </button>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p>
            Have questions? Call us at{" "}
            <span className="font-bold">+233 (0) 55 459 9729</span>.
          </p>
          <p className="mt-2">
            <a
              href="/contact"
              className="text-yellow-500 hover:text-yellow-400 underline transition"
            >
              Contact Us
            </a>{" "}
            for further details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
