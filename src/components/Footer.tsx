import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import logo from '../assets/logo.png'; // Import white logo from assets

const Footer: React.FC = () => {
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Sree Krishna Agencies Logo"
                className="h-16" 
              />
              <div>
                <span className="text-xl font-bold">Sree Krishna Agencies</span>
                <p className="text-sm text-gray-400">Since 2025</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted wholesale partner for premium quality groceries, food products, spices, grains, and commodities since 2025. 
              We provide the finest products with guaranteed freshness and competitive wholesale pricing across Hyderabad and Telangana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  onClick={handleNavigation}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={handleNavigation}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  onClick={handleNavigation}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={handleNavigation}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Location</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-orange-400 mb-1">Hyderabad Store</h5>
                <p className="text-gray-400 text-sm">
                  3-5-135, Hyderguda Cross Rd,<br />
                  Attapur, Gumma Konda Colony,<br />
                  Hyderabad, Telangana 500048
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Phone: +91 6301949370
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Sree Krishna Agencies. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link 
                to="/privacy-policy" 
                onClick={handleNavigation}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                onClick={handleNavigation}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                to="/wholesale-terms" 
                onClick={handleNavigation}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Wholesale Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;