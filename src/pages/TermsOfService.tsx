import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const TermsOfService: React.FC = () => {
  return (
    <LegalPageLayout 
      title="Terms of Service" 
      lastUpdated="June 15, 2024"
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          By accessing or using the services of Sree Krishna Agencies ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all the terms, you may not access the website or use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">2. Wholesale Services</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Our services are intended for wholesale buyers only. To place orders, you must provide valid business identification and meet our minimum order requirements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">3. Ordering and Payment</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          All orders are subject to product availability. We reserve the right to limit or cancel quantities purchased per person, per business, or per order. Prices are subject to change without notice.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Payment terms are net 7 days for approved wholesale accounts. New customers may be required to pay in advance until credit terms are established.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">4. Shipping and Delivery</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Shipping costs will be calculated at checkout and are the responsibility of the buyer. Delivery times are estimates only and not guaranteed. Risk of loss passes to you upon delivery.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">5. Returns and Refunds</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Due to the perishable nature of many of our products, returns are only accepted for damaged or defective goods. Claims must be made within 24 hours of delivery with photographic evidence.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">6. Governing Law</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the State of Maharashtra, India, without regard to its conflict of law provisions.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default TermsOfService;