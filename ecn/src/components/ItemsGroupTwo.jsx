import React from 'react';

// Importing images for the component
import ConsumerBackground from '../assets/bgconsumer.png'; // Background image for the left section
import SmartWatchesImage from '../assets/8.png'; // Smart watch image
import CamerasImage from '../assets/6.png'; // Camera image
import HeadphonesImage from '../assets/headphones.png'; // Headphones image
import SmartKettleImage from '../assets/smrtblk.png'; // Smart kettle image
import GamingSetImage from '../assets/image 29.png'; // Gaming set image
import LaptopsPCImage from '../assets/image 34.png'; // Laptop image
import SmartphonesImage from '../assets/smartphones.png'; // Smartphone image
import ElectricKettleImage from '../assets/image 33.png'; // Electric kettle image (red phone in image)


const ItemsGroupTwo = () => {
  const items = [
    { id: 1, name: 'Smart watches', price: 'USD 19', image: SmartWatchesImage },
    { id: 2, name: 'Cameras', price: 'USD 89', image: CamerasImage },
    { id: 3, name: 'Headphones', price: 'USD 10', image: HeadphonesImage },
    { id: 4, name: 'Smart watches', price: 'USD 90', image: SmartKettleImage }, // Reusing Smart watches name, but using kettle image
    { id: 5, name: 'Gaming set', price: 'USD 35', image: GamingSetImage },
    { id: 6, name: 'Laptops & PC', price: 'USD 340', image: LaptopsPCImage },
    { id: 7, name: 'Smartphones', price: 'USD 19', image: SmartphonesImage },
    { id: 8, name: 'Electric kattle', price: 'USD 240', image: ElectricKettleImage }, // Using red phone image for electric kettle
  ];

  return (
    <section className="container mx-auto mt-8 px-4 pb-8">
      <div className="bg-white rounded-lg shadow-sm flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

        {/* Left Section: Consumer electronics and gadgets */}
        <div
          className="relative flex-shrink-0 w-full lg:w-1/4 h-64 lg:h-auto bg-cover bg-center rounded-t-lg lg:rounded-l-lg lg:rounded-t-none p-6 flex flex-col justify-between"
          style={{ backgroundImage: `url(${ConsumerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay to make text more readable */}
          <div className="absolute inset-0 bg-blue-100 opacity-70 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"></div> {/* Changed overlay color to blue-100 */}
          <div className="relative z-10">
            <h2 className="font-bold text-2xl text-gray-800 mb-4">Consumer electronics and gadgets</h2>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
              Source now
            </button>
          </div>
        </div>

        {/* Right Section: Product Grid */}
        <div className="flex-grow grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200"> {/* gap-px for thin lines */}
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 flex flex-col items-start text-left">
              <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-2">From <span className="font-semibold">{item.price}</span></p>
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain self-end" // Align image to bottom right
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsGroupTwo;
