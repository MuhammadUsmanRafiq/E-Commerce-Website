// ProductCardContent.jsx
import React from 'react';
import smartwatch from '../assets/8.png'
import Tablet from '../assets/smartphones.png'
import Iphone from '../assets/image 33.png'
import Laptop from '../assets/image 34.png'
import Iphone2 from '../assets/image 23.png'
import Camera from '../assets/6.png'
import phone from '../assets/IPHONE DARK BLUE.jpg'


// Sample product data to display in the grid
const products = [
  {
    id: 1,
    image: Iphone,// Placeholder for a red iPhone
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 2,
    image: phone, // Placeholder for a blue iPhone
    price: 99.50,
    oldPrice: 1128.00,
    rating: 5.9,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 3,
    image: Iphone2 , // Placeholder for a generic smartphone
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 4,
    image: Tablet, // Placeholder for a tablet
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 5,
    image: Camera, // Placeholder for a camera
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 6,
    image: phone, // Another smartphone placeholder
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 7,
    image: Laptop, // Placeholder for a laptop
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 8,
    image: smartwatch, // Placeholder for a smartwatch
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
  {
    id: 9,
    image: Iphone, // Placeholder for a red iPhone
    price: 99.50,
    oldPrice: 1128.00,
    rating: 7.5,
    description: 'GoPro HERO6 4K Action Camera - Black',
  },
];

const ProductCardContent = () => {
  return (
    // Grid container for product cards, responsive layout
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Map through the products array to render each product card */}
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {/* Product Image section */}
          <div className="relative p-4 flex justify-center items-center bg-gray-100">
            <img
              src={product.image}
              alt={product.description}
              className="max-h-48 w-auto object-contain rounded-md"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop on error
                e.target.src = `https://placehold.co/200x200/888888/FFFFFF?text=Image+Error`; // Fallback image in case of loading error
              }}
            />
            {/* Heart Icon (Favorite button) positioned absolutely */}
            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.281 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.12.11.18.165l.18-.165C12.721-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
          </div>

          {/* Product Details section */}
          <div className="p-4 flex-grow flex flex-col">
            {/* Price and Old Price display */}
            <div className="flex items-baseline mb-1">
              <span className="text-xl font-bold text-gray-900 mr-2">${product.price.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
            </div>

            {/* Star Rating display */}
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating / 2) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
            </div>

            {/* Product description */}
            <p className="text-gray-700 text-sm mb-4 flex-grow">{product.description}</p>

            {/* Add to Cart Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardContent;
