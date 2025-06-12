import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search,
  ChevronDown,
  ShoppingCart,
  Store
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();
  const navigate = useNavigate();

  const productDropdownItems = [
    "Basmati Rice", "Non-Basmati Rice", "Wheat Flour", "Gram Flour", "Rice Flour",
    "Turmeric Powder", "Red Chili Powder", "Coriander Powder", "Garam Masala", "Cumin Seeds",
    "Mustard Oil", "Sunflower Oil", "Coconut Oil", "Groundnut Oil",
    "Toor Dal", "Moong Dal", "Chana Dal", "Urad Dal", "Masoor Dal",
    "Sugar", "Jaggery", "Rock Salt", "Iodized Salt",
    "Almonds", "Cashews", "Dates", "Raisins", "Walnuts",
    "Tea Leaves", "Coffee Beans", "Green Tea", "Masala Tea",
    "Onions", "Potatoes", "Tomatoes", "Garlic", "Ginger"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <Store className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Ramesh Trading Company
              </span>
              <p className="text-xs text-gray-500">Since 1998</p>
            </div>
          </Link>
          
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search groceries, spices, grains..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </form>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">About</Link>
              
              <div className="relative">
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                    <div className="max-h-80 overflow-y-auto">
                      {productDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          to="/products"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Contact</Link>
              
              <Link 
                to="/cart" 
                className="relative text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
              
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                Get Quote
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search groceries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                />
              </form>
            </div>
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="px-3 py-2">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-medium">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;