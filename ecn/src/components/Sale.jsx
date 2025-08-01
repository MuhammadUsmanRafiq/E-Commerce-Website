import React, { useState, useEffect } from 'react';

// Importing product images
import SmartWatchImage from '../assets/8.png';
import LaptopImage from '../assets/image 34.png';
import GoProCameraImage from '../assets/6.png';
import HeadphonesImage from '../assets/image 29.png';
import CanonCameraImage from '../assets/image 23.png'; // Assuming this is the Canon camera, though the name is 'image 23.png'

const Sale = () => {
  // State for the countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Set a target date for the countdown (e.g., 3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Example: 3 days from now

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup on component unmount
  }, []);

  const products = [
    { id: 1, name: 'Smart watches', image: SmartWatchImage, discount: '-25%' },
    { id: 2, name: 'Laptops', image: LaptopImage, discount: '-15%' },
    { id: 3, name: 'GoPro cameras', image: GoProCameraImage, discount: '-40%' },
    { id: 4, name: 'Headphones', image: HeadphonesImage, discount: '-25%' },
    { id: 5, name: 'Canon camreras', image: CanonCameraImage, discount: '-25%' }, // Using the provided image for Canon cameras
  ];

  return (
    <section className="container mx-auto mt-8 px-4 pb-8">
      <div className="bg-white rounded-lg shadow-sm flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">

        {/* Left Section: Deals and offers with Countdown */}
        <div className="p-6 flex-shrink-0 w-full md:w-1/5">
          <h2 className="font-bold text-xl text-gray-800 mb-1">Deals and offers</h2>
          <p className="text-gray-500 text-sm mb-4">Hygiene equipments</p>

          <div className="flex space-x-2">
            <div className="flex flex-col items-center bg-gray-700 text-white p-2 rounded-md">
              <span className="font-bold text-lg">{timeLeft.days}</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="flex flex-col items-center bg-gray-700 text-white p-2 rounded-md">
              <span className="font-bold text-lg">{timeLeft.hours}</span>
              <span className="text-xs">Hour</span>
            </div>
            <div className="flex flex-col items-center bg-gray-700 text-white p-2 rounded-md">
              <span className="font-bold text-lg">{timeLeft.minutes}</span>
              <span className="text-xs">Min</span>
            </div>
            <div className="flex flex-col items-center bg-gray-700 text-white p-2 rounded-md">
              <span className="font-bold text-lg">{timeLeft.seconds}</span>
              <span className="text-xs">Sec</span>
            </div>
          </div>
        </div>

        {/* Right Section: Product Cards */}
        <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-200"> {/* gap-px for thin lines */}
          {products.map(product => (
            <div key={product.id} className="bg-white p-4 flex flex-col items-center justify-center text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-contain mb-2"
              />
              <p className="text-gray-800 font-medium mb-1">{product.name}</p>
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                {product.discount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sale;
