import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ArrowUp,
  X
} from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/919876543210?text=Hello! I'm interested in your wholesale grocery products. Please share your price list."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Chatbot */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Ramesh Trading Support</h3>
                <p className="text-xs opacity-90">We're here to help!</p>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-sm text-gray-800">Hello! Welcome to Ramesh Trading Company. How can I help you with your wholesale grocery requirements today?</p>
              </div>
              <div className="bg-orange-500 text-white p-3 rounded-xl ml-8">
                <p className="text-sm">I need wholesale prices for rice and spices</p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-sm text-gray-800">Great! We have premium basmati rice starting from ₹120/kg and authentic spices. What quantities are you looking for? I can share our detailed price list.</p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-sm text-gray-800">You can also call us at +91 98765 43210 or WhatsApp for immediate assistance!</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;