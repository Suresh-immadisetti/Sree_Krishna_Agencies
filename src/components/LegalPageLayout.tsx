// src/components/LegalPageLayout.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-900 px-6 py-4">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="text-gray-400 mt-1">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="p-6 md:p-8 prose max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;