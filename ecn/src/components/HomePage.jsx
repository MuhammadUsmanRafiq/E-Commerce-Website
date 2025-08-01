// client/src/components/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../api/ProductApi'; // ✅ Import API call

import Header from './Header';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Sale from './Sale';
import ItemsGroup from './ItemsGroup';
import ItemsGroupTwo from './ItemsGroupTwo';
import Inquiry from './Inquiry';
import RecommendedItems from './RecommendedItems';
import Services from './Services';
import SuppliersByRegion from './SuppliersByRegion';
import Newsletter from './Newsletter';
import Footer from './Footer';

function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);     // Add error state

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true); // Start loading
        setError(null);   // Clear previous errors

        const data = await getAllProducts();
        // Show only the first 4 as "Featured"
        setFeaturedProducts(data.slice(0, 20));
      } catch (err) {
        console.error('Error fetching featured products:', err);
        setError('Failed to load featured products. Please try again later.'); // User-friendly error message
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchFeaturedProducts();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <MainSection />
      <Sale />
      <ItemsGroup />
      <ItemsGroupTwo />
      <Inquiry />
      <RecommendedItems />
      <Services />
      <SuppliersByRegion />
      <Newsletter />

      {/* 🔥 Featured Products Section */}
      <section className="py-10 bg-gray-100 flex-grow"> {/* Added flex-grow to push footer down */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>

          {loading ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-700">Loading featured products...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 bg-red-100 text-red-700 border border-red-400 rounded-md p-4">
              <p className="text-lg">{error}</p>
            </div>
          ) : featuredProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">No featured products available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image || `https://placehold.co/300x200/E0E0E0/000000?text=${product.name}`}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x200/E0E0E0/000000?text=${product.name}`; }}
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                    <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
                    <Link to={`/product/${product.id}`} className="mt-4 block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* View All Products Link */}
      <div className="text-center py-8 bg-gray-50">
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          View All Products
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
