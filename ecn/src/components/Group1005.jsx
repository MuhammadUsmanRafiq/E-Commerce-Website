import React from 'react';
import tablet from '../assets/smartphones.png'
import watch from '../assets/8.png'
import iphone from '../assets/IPHONE DARK BLUE.jpg'
import laptop from '../assets/image 34.png'
const Group1005 = () => {
  const savedItems = [
    {
      id: 1,
      image: tablet, // Placeholder image for tablet
      price: 99.50,
      name: 'GoPro HERO6 4K Action Camera - Black',
    },
    {
      id: 2,
      image: iphone, // Placeholder image for phone
      price: 99.50,
      name: 'GoPro HERO6 4K Action Camera - Black',
    },
    {
      id: 3,
      image: watch , // Placeholder image for watch
      price: 99.50,
      name: 'GoPro HERO6 4K Action Camera - Black',
    },
    {
      id: 4,
      image: laptop , // Placeholder image for laptop
      price: 99.50,
      name: 'GoPro HERO6 4K Action Camera - Black',
    },
  ];

  const handleMoveToCart = (itemId) => {
    console.log(`Item ${itemId} moved to cart`);
    // In a real application, you would update your cart state/context here
    // and remove the item from the 'saved for later' list.
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md font-sans">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Saved for later</h2>

      {/* Changed to flexbox for a single row with horizontal scrolling */}
      <div className="flex flex-row overflow-x-auto space-x-6 pb-4"> {/* Added pb-4 for scrollbar visibility */}
        {savedItems.map((item) => (
          <div key={item.id} className="flex-none w-48 flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-36 h-36 object-contain mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/150x150/E0E0E0/000000?text=Product` }}
            />
            <p className="text-lg font-bold text-gray-900 mb-1">${item.price.toFixed(2)}</p>
            <p className="text-sm text-gray-700 mb-4">{item.name}</p>
            <button
              onClick={() => handleMoveToCart(item.id)}
              className="flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Move to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group1005;
