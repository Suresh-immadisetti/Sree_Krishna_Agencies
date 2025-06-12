import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started with your wholesale order.</p>
          <Link 
            to="/products"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg inline-flex items-center space-x-2"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shopping 
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Cart</span>
          </h1>
          <p className="text-xl text-gray-600">
            Review your wholesale order before checkout.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-orange-600 font-semibold mb-2">{item.category}</p>
                    <p className="text-2xl font-bold text-gray-900">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-4 py-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Items ({state.items.reduce((total, item) => total + item.quantity, 0)})</span>
                  <span className="font-semibold text-gray-900">₹{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-orange-600">₹{state.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link 
                to="/products"
                className="w-full mt-4 border-2 border-orange-500 text-orange-600 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold text-lg text-center block"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Wholesale Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Free delivery on orders above ₹500</li>
                  <li>• Bulk discount available</li>
                  <li>• 24/7 customer support</li>
                  <li>• Quality guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;