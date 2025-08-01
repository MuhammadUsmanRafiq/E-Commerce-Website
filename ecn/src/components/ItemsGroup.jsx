import React from 'react';

// Importing images for the component
import HomeOutdoorBackground from '../assets/Group 969.png'; // Background image for the left section
import SoftChairsImage from '../assets/1.png';
import SofaChairImage from '../assets/lamp.png'; // Assuming 6.png is the lamp for Sofa & chair
import KitchenDishesImage from '../assets/matress.png'; // Assuming image 93.png is the mattress for Kitchen dishes
import SmartWatchesImage from '../assets/pot.png'; // Assuming 3.png is the pot for Smart watches
import KitchenMixerImage from '../assets/kitchenmixer.png';
import BlendersImage from '../assets/blender.png'; // Assuming 8.png is the coffee machine for Blenders
import HomeApplianceImage from '../assets/homeappli (1).png'; // Assuming 7.png is the organizer for Home appliance
import CoffeeMakerImage from '../assets/coffemake.png'; // Assuming image 89.png is the plant for Coffee maker

const ItemsGroup = () => {
  const items = [
    { id: 1, name: 'Soft chairs', price: 'USD 19', image: SoftChairsImage },
    { id: 2, name: 'Sofa & chair', price: 'USD 19', image: SofaChairImage },
    { id: 3, name: 'Kitchen dishes', price: 'USD 19', image: KitchenDishesImage },
    { id: 4, name: 'Smart watches', price: 'USD 19', image: SmartWatchesImage },
    { id: 5, name: 'Kitchen mixer', price: 'USD 100', image: KitchenMixerImage },
    { id: 6, name: 'Blenders', price: 'USD 39', image: BlendersImage },
    { id: 7, name: 'Home appliance', price: 'USD 19', image: HomeApplianceImage },
    { id: 8, name: 'Coffee maker', price: 'USD 10', image: CoffeeMakerImage },
  ];

  return (
    <section className="container mx-auto mt-8 px-4 pb-8">
      <div className="bg-white rounded-lg shadow-sm flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

        {/* Left Section: Home and outdoor */}
        <div
          className="relative flex-shrink-0 w-full lg:w-1/4 h-64 lg:h-auto bg-cover bg-center rounded-t-lg lg:rounded-l-lg lg:rounded-t-none p-6 flex flex-col justify-between"
          style={{ backgroundImage: `url(${HomeOutdoorBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay to make text more readable */}
          <div className="absolute inset-0 bg-white opacity-70 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"></div>
          <div className="relative z-10">
            <h2 className="font-bold text-2xl text-gray-800 mb-4">Home and outdoor</h2>
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

export default ItemsGroup;
