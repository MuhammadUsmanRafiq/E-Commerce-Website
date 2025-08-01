import React from 'react';

// Import service background images
import bg6Image from '../assets/bg6.png'; // Source from Industry Hubs
import bg4Image from '../assets/bg4.png'; // Customize Your Products
import bg3Image from '../assets/bg3.png'; // Fast, reliable shipping
import bg5Image from '../assets/bg5.png'; // Product monitoring and inspection

const Services = () => { // Component name is Services
  const serviceData = [ // Correct variable name: serviceData (singular)
    {
      id: 1,
      image: bg6Image,
      title: 'Source from Industry Hubs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 2,
      image: bg4Image,
      title: 'Customize Your Products',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.5 6V5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v.75h.75a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H7.5a2.25 2.25 0 0 1-2.25-2.25V8.25A2.25 2.25 0 0 1 7.5 6h.75ZM6 8.25V18.75c0 .414.336.75.75.75h9.75V8.25a.75.75 0 0 0-.75-.75H7.5a.75.75 0 0 0-.75.75Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 3,
      image: bg3Image,
      title: 'Fast, reliable shipping by ocean or air',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
        </svg>
      ),
    },
    {
      id: 4,
      image: bg5Image,
      title: 'Product monitoring and inspection',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.516 2.173a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.569v.153a.75.75 0 0 0 .569.722 9.75 9.75 0 0 0 10.5 0 .75.75 0 0 0 .569-.722v-.153a.75.75 0 0 0-.722-.569 11.209 11.209 0 0 1-7.877-3.08ZM12 6A8.25 8.25 0 0 0 3.75 14.25V18a2.25 2.25 0 0 0 2.25 2.25h12A2.25 2.25 0 0 0 20.25 18v-3.75A8.25 8.25 0 0 0 12 6Zm3.75 7.5a.75.75 0 0 0-1.5 0V15h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0V16.5h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.5Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our extra services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service) => ( // Corrected to serviceData.map
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x200/E0E0E0/333333?text=Image+Error`; }}
              />
              <div className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg">
                {service.icon}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
