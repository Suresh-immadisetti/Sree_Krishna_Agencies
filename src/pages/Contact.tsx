import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Users,
  Truck
} from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to place a wholesale order or have questions? We're here to help you with the best prices and service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our sales team</p>
              <a href="tel:+912224567890" className="text-orange-600 font-semibold hover:underline block">
                +916301949370
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your requirements</p>
              <a href="mailto:info@sreekrishnaagencies.in" className="text-orange-600 font-semibold hover:underline block">
                info@sreekrishnaagencies.in
              </a>
              <a href="mailto:sales@sreekrishnaagencies.in" className="text-orange-600 font-semibold hover:underline block">
                sales@sreekrishnaagencies.in
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick response guaranteed</p>
              <a href="https://wa.me/+916301949370" className="text-orange-600 font-semibold hover:underline">
                +916301949370
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  />
                  <input 
                    type="text" 
                    placeholder="Product Requirements" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold text-lg">
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Monday - Saturday</div>
                        <div className="text-gray-600">9:00 AM - 7:00 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Sunday</div>
                        <div className="text-gray-600">10:00 AM - 5:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">26+ Years of Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Fast & Reliable Delivery</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">24/7 Customer Support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">Need Bulk Orders?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Contact us for special wholesale pricing on bulk orders. We offer competitive rates for large quantities.
                  </p>
                  <a 
                    href="tel:+916301949370"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations with Maps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Location</span>
            </h2>
            <p className="text-xl text-gray-600">
              Visit our store for direct purchases and better deals.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12">
            {/* Main Store */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Store</h3>
                  <p className="text-orange-600 font-semibold">Hyderabad, Telangana</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong><br />
                  3-5-135, Hyderguda Cross Rd,<br />
                  Attapur, Gumma Konda Colony,<br />
                  Hyderabad, Telangana 500048
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 6301949370
                </p>
              </div>

              {/* Google Maps Embed for Main Store */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.262044447889!2d78.43158731487694!3d17.44890478804271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d5e6d8d5a5%3A0x3e3a8b3b3b3b3b3b!2sHyderguda%20Cross%20Rd%2C%20Attapur%2C%20Gumma%20Konda%20Colony%2C%20Hyderabad%2C%20Telangana%20500048!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;