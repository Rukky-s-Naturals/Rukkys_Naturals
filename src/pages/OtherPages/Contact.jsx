import React from 'react';

const Contact = () => {
  return (
    <section>
      <form className="w-full max-w-5xl mx-auto p-6 text-green-900">

      {/* Heading */}
      <h1 className="text-center font-bold text-2xl py-6"> Send Us A Message Here </h1>

      {/* Form Inputs */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6">

        {/* Name Input */}
        <div className="flex flex-col w-full md:w-1/3">
          <label className="font-bold text-lg" htmlFor="name"> Name </label>
          <input className="border-2 h-10 rounded-md px-3" type="text" id="name" name="name"
           placeholder="Enter your name"/>
        </div>

        {/* Email Input */}
        <div className="flex flex-col w-full md:w-1/3">
          <label className="font-bold text-lg" htmlFor="email"> Email </label>
          <input className="border-2 h-10 rounded-md px-3" type="email" id="email" name="email"
           placeholder="Enter your email" />
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col w-full md:w-1/3">
          <label className="font-bold text-lg" htmlFor="phone"> Phone Number </label>
          <input className="border-2 h-10 rounded-md px-3" type="tel" id="phone"  name="phone"
            placeholder="Enter your phone number" />
        </div>

        {/* Message Input */}
        <div className="flex flex-col w-full">
          <label className="font-bold text-lg" htmlFor="message"> Message </label>
          <textarea className="border-2 h-40 w-full md:w-2/3 rounded-md px-3 py-2" name="message"
            id="message" placeholder="You can contact us about our products"> </textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button className="border-2 rounded-md px-6 py-3 bg-green-900 text-white font-bold hover:bg-green-700 transition" type="submit" > Submit </button>
      </div>
    </form>
    </section>
  );
};

export default Contact;
