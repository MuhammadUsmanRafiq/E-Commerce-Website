import React from 'react';

// Import product images
import tShirtImage from '../assets/t-shirt.jpg';
import jeansImage from '../assets/jeans.jpg';
import coatImage from '../assets/coat.jpg';
import bagImage from '../assets/bag.jpg';
import leatherImage from '../assets/leather.jpg';
import jeansShortsImage from '../assets/halfpant.jpg'; // Assuming this is the same jeans image for shorts
import headsetImage from '../assets/headphones.png';
import smartwatchImage from '../assets/leather.jpg'; // Assuming this is the same leather image for smartwatch
import potImage from '../assets/pot.png';
import kettleImage from '../assets/smrtblk.png';


const RecommendedItems = () => {
  // Sample data for recommended items, using the imported images
  const items = [
    {
      id: 1,
      image: tShirtImage,
      price: '$10.30',
      title: 'T-shirts with multiple colors, for men',
    },
    {
      id: 2,
      image: jeansImage,
      price: '$10.30',
      title: 'Jeans shorts for men blue color',
      // Note: The original image has a small overlay "DO IT JUET 4".
      // This is a complex UI element and is omitted for simplicity in this general component.
    },
    {
      id: 3,
      image: coatImage,
      price: '$12.50',
      title: 'Brown winter coat medium size',
    },
    {
      id: 4,
      image: bagImage,
      price: '$34.00',
      title: 'Jeans bag for travel for men',
    },
    {
      id: 5,
      image: leatherImage,
      price: '$99.00',
      title: 'Leather wallet',
    },
    {
      id: 6,
      image: jeansShortsImage, // Re-using jeans image as a placeholder for shorts
      price: '$9.99',
      title: 'Canon camera black, 100x zoom',
    },
    {
      id: 7,
      image: headsetImage,
      price: '$8.99',
      title: 'Headset for gaming with mic',
    },
    {
      id: 8,
      image: smartwatchImage, // Re-using leather image as a placeholder for smartwatch
      price: '$10.30',
      title: 'Smartwatch silver color modern',
    },
    {
      id: 9,
      image: potImage,
      price: '$10.30',
      title: 'Blue wallet for men leather metarfial',
    },
    {
      id: 10,
      image: kettleImage,
      price: '$80.95',
      title: 'Jeans bag for travel for men',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Recommended items</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
            <div className="w-full h-32 flex items-center justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain rounded-md"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/128x128/E0E0E0/333333?text=Image+Error`; }}
              />
            </div>
            <p className="text-lg font-bold text-gray-900 mb-1">{item.price}</p>
            <p className="text-sm text-gray-600 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
