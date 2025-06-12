import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Store,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Store className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Ramesh Trading Company</span>
                <p className="text-sm text-gray-400">Since 1998</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted wholesale partner for premium quality groceries, food products, spices, grains, and commodities since 1998. 
              We provide the finest products with guaranteed freshness and competitive wholesale pricing across Mumbai and Maharashtra.
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
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wholesale Prices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bulk Orders</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Store Locations</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-orange-400 mb-1">Main Store</h5>
                <p className="text-gray-400 text-sm">
                  Shop No. 15-16, Crawford Market,<br />
                  Dr. D.N. Road, Fort,<br />
                  Mumbai - 400001, Maharashtra
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-orange-400 mb-1">Godown Location</h5>
                <p className="text-gray-400 text-sm">
                  Warehouse No. 8, APMC Market,<br />
                  Sector 19, Vashi,<br />
                  Navi Mumbai - 400703, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Ramesh Trading Company. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Wholesale Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;