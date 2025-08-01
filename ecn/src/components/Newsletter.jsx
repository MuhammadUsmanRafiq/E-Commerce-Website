import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 font-sans">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Subscribe on our newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-2/3 md:w-1/2">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Email icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.735 5.501c.47.296 1.11.296 1.58 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.161-3.337 2.098a3.75 3.75 0 0 1-4.654 0L1 8.161V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.161Z" />
              </svg>
            </div>
          </div>
          <button
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
