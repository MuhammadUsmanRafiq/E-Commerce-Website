import React, { useState } from 'react';

const Sidebar = ({
  selectedBrands,
  onBrandChange,
  selectedFeatures,
  onFeatureChange,
  priceRange,
  onPriceApply,
  condition,
  onConditionChange,
  ratings,
  onRatingChange
}) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: true,
    condition: true,
    ratings: true,
  });

  const [minPrice, setMinPrice] = useState(priceRange.min);
  const [maxPrice, setMaxPrice] = useState(priceRange.max);
  const priceRangeMin = 0;
  const priceRangeMax = 100000;

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleApplyPriceFilter = () => {
    onPriceApply({ min: minPrice, max: maxPrice });
  };

  return (
    <div className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md font-sans">
      
      {/* ✅ Brands Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('brands')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Brands</h3>
          <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.brands ? 'rotate-180' : 'rotate-0'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.brands && (
          <div className="mt-3 space-y-2 text-gray-700 text-sm">
            {['Samsung','Apple','Huawei','Pocco','Lenovo'].map(brand => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-blue-600"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandChange(brand)}
                />
                <span className="ml-2">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Features Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer pb-2 border-b border-gray-200"
          onClick={() => toggleSection('features')}
        >
          <h3 className="font-semibold text-gray-800 text-lg">Features</h3>
          <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              openSections.features ? 'rotate-180' : 'rotate-0'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {openSections.features && (
          <div className="mt-3 space-y-2 text-gray-700 text-sm">
            {['Metallic','Plastic cover','8GB Ram','Super power','Large Memory'].map(feature => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-blue-600"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => onFeatureChange(feature)}
                />
                <span className="ml-2">{feature}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Price Range Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 text-lg">Price Range</h3>
        <div className="mt-3 flex space-x-2">
          <input
            type="number"
            value={minPrice}
            onChange={e => setMinPrice(Number(e.target.value))}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
            className="w-1/2 p-2 border rounded"
          />
        </div>
        <button
          onClick={handleApplyPriceFilter}
          className="mt-3 w-full bg-blue-500 text-white py-1 rounded"
        >
          Apply
        </button>
      </div>

      {/* ✅ Condition Section */}
      <div className="mb-6">
        {['Any','Refurbished','Brand new','Old items'].map(cond => (
          <label key={cond} className="flex items-center">
            <input
              type="radio"
              name="condition"
              checked={condition === cond}
              onChange={() => onConditionChange(cond)}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">{cond}</span>
          </label>
        ))}
      </div>

      {/* ✅ Ratings Section */}
      <div className="mb-0">
        {[5,4,3,2,1].map(star => (
          <label key={star} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox rounded text-blue-600"
              checked={ratings.includes(star)}
              onChange={() => onRatingChange(star)}
            />
            <span className="ml-2">{'⭐'.repeat(star)}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
