import React from 'react';

// Importing the banner image
import BannerImage from '../assets/banner.png'; // Assuming the image is in the same directory

const MainSection = () => { // Renamed component to MainSection
  return (
    // Changed main background to light gray as per the image
    <main className="container mx-auto mt-4 px-4 pb-8 bg-gray-100 rounded-lg shadow-inner"> {/* Main container with light gray background */}
      <div className="flex flex-col lg:flex-row gap-6"> {/* Flex container for sidebars and main content */}

        {/* Left Sidebar - Categories */}
        <div className="w-full lg:w-1/5 bg-white rounded-lg shadow-sm p-4 flex-shrink-0">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Categories</h3>
          <ul className="space-y-2">
            {/* Category Item: Automobiles - Updated background and text color as per image */}
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors duration-200">
                Automobiles
              </a>
            </li>
            {/* Other Category Items - Retained original styling for non-selected items, ensuring text is dark */}
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800"> {/* Changed text-gray-700 to text-gray-800 for darker text */}
                Clothes and wear
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800">
                Home interiors
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800">
                Computer and tech
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800">
                Tools, equipments
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800">
                Sports and outdoor
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800">
                Animal and pets
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800">
                Machinery tools
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-gray-800">
                More category
              </a>
            </li>
          </ul>
        </div>

        {/* Main Banner Section */}
        {/* Background color remains teal-200 for the banner itself */}
        <div className="flex-grow w-full lg:w-3/5 bg-white rounded-lg overflow-hidden relative shadow-sm h-64 sm:h-80 md:h-96 lg:h-[420px]"> {/* Changed background to white */}
          <img
            src={BannerImage} // Using the imported banner image
            alt="Latest trending Electronic items"
            className="w-full h-full object-contain" // Changed to object-contain
          />
          {/* Changed text color to black for the banner text */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-black"> {/* Changed text-white to text-black */}
            <p className="text-lg mb-2">Latest trending</p>
            <h2 className="text-4xl font-bold mb-6">Electronic items</h2>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 self-start">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Sidebar - User Actions & Promotions */}
        <div className="w-full lg:w-1/5 space-y-4 flex-shrink-0">
          {/* User Welcome Card */}
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="flex flex-col items-center mb-4">
              <img
                src="https://placehold.co/48x48/E0E7FF/4F46E5?text=👋" // Placeholder for user avatar, color matches image
                alt="User Avatar"
                className="rounded-full mb-2"
              />
              <p className="text-gray-800 font-medium">Hi, user</p> {/* Ensured text is dark */}
              <p className="text-gray-600 text-sm">let's get stated</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold mb-2 hover:bg-blue-700 transition-colors duration-200">
              Join now
            </button>
            <button className="w-full bg-white border border-gray-300 text-blue-600 py-2 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200">
              Log in
            </button>
          </div>

          {/* Get US $10 off Promotion - Background color remains orange-500 */}
          <div className="bg-orange-500 rounded-lg shadow-sm p-4 text-white text-center">
            <p className="font-semibold text-lg">Get US $10 off</p>
            <p className="text-sm">with a new supplier</p>
          </div>

          {/* Send quotes Promotion - Background color remains teal-500 */}
          <div className="bg-teal-500 rounded-lg shadow-sm p-4 text-white text-center">
            <p className="font-semibold text-lg">Send quotes with</p>
            <p className="text-sm">supplier preferences</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default MainSection; // Exporting MainSection
