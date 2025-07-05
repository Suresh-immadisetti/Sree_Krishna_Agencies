import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const WholesaleTerms: React.FC = () => {
  return (
    <LegalPageLayout 
      title="Wholesale Terms" 
      lastUpdated="June 15, 2024"
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">1. Wholesale Account Requirements</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          To qualify for a wholesale account with Sree Krishna Agencies, you must:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li className="leading-relaxed">Be a registered business with valid GST identification</li>
          <li className="leading-relaxed">Have a physical business address (no PO boxes)</li>
          <li className="leading-relaxed">Agree to our minimum order amount of ₹5,000 per order</li>
          <li className="leading-relaxed">Provide trade references upon request</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">2. Pricing and Discounts</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          All prices are in Indian Rupees (₹) and exclusive of GST unless otherwise stated. Wholesale pricing is available only to approved account holders and may vary based on:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li className="leading-relaxed">Order volume</li>
          <li className="leading-relaxed">Product category</li>
          <li className="leading-relaxed">Customer loyalty tier</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">3. Order Placement</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Orders can be placed through our website, by email, or by phone during business hours. For first-time orders, payment in advance may be required until credit terms are established.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">4. Payment Terms</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Approved wholesale accounts enjoy net 7 day payment terms. Late payments may result in suspension of account privileges. We accept:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li className="leading-relaxed">Bank transfers (NEFT/RTGS/IMPS)</li>
          <li className="leading-relaxed">Cheques (subject to clearance)</li>
          <li className="leading-relaxed">Online payments via our secure payment gateway</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">5. Product Availability</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          While we strive to maintain adequate stock levels, certain products may be subject to seasonal availability or market fluctuations. We reserve the right to substitute products of equal or greater value when necessary.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">6. Volume Discounts</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Additional discounts may be available for bulk purchases exceeding certain quantities. Please contact our sales team for customized pricing on large orders.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default WholesaleTerms;