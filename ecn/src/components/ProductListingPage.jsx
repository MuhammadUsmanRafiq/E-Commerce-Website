import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import ContentTop from './ContentTop';
import ContentProduct from './ContentProduct';

import { getAllProducts } from '../api/productAPI';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  // --- Filter state ---
  const [selectedBrands,   setSelectedBrands]   = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [priceRange,       setPriceRange]       = useState({ min: 0, max: 100000 });
  const [condition,        setCondition]        = useState('Any');
  const [ratings,          setRatings]          = useState([]); // array of star-counts

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // --- Handlers passed to Sidebar ---
  const handleBrandChange = (brand) => {
    setSelectedBrands(bs =>
      bs.includes(brand) ? bs.filter(b => b !== brand) : [...bs, brand]
    );
  };
  const handleFeatureChange = (feature) => {
    setSelectedFeatures(fs =>
      fs.includes(feature) ? fs.filter(f => f !== feature) : [...fs, feature]
    );
  };
  const handlePriceApply = ({ min, max }) => {
    setPriceRange({ min, max });
  };
  const handleConditionChange = (cond) => {
    setCondition(cond);
  };
  const handleRatingChange = (star) => {
    setRatings(rs =>
      rs.includes(star) ? rs.filter(r => r !== star) : [...rs, star]
    );
  };

  // --- Apply all filters in sequence ---
  const filtered = products
    // brand
    .filter(p =>
      selectedBrands.length === 0 || selectedBrands.includes(p.brand)
    )
    // features (expects p.features as array)
    .filter(p =>
      selectedFeatures.length === 0 ||
      selectedFeatures.every(ft => p.features?.includes(ft))
    )
    // price
    .filter(p =>
      p.price >= priceRange.min && p.price <= priceRange.max
    )
    // condition
    .filter(p =>
      condition === 'Any' || p.condition === condition
    )
    // ratings (expects p.rating number 1–5)
    .filter(p =>
      ratings.length === 0 || ratings.includes(Math.floor(p.rating))
    );

  return (
    <div>
      <Header /><Navbar /><Breadcrumb />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <Sidebar
          selectedBrands={selectedBrands}
          onBrandChange={handleBrandChange}
          selectedFeatures={selectedFeatures}
          onFeatureChange={handleFeatureChange}
          priceRange={priceRange}
          onPriceApply={handlePriceApply}
          condition={condition}
          onConditionChange={handleConditionChange}
          ratings={ratings}
          onRatingChange={handleRatingChange}
        />

        <div className="flex-1">
          <ContentTop
            itemCount={filtered.length}
            categoryName="Mobile accessory"
          />

          {loading && <p className="text-center">Loading…</p>}
          {error   && <p className="text-red-600">{error}</p>}
          {!loading && !error && (
            <ContentProduct products={filtered} />
          )}

          <div className="text-center mt-10">
            <Link to="/" className="btn">Back to Home</Link>
          </div>
        </div>
      </div>
      <Newsletter /><Footer />
    </div>
  );
}

export default ProductListingPage;
