import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import ProductListingPage from './components/ProductListingPage';
import ProductCardPage from './components/ProductCardPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage'; // ✅ Import

function App() {
  return (
    <Router>
      {/* Global Navigation */}
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4 container mx-auto">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
          </li>
          <li>
            <Link to="/product-card" className="hover:text-blue-400 transition-colors">Product Card View</Link>
          </li>
          <li>
            <Link to="/product/1" className="hover:text-blue-400 transition-colors">Product Detail</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-400 transition-colors">Cart</Link> {/* ✅ Cart link */}
          </li>
        </ul>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product-card" element={<ProductCardPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* ✅ Fixed route */}
      </Routes>
    </Router>
  );
}

export default App;
