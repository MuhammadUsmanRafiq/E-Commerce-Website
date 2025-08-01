import React from 'react';


// BannerProduct component displays a promotional banner
function BannerProduct() {
  return (
    // Decreased vertical padding (py-8 to py-4) to reduce height
    // Maintained w-full max-w-full for full horizontal expansion
    <div className="bg-blue-600 text-white py-4 px-6 md:px-12 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden relative w-full max-w-full">
      {/* Background shape for visual appeal */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-700 transform -skew-x-12 origin-top-left -ml-16 hidden sm:block"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 transform skew-x-12 origin-top-right -mr-16 hidden sm:block"></div>


      <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2> {/* Reduced text size */}
        <p className="text-base opacity-90">Have you ever finally just write dummy info</p> {/* Reduced text size */}
      </div>
      <div className="relative z-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md shadow-lg transition-colors duration-300"> {/* Reduced button padding */}
          Shop now
        </button>
      </div>
    </div>
  );
}
export default BannerProduct;