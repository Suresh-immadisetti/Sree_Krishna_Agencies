import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard,
  Truck,
  Shield,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { state, dispatch } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    // Clear cart after order
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your wholesale order. We'll contact you within 24 hours to confirm the details and arrange delivery.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Order Total: ₹{state.total.toFixed(2)}
          </p>
          <Link 
            to="/"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (state.items.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products before checkout.</p>
          <Link 
            to="/products"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to="/cart"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Checkout
          </h1>
          <p className="text-xl text-gray-600">
            Complete your wholesale order.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent md:col-span-2"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Address</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="PIN Code"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <Truck className="w-6 h-6 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Cash on Delivery</div>
                      <div className="text-sm text-gray-600">Pay when you receive your order</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleInputChange}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Online Payment</div>
                      <div className="text-sm text-gray-600">Pay securely online with UPI/Card</div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold text-lg"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                      <div className="text-xs text-gray-600">Qty: {item.quantity}</div>
                    </div>
                    <div className="font-semibold text-gray-900">{item.price}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-orange-600">₹{state.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-green-600" />
                  <span>Free delivery on orders above ₹500</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Quality guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;