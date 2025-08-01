import React from 'react';
import backgroundImage from '../assets/bg2.png'; // Ensure this path is correct

const Inquiry = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center font-sans bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-blue-900/30 backdrop-brightness-90"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Left text section */}
        <div className="flex-1 text-white max-w-xl mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            An easy way to send <br /> requests to all suppliers
          </h1>
          <p className="text-base text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right form section - Smaller Width */}
        <div className="w-full md:w-[400px] bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send quote to suppliers
          </h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Type more details"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            ></textarea>
          </div>

          <div className="flex gap-4 mb-6">
            <input
              type="number"
              placeholder="Quantity"
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Pcs</option>
              <option>Kg</option>
              <option>Meters</option>
            </select>
          </div>

          <button
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
