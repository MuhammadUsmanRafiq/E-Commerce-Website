import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // ✅ import Link
import { FaStar } from 'react-icons/fa';

// ✅ Static demo products (fallback if no API data)
import canoncamera from '../assets/image 33.png';
import Gopro from '../assets/image 34.png';
import Gopro2 from '../assets/image 23.png';
import Tablet from '../assets/smartphones.png';
import smartwatch from '../assets/8.png';
import Headphones from '../assets/headphones.png';

const demoProducts = [
  {
    _id: "demo1",
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 998.0,
    oldPrice: 1218.0,
    image: canoncamera,
    description: 'High-performance camera with 10x optical zoom and advanced image stabilization.',
  },
  {
    _id: "demo2",
    name: 'GoPro HERO6 4K Action Camera – Black',
    price: 998.0,
    image: Gopro2,
    description: 'Shoot stunning 4K videos and capture every adventure with ultra-wide lens and durability.',
  },
  // ... add _id for all demo products
  ...Array.from({ length: 30 }, (_, i) => ({
    _id: `sample-${i+1}`,
    name: `Sample Product ${i + 1}`,
    price: 100 + i,
    image: "/placeholder.png",
    description: "This is a demo description for testing pagination."
  }))
];

function ContentProduct({ products = [] }) {
  const finalProducts = products.length > 0 ? products : demoProducts;

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(finalProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = finalProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-[920px] mx-auto bg-white rounded shadow p-6 font-sans">
      {currentItems.map((product, index) => (
        <div key={product._id || index} className="flex items-start gap-4 py-6 border-b last:border-none">
          <div className="w-[100px] h-[100px] bg-gray-100 rounded overflow-hidden flex-shrink-0">
            <img 
              src={product.image || "/placeholder.png"} 
              alt={product.name} 
              className="w-full h-full object-contain" 
            />
          </div>

          <div className="flex-1">
            <h2 className="text-md font-semibold">{product.name}</h2>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-red-600">${product.price}</span>
              {product.oldPrice && (
                <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>
              )}
            </div>

            <div className="flex items-center text-sm text-yellow-500 mt-1">
              <FaStar className="mr-1" /> 7.5
              <span className="text-gray-500 ml-2">• 154 orders</span>
              <span className="text-green-600 ml-2">• Free Shipping</span>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              {product.description?.slice(0, 80)}...
            </p>

            {/* ✅ Use Link with product ID */}
            <Link 
  to={`/product/${product._id || product.id}`} 
  className="text-blue-600 text-sm font-medium mt-2 inline-block"
>
  View details
</Link>
          </div>

          <div className="pt-2">
            <button className="text-gray-400 hover:text-blue-500 text-xl">♡</button>
          </div>
        </div>
      ))}

      {/* ✅ Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t mt-4">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <label className="text-sm">Show</label>
          <select 
            value={itemsPerPage} 
            onChange={handleItemsPerPageChange} 
            className="border px-2 py-1 rounded text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <button 
            onClick={() => goToPage(currentPage - 1)} 
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-2 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            onClick={() => goToPage(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentProduct;
