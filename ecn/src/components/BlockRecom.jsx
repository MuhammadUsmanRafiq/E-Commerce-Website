import React from 'react';
import wallet from '../assets/bag.jpg'
import watch from '../assets/8.png'
import headphones from '../assets/headphones.png'
import pant from '../assets/halfpant.jpg'
import bottle from '../assets/smrtblk.png'
import chair from '../assets/7.png'

// Main App component to demonstrate BlockRecom
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4 font-sans">
      <BlockRecom />
    </div>
  );
}

// BlockRecom component displays a grid of related products
function BlockRecom() {
  // Sample data for related products
  const relatedProducts = [
    {
      id: 1,
      name: "Xiaomi Redmi 8 Original",
      priceRange: "$32.00-$40.00",
      image: wallet,
    },
    {
      id: 2,
      name: "Xiaomi Redmi 8 Original",
      priceRange: "$32.00-$40.00",
      image: watch,
    },
    {
      id: 3,
      name: "Xiaomi Redmi 8 Original",
      priceRange: "$32.00-$40.00",
      image: headphones,
    },
    {
      id: 4,
      name: "Xiaomi Redmi 8 Original",
      priceRange: "$32.00-$40.00",
      image: pant,
    },
    {
      id: 5,
      name: "Xiaomi Redmi 8 Original",
      priceRange: "$32.00-$40.00",
      image: bottle,
    },
    {
      id: 6,
      name: "Xiaomi Redmi 8 Original",
      priceRange: "$32.00-$40.00",
      image: chair,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Related products</h3>
      {/* Changed from grid to flex for a single row with horizontal scrolling */}
      <div className="flex flex-row overflow-x-auto pb-4 space-x-4 scrollbar-hide">
        {relatedProducts.map((product) => (
          <div key={product.id} className="flex-none w-40 flex flex-col items-center text-center"> {/* flex-none to prevent shrinking */}
            <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/E5E7EB/000000?text=Error'; }}
              />
            </div>
            <p className="text-gray-800 font-medium text-sm leading-tight mb-1">{product.name}</p>
            <p className="text-gray-600 text-xs">{product.priceRange}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
