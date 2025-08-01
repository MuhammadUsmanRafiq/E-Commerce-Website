// Sidebar.jsx
import React, { useState, useEffect, useRef } from 'react';

const Sidebar2 = ({ onFilterChange, selectedFilters }) => { // Add selectedFilters to props
  // State for collapsible sections
  const [openSections, setOpenSections] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: true,
    condition: true,
    ratings: true,
  });

  // State for price range inputs and slider values
  const [minPrice, setMinPrice] = useState(0); // Default min price
  const [maxPrice, setMaxPrice] = useState(100000); // Default max price
  const priceRangeMin = 0; // Absolute minimum for the slider
  const priceRangeMax = 100000; // Absolute maximum for the slider

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Helper to check if a filter is currently selected
  const isFilterSelected = (type, value) => {
    return selectedFilters.some(filter => filter.type === type && filter.value === value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (type, value) => (e) => {
    onFilterChange(type, value, e.target.checked);
  };

  // Handle radio change (for condition)
  const handleRadioChange = (type, value) => (e) => {
    if (e.target.checked) {
      // For radio buttons, first clear any existing filter of the same type
      selectedFilters.forEach(filter => {
        if (filter.type === type) {
          onFilterChange(type, filter.value, false);
        }
      });
      // Then add the new selected radio filter
      onFilterChange(type, value, true);
    }
  };

  // Handle price range input changes (for text inputs)
  const handleMinPriceInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= priceRangeMin && value <= maxPrice) {
      setMinPrice(value);
    } else if (e.target.value === '') {
      setMinPrice(''); // Allow clearing the input
    }
  };

  const handleMaxPriceInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= priceRangeMax && value >= minPrice) {
      setMaxPrice(value);
    } else if (e.target.value === '') {
      setMaxPrice(''); // Allow clearing the input
    }
  };

  // Handle price range slider changes
  const handleMinSliderChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    } else {
      setMinPrice(value);
      setMaxPrice(value);
    }
  };

  const handleMaxSliderChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    } else {
      setMaxPrice(value);
      setMinPrice(value);
    }
  };

  // Handle Apply button click for price range
  const handleApplyPriceFilter = () => {
    // Clear previous price range filters if any
    selectedFilters.forEach(filter => {
      if (filter.type === 'price') {
        onFilterChange('price', filter.value, false);
      }
    });
    // Add new price range filter
    onFilterChange('price', `$${minPrice} - $${maxPrice}`, true);
  };

  useEffect(() => {
    // When selectedFilters change from outside (e.g., clear all filters),
    // update the internal state for price range.
    const priceFilter = selectedFilters.find(filter => filter.type === 'price');
    if (!priceFilter) {
      setMinPrice(priceRangeMin);
      setMaxPrice(priceRangeMax);
    }
  }, [selectedFilters]);


  return (
    <div className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md font-sans">
      {/* Category Section (static for now, but could be dynamic) */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('category')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Category</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.category ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.category && (
          <ul className="mt-3 space-y-2 text-gray-600 text-sm">
            <li>Mobile accessory</li>
            <li>Electronics</li>
            <li>Smartphones</li>
            <li>Modern tech</li>
            <li><a href="#" className="text-blue-600 hover:underline">See all</a></li>
          </ul>
        )}
      </div>

      {/* Brands Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('brands')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Brands</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.brands ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.brands && (
          <div className="mt-3 space-y-2 text-gray-700 text-sm">
            {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-blue-600"
                  checked={isFilterSelected('brand', brand)}
                  onChange={handleCheckboxChange('brand', brand)}
                />
                <span className="ml-2">{brand}</span>
              </label>
            ))}
            <a href="#" className="text-blue-600 hover:underline block mt-2">See all</a>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('features')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Features</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.features ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.features && (
          <div className="mt-3 space-y-2 text-gray-700 text-sm">
            {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-blue-600"
                  checked={isFilterSelected('feature', feature)}
                  onChange={handleCheckboxChange('feature', feature)}
                />
                <span className="ml-2">{feature}</span>
              </label>
            ))}
            <a href="#" className="text-blue-600 hover:underline block mt-2">See all</a>
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('priceRange')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Price range</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.priceRange ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.priceRange && (
          <div className="mt-3">
            {/* Dual range sliders */}
            <div className="relative h-2.5 bg-gray-200 rounded-full mb-4">
              {/* Filled portion of the track */}
              <div
                className="absolute h-full bg-blue-600 rounded-full"
                style={{
                  left: `${((minPrice - priceRangeMin) / (priceRangeMax - priceRangeMin)) * 100}%`,
                  width: `${((maxPrice - minPrice) / (priceRangeMax - priceRangeMin)) * 100}%`,
                }}
              ></div>
              {/* Min Price Slider */}
              <input
                type="range"
                min={priceRangeMin}
                max={priceRangeMax}
                value={minPrice}
                onChange={handleMinSliderChange}
                className="absolute w-full h-full appearance-none bg-transparent pointer-events-none z-20
                                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto
                                [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto
                                "
              />
              {/* Max Price Slider */}
              <input
                type="range"
                min={priceRangeMin}
                max={priceRangeMax}
                value={maxPrice}
                onChange={handleMaxSliderChange}
                className="absolute w-full h-full appearance-none bg-transparent pointer-events-none z-20
                                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto
                                [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto
                                "
              />
            </div>

            <div className="flex justify-between items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={handleMinPriceInputChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={handleMaxPriceInputChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleApplyPriceFilter}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Condition Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('condition')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Condition</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.condition ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.condition && (
          <div className="mt-3 space-y-2 text-gray-700 text-sm">
            {['Any', 'Refurbished', 'Brand new', 'Old items'].map((condition) => (
              <label key={condition} className="flex items-center">
                <input
                  type="radio"
                  name="condition"
                  className="form-radio text-blue-600"
                  checked={isFilterSelected('condition', condition)}
                  onChange={handleRadioChange('condition', condition)}
                />
                <span className="ml-2">{condition}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Ratings Section */}
      <div className="mb-0">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('ratings')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Ratings</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.ratings ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.ratings && (
          <div className="mt-3 space-y-2 text-gray-700 text-sm">
            {[5, 4, 3, 2, 1].map((starCount) => (
              <label key={starCount} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-blue-600"
                  checked={isFilterSelected('rating', `${starCount} star`)}
                  onChange={handleCheckboxChange('rating', `${starCount} star`)}
                />
                <span className="ml-2 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < starCount ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar2;