import React from 'react';
import { Loader2 } from 'lucide-react';
import krishnaImage from '../assets/krishna.png';

const InitialLoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      {/* Background image container */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={krishnaImage}
          alt="Lord Krishna"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Loading indicator */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated spinner with gradient */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-orange-100 animate-ping" />
          <Loader2 className="w-16 h-16 text-orange-500 animate-spin [animation-duration:1.5s]" />
        </div>

        {/* Text with subtle animation */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-medium text-white drop-shadow-md">
            Sree Krishna Agencies
          </h3>
          <p className="text-orange-100 font-light animate-pulse">
            Loading divine blessings...
          </p>
        </div>
      </div>
    </div>
  );
};

export default InitialLoadingScreen;