import React from 'react';
import {
  User,
  MessageSquare,
  ClipboardList,
  ShoppingCart,
  Search
} from 'lucide-react';
import logoColored from '../assets/logo-colored.png';

const Header = () => {
  return (
    <header className="w-full shadow-md">
      <nav className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between flex-nowrap gap-4 overflow-x-auto">
          {/* Logo and Brand */}
          <a href="#" className="flex items-center flex-shrink-0">
            <img
              src={logoColored}
              alt="Brand Logo"
              width="32"
              height="32"
              className="mr-2 rounded-md object-contain"
            />
            <span className="font-bold text-2xl text-blue-600 whitespace-nowrap">
              Brand
            </span>
          </a>

          {/* Search Bar */}
          <form className="flex flex-grow max-w-xl">
            <div className="relative flex w-full rounded-md shadow-sm">
              <input
                type="search"
                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
                aria-label="Search"
              />
              <select
                className="p-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-700 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Category select"
                defaultValue=""
              >
                <option value="">All category</option>
                <option value="1">Electronics</option>
                <option value="2">Clothing</option>
                <option value="3">Books</option>
              </select>
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 flex items-center justify-center"
                aria-label="Search button"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Action Icons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600 transition text-sm"
            >
              <User size={20} className="mr-1" />
              Profile
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600 transition text-sm"
            >
              <MessageSquare size={20} className="mr-1" />
              Message
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600 transition text-sm"
            >
              <ClipboardList size={20} className="mr-1" />
              Orders
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600 transition text-sm"
            >
              <ShoppingCart size={20} className="mr-1" />
              My cart
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
