import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Breadcrumb from './Breadcrumb';
import Sidebar2 from './Sidebar2'; // ✅ Correct Sidebar component
import ContentTop from './ContentTop';
import SelectedFilters from './SelectedFilters';
import ProductCardContent from './ProductCardContent';

function ProductCardPage() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (type, value, isChecked) => {
    setSelectedFilters((prevFilters) => {
      if (isChecked) {
        if (!prevFilters.some(filter => filter.type === type && filter.value === value)) {
          return [...prevFilters, { type, value }];
        }
      } else {
        return prevFilters.filter(
          (filter) => !(filter.type === type && filter.value === value)
        );
      }
      return prevFilters;
    });
  };

  const handleClearFilter = (type, value) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((filter) => !(filter.type === type && filter.value === value))
    );
  };

  const handleClearAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="container mx-auto px-4 py-8 font-sans flex flex-col lg:flex-row gap-8">
        {/* ✅ Replaced Sidebar with Sidebar2 */}
        <div className="w-full lg:w-1/4">
          <Sidebar2 onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
        </div>

        <div className="w-full lg:w-3/4">
          <SelectedFilters
            filters={selectedFilters}
            onClearFilter={handleClearFilter}
            onClearAllFilters={handleClearAllFilters}
          />
          <ContentTop itemCount={6} categoryName="Mobile accessory" />
          <ProductCardContent />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductCardPage;
