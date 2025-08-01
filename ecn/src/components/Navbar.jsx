import React from 'react';
import { Menu, ChevronDown } from 'lucide-react'; // Importing Lucide icons for menu and dropdowns
import flaggermany from '../assets/ger.png'; // Correct import without square brackets

// Main App component that includes the new Navbar
const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm"> {/* Light shadow for subtle separation */}
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between text-gray-700 text-sm">
        {/* Left Section: Menu Items */}
        <div className="flex items-center gap-6 flex-wrap"> {/* flex-wrap allows items to wrap on smaller screens */}
          {/* All Category with Hamburger Icon */}
          <a href="#" className="flex items-center hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            <Menu size={20} className="mr-1" />
            All category
          </a>
          {/* Other Menu Items */}
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            Hot offers
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            Gift boxes
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            Projects
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            Menu item
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            Help
          </a>
        </div>

        {/* Right Section: Language and Shipping */}
        <div className="flex items-center gap-6 flex-wrap"> {/* flex-wrap allows items to wrap on smaller screens */}
          {/* Language/Currency Dropdown */}
          <a href="#" className="flex items-center hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            English, USD
            <ChevronDown size={16} className="ml-1" />
          </a>
          {/* Ship To with Flag */}
          <a href="#" className="flex items-center hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
            Ship to
            <img
              src={flaggermany} // Use imported image correctly
              alt="German Flag"
              width="20"
              height="15"
              className="ml-2 rounded-sm"
            />
            <ChevronDown size={16} className="ml-1" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
