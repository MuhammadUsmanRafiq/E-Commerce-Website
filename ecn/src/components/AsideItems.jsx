import React from 'react';
import coat from '../assets/coat.jpg'
import shirt from '../assets/t-shirt.jpg'
import jacket from '../assets/jeans.jpg'
import bag from '../assets/leather.jpg'
import shirt2 from '../assets/be shirt.jpg'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4 font-sans">
      <AsideItems />
    </div>
  );
}


function AsideItems() {
  
  const products = [
    {
      id: 1,
      name: "Men Blazers Sets Elegant Formal",
      priceRange: "$7.00 - $99.50",
      image: coat,
    },
    {
      id: 2,
      name: "Men Shirt Sleeve Polo Contrast",
      priceRange: "$7.00 - $99.50",
      image: shirt ,
    },
    {
      id: 3,
      name: "Apple Watch Series Space Gray",
      priceRange: "$7.00 - $99.50",
      image: jacket,
    },
    {
      id: 4,
      name: "Basketball Crew Socks Long Stuff",
      priceRange: "$7.00 - $99.50",
      image: shirt2,
    },
    {
      id: 5,
      name: "New Summer Men's castrol T-Shirts",
      priceRange: "$7.00 - $99.50",
      image: bag,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">You may like</h3>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/E5E7EB/000000?text=Error'; }}
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-800 font-medium text-base leading-tight">{product.name}</p>
              <p className="text-gray-600 text-sm mt-1">{product.priceRange}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
