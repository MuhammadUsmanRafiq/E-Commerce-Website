import React, { useState } from 'react';

const Coupon = () => {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    // You would typically send this couponCode to a backend for validation
    console.log('Applying coupon:', couponCode);
    // Replaced alert with a console log or a custom message box if needed
    // alert(`Attempting to apply coupon: ${couponCode}`);
    console.log(`Attempting to apply coupon: ${couponCode}`);
    // Add logic here to handle successful or failed coupon application
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-72 mx-auto"> {/* Increased width from w-64 to w-72 */}
      <h3 className="text-md font-semibold mb-3 text-gray-800">Have a coupon?</h3> {/* Adjusted font size and margin */}
      <div className="flex border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Add coupon"
          className="flex-1 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" // Adjusted padding and font size
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button
          onClick={handleApplyCoupon}
          className="px-5 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200" // Increased horizontal padding (px-5)
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Coupon;
