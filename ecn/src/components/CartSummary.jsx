import React from 'react';

// Destructure props with default values to prevent 'toFixed' errors if props are undefined
const CartSummary = ({ subtotal = 0.00, discount = 0.00, tax = 0.00, onCheckout }) => {
  // Calculate total based on provided props
  const total = subtotal - discount + tax;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto font-sans">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2> {/* Added a title for clarity */}

      {/* Summary details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-gray-700">
          <span>Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span>Discount:</span>
          <span className="font-medium text-red-600">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span>Tax:</span>
          <span className="font-medium text-green-600">+${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center text-xl font-bold text-gray-900">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full py-3 bg-green-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 mb-6"
      >
        Checkout
      </button>

      {/* Payment Method Icons */}
      <div className="flex justify-center items-center space-x-4">
        {/* Using real logos for payment icons with onerror fallback */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
          alt="American Express"
          className="h-6 object-contain"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x25/E0E0E0/000000?text=AMEX' }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          alt="Mastercard"
          className="h-6 object-contain"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x25/E0E0E0/000000?text=MC' }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
          alt="PayPal"
          className="h-6 object-contain"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x25/E0E0E0/000000?text=PayPal' }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
          alt="Visa"
          className="h-6 object-contain"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x25/E0E0E0/000000?text=VISA' }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png"
          alt="Apple Pay"
          className="h-6 object-contain"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x25/E0E0E0/000000?text=ApplePay' }}
        />
      </div>
    </div>
  );
};

// The defaultProps are still useful for documentation and tools,
// but the destructuring with default values provides immediate safety.
CartSummary.defaultProps = {
  subtotal: 0.00,
  discount: 0.00,
  tax: 0.00,
  onCheckout: () => console.log('Checkout button clicked (default handler)'),
};

export default CartSummary;
