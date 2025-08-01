import React from 'react';
import logo from '../assets/logo-colored.png'
// CartNavbar component displays a simplified navigation bar for cart/profile
function CartNavbar() {
  return (
    <nav className="bg-white shadow-md w-full py-4 px-6 flex items-center justify-between rounded-none md:rounded-lg">
      {/* Brand Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-white-600 p-2 rounded-md">
        
          <img src={logo} alt="Brand Logo" className="h-8 w-auto" />
        </div>
    
      </div>

      {/* Navigation Icons Section */}
      {/* On small screens, this section will wrap if needed due to flex-wrap on parent,
          but space-x-6 ensures spacing between icons. */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Profile */}
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span className="text-xs">Profile</span>
        </div>

        {/* Message */}
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.105A9.702 9.702 0 0112 4c4.97 0 9 3.582 9 8z"></path>
          </svg>
          <span className="text-xs">Message</span>
        </div>

        {/* Orders */}
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4-4-4 4"></path>
          </svg>
          <span className="text-xs">Orders</span>
        </div>

        {/* My cart */}
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span className="text-xs">My cart</span>
        </div>
      </div>
    </nav>
  );
}

export default CartNavbar;
