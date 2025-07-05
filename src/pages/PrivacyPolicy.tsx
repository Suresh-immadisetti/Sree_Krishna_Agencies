import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      lastUpdated="June 15, 2024"
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">1. Introduction</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Sree Krishna Agencies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">2. Information We Collect</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We may collect personal information that you voluntarily provide to us when you register on the site, place an order, subscribe to our newsletter, or fill out a form. This may include:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li className="leading-relaxed">Name and contact information (email, phone number, address)</li>
          <li className="leading-relaxed">Business information (company name, GST number)</li>
          <li className="leading-relaxed">Payment details (processed securely through our payment gateway)</li>
          <li className="leading-relaxed">Order history and preferences</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">3. How We Use Your Information</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We may use the information we collect for various purposes, including to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li className="leading-relaxed">Process and fulfill your wholesale orders</li>
          <li className="leading-relaxed">Provide customer support and respond to inquiries</li>
          <li className="leading-relaxed">Improve our website and services</li>
          <li className="leading-relaxed">Send periodic emails regarding your orders or other products and services</li>
          <li className="leading-relaxed">Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">4. Data Security</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We implement appropriate security measures to maintain the safety of your personal information. All sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and encrypted in our payment gateway providers database.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">5. Changes to This Policy</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;