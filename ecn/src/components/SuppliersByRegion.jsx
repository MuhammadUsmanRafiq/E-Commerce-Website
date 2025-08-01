import React from 'react';

// Import flag images
import aeFlag from '../assets/AE@2x.png';
import auFlag from '../assets/icon.png'; // Assuming icon.png is for Australia
import usFlag from '../assets/US@2x.png';
import ruFlag from '../assets/RU@2x.png';
import itFlag from '../assets/IT@2x.png';
import dkFlag from '../assets/DK@2x.png';
import frFlag from '../assets/FR@2x.png';
import cnFlag from '../assets/CN@2x.png';
import gbFlag from '../assets/GB@2x.png';



const SuppliersByRegion = () => {
  const regionsData = [
    {
      id: 1,
      flag: aeFlag,
      country: 'Arabic Emirates',
      shopName: 'shopname.ae',
    },
    {
      id: 2,
      flag: auFlag,
      country: 'Australia',
      shopName: 'shopname.ae', // As per image, shopname.ae is used for Australia too
    },
    {
      id: 3,
      flag: usFlag,
      country: 'United States',
      shopName: 'shopname.ae', // As per image, shopname.ae is used for US too
    },
    {
      id: 4,
      flag: ruFlag,
      country: 'Russia',
      shopName: 'shopname.ru',
    },
    {
      id: 5,
      flag: itFlag,
      country: 'Italy',
      shopName: 'shopname.it',
    },
    {
      id: 6,
      flag: dkFlag,
      country: 'Denmark',
      shopName: 'denmark.com.dk',
    },
    {
      id: 7,
      flag: frFlag,
      country: 'France',
      shopName: 'shopname.com.fr',
    },
    {
      id: 8,
      flag: aeFlag, // Arabic Emirates appears twice in the image
      country: 'Arabic Emirates',
      shopName: 'shopname.ae',
    },
    {
      id: 9,
      flag: cnFlag,
      country: 'China',
      shopName: 'shopname.ae', // As per image, shopname.ae is used for China too
    },
    {
      id: 10,
      flag: gbFlag, // Using placeholder for Great Britain
      country: 'Great Britain',
      shopName: 'shopname.co.uk',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Suppliers by region</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4">
        {regionsData.map((region) => (
          <div key={region.id} className="flex items-center space-x-3">
            <img
              src={region.flag}
              alt={`${region.country} Flag`}
              className="w-10 h-auto rounded-sm shadow-sm" // Adjust size as needed
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/40x30/E0E0E0/333333?text=Flag`; }}
            />
            <div>
              <p className="text-gray-800 font-medium">{region.country}</p>
              <p className="text-gray-500 text-sm">{region.shopName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersByRegion;
