import React, { useState } from 'react';

// ProductDetailContent component displays product information
function ProductDetailContent() {
  // State to manage the active thumbnail image
  const [activeImage, setActiveImage] = useState('https://placehold.co/600x400/E5E7EB/000000?text=Product+Image');

  // Sample data for product details
  const product = {
    name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    inStock: true,
    rating: 4.5,
    reviews: 32,
    sold: 154,
    prices: [
      { range: "50-100 pcs", price: "$98.00" },
      { range: "100-700 pcs", price: "$90.00" },
      { range: "700+ pcs", price: "$78.00" },
    ],
    details: [
      { label: "Price", value: "Negotiable" },
      { label: "Type", value: "Classic shoes" },
      { label: "Material", value: "Plastic material" },
      { label: "Design", "value": "Modern nice" },
      { label: "Customization", value: "Customized logo and design custom packages" },
      { label: "Protection", value: "Refund Policy" },
      { label: "Warranty", value: "2 years full warranty" },
    ],
  };

  // Sample data for supplier details
  const supplier = {
    name: "Guanjoi Trading LLC",
    location: "Germany, Berlin",
    verified: true,
    worldwideShipping: true,
  };

  // Array of thumbnail image URLs
  const thumbnails = [
    'https://placehold.co/100x100/E5E7EB/000000?text=Thumb+1',
    'https://placehold.co/100x100/E5E7EB/000000?text=Thumb+2',
    'https://placehold.co/100x100/E5E7EB/000000?text=Thumb+3',
    'https://placehold.co/100x100/E5E7EB/000000?text=Thumb+4',
    'https://placehold.co/100x100/E5E7EB/000000?text=Thumb+5',
    'https://placehold.co/100x100/E5E7EB/000000?text=Thumb+6',
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
      {/* Product Image Section - Left Column */}
      <div className="w-full lg:w-2/5 p-6 flex flex-col items-center justify-between">
        <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mb-4">
          <img src={activeImage} alt="Product Main" className="object-cover w-full h-full rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E5E7EB/000000?text=Image+Not+Found'; }} />
        </div>
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 rounded-md cursor-pointer object-cover border-2 ${activeImage === thumb ? 'border-blue-500' : 'border-transparent'} transition-all duration-200`}
              onClick={() => setActiveImage(thumb)}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E5E7EB/000000?text=Error'; }}
            />
          ))}
        </div>
      </div>

      {/* Product Details Section - Middle Column */}
      <div className="w-full lg:w-2/5 p-6 border-l border-gray-200 flex flex-col">
        <div className="flex items-center text-green-600 font-semibold mb-2">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          In stock
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h1>

        {/* Rating and Reviews */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-transparent stroke-current stroke-1'}`} viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-sm mr-2">{product.rating}</span>
          <span className="text-blue-600 text-sm mr-2 cursor-pointer">{product.reviews} reviews</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-600 text-sm ml-2">{product.sold} sold</span>
        </div>

        {/* Price Ranges */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {product.prices.map((item, index) => (
            <div key={index} className="bg-blue-50 p-3 rounded-md text-center">
              <p className="text-blue-700 font-bold text-lg">{item.price}</p>
              <p className="text-gray-600 text-sm">{item.range}</p>
            </div>
          ))}
        </div>

        {/* Product Details Table */}
        <div className="mb-6">
          {product.details.map((detail, index) => (
            <div key={index} className="flex py-2 border-b border-gray-200 last:border-b-0">
              <span className="w-1/3 text-gray-600 font-medium">{detail.label}:</span>
              <span className="w-2/3 text-gray-800">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Supplier Information Section - Right Column */}
      <div className="w-full lg:w-1/5 p-6 border-l border-gray-200 flex flex-col items-center">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col items-center w-full mb-4">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl mr-3">
              {supplier.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-800">Supplier</p>
              <p className="text-blue-700 font-bold">{supplier.name}</p>
            </div>
          </div>
          <div className="flex flex-col items-start text-gray-600 text-sm w-full">
            <div className="flex items-center mb-1">
              <span className="mr-1">🇩🇪</span> {supplier.location}
            </div>
            {supplier.verified && (
              <div className="flex items-center mb-1">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Seller
              </div>
            )}
            {supplier.worldwideShipping && (
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.243 3.03a1 1 0 01.757 0l4 1a1 1 0 01.667.954V15a1 1 0 01-1 1h-1.586l-3.293 3.293a1 1 0 01-1.414 0L5.586 16H4a1 1 0 01-1-1V4.984a1 1 0 01.667-.954l4-1zM11 10a1 1 0 100-2 1 1 0 000 2zM7 10a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                Worldwide shipping
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2 w-full mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200 w-full">
              Send inquiry
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200 w-full">
              Seller's profile
            </button>
          </div>
        </div>
        <button className="flex items-center justify-center text-blue-600 hover:text-blue-800 self-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
          Save for later
        </button>
      </div>
    </div>
  );
}

export default ProductDetailContent;
