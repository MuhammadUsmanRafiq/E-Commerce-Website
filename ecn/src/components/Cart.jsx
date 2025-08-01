import React, { useState, useEffect } from 'react';

const App = () => {
  // Initial cart items with placeholder images for demonstration
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Stylish T-shirt Collection',
      details: 'Size: Medium, Color: Blue, Material: Cotton Blend',
      seller: 'Fashion Hub Co.',
      price: 78.99,
      qty: 2,
      image: 'https://placehold.co/100x100/E0E0E0/000000?text=T-Shirt' // Placeholder image
    },
    {
      id: 2,
      name: 'Premium Leather Bag',
      details: 'Color: Brown, Material: Genuine Leather',
      seller: 'Luxury Goods Inc.',
      price: 139.00,
      qty: 1,
      image: 'https://placehold.co/100x100/E0E0E0/000000?text=Bag' // Placeholder image
    },
    {
      id: 3,
      name: 'Modern Desk Lamp',
      details: 'Color: Black, Material: Metal, Dimmable LED',
      seller: 'Bright Ideas Store',
      price: 45.50,
      qty: 1,
      image: 'https://placehold.co/100x100/E0E0E0/000000?text=Lamp' // Placeholder image
    }
  ]);

  /**
   * Removes a single item from the cart based on its ID.
   * @param {number} id - The ID of the item to remove.
   */
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  /**
   * Clears all items from the cart.
   */
  const removeAllItems = () => {
    setCartItems([]);
  };

  /**
   * Handles quantity change for a specific item.
   * @param {number} id - The ID of the item whose quantity is being changed.
   * @param {string} newQty - The new quantity as a string (will be parsed to int).
   */
  const handleQuantityChange = (id, newQty) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: parseInt(newQty) } : item
    ));
  };

  /**
   * Calculates the total price of all items in the cart.
   * @returns {number} The total price.
   */
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  return (
    // Main container for the cart page, centers content and provides background
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 font-inter flex items-center justify-center">
      {/* Cart content wrapper, responsive width and shadow */}
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-4xl">
        {/* Cart Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
          My Shopping Cart ({cartItems.length})
        </h1>

        {/* Cart Items List */}
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            // Message displayed when the cart is empty
            <p className="text-center text-gray-500 py-8 text-lg">Your cart is empty. Start shopping!</p>
          ) : (
            // Map through cart items and render each one
            cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center p-4 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Item Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"
                  // Fallback for image loading errors
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/E0E0E0/000000?text=Image` }}
                />

                {/* Item Details */}
                <div className="flex-1 min-w-0 pr-4"> {/* min-w-0 to prevent overflow */}
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{item.name}</h2>
                  <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                  <p className="text-sm text-gray-600">Seller: <span className="font-medium">{item.seller}</span></p>
                  
                  {/* Action buttons for each item */}
                  <div className="flex flex-wrap items-center mt-3 space-x-2 sm:space-x-3">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-3 py-1.5 bg-red-100 text-red-700 text-sm font-medium rounded-md hover:bg-red-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      Remove
                    </button>
                    <button className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-md hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      Save for later
                    </button>
                  </div>
                </div>

                {/* Item Price and Quantity Selector */}
                <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0 ml-0 sm:ml-4 flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">${(item.price * item.qty).toFixed(2)}</span>
                  <div className="relative w-32"> {/* Fixed width for consistent dropdown size */}
                    <select
                      value={item.qty}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>Qty: {i + 1}</option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="flex justify-end mt-6 pt-4 border-t border-gray-200">
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-800">Total: <span className="text-blue-600">${calculateTotalPrice().toFixed(2)}</span></p>
            </div>
          </div>
        )}

        {/* Cart Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-200 space-y-4 sm:space-y-0">
          <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to shop
          </button>
          <button
            onClick={removeAllItems}
            className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Remove all items
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
