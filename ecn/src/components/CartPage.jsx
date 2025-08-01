import React from "react";
import { useParams } from 'react-router-dom';
import CartNavbar from "./CartNavbar"; // Assuming this component exists
import Footer from "./Footer"; // Assuming this component exists
import Cart from "./Cart";
import Coupon from "./Coupon";
import CartSummary from "./CartSummary";
import BannerProduct from "./bannerproduct"; // Assuming this component exists
import ItFeat from "./ItFeat";
import Group1005 from "./Group1005";

function CartPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <CartNavbar /> {/* Top Navigation Bar */}

      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Main Content Area: Cart and Summary */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Left Column: Cart Items */}
          <div className="lg:w-2/3">
            <Cart />
          </div>

          {/* Right Column: Coupon and Cart Summary */}
          <div className="lg:w-1/3 flex flex-col space-y-6">
            <Coupon />
            <CartSummary />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <ItFeat />
        </div>

        {/* Saved for Later Section */}
        <div className="mb-8">
          <Group1005 />
        </div>

        {/* Banner Product Section */}
        <div className="mb-8">
          <BannerProduct />
        </div>
      </div>

      <Footer /> {/* Footer Component */}
    </div>
  );
}

export default CartPage;
