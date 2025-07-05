import React from 'react';
import { 
  Users,
  Award,
  Truck,
  Shield,
  Target,
  Heart,
  CheckCircle
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: "1+", label: "Years Experience", description: "Serving since 2025" },
    { icon: Users, value: "500+", label: "Satisfied Clients", description: "Across Telangana" },
    { icon: Truck, value: "1000+", label: "Products Delivered", description: "Monthly deliveries" },
    { icon: Shield, value: "100%", label: "Quality Assured", description: "Premium products only" }
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Commitment",
      description: "We meticulously source products directly from certified farmers and manufacturers, implementing rigorous quality checks at every stage."
    },
    {
      icon: Heart,
      title: "Customer-Centric Approach",
      description: "Building partnerships through transparent pricing, reliable service, and personalized solutions tailored to each client's needs."
    },
    {
      icon: CheckCircle,
      title: "Operational Excellence",
      description: "Modern infrastructure and efficient processes ensure consistent product availability and timely deliveries."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Sree Krishna Agencies
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2025, we are rapidly becoming Hyderabad's preferred wholesale partner for premium groceries, 
              spices, and food commodities with a commitment to quality and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg" 
                alt="About Sree Krishna Agencies" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Our 
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established in 2025, Sree Krishna Agencies was born from a vision to revolutionize wholesale grocery 
                distribution in Hyderabad. Our founder recognized the need for a reliable partner that combines 
                quality products with exceptional service in the wholesale market.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In our first year of operation, we've already made significant strides, building a network of 
                trusted suppliers and a growing base of satisfied customers. Our modern procurement and distribution 
                systems ensure we meet the evolving needs of retailers, restaurants, and institutional buyers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Specializing in premium groceries, spices, pulses, and cooking essentials, we've implemented 
                stringent quality control measures and inventory management systems that set us apart in the 
                competitive Hyderabad market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of our business that drives our daily operations and customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Advantages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rigorous Quality Standards</h3>
                  <p className="text-gray-600">Every product undergoes multiple quality checks before reaching our warehouse, ensuring only the best reaches your business.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing Structure</h3>
                  <p className="text-gray-600">Our lean operations and direct sourcing enable us to offer market-leading prices without compromising on quality.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Distribution Network</h3>
                  <p className="text-gray-600">Strategically located storage facilities and efficient logistics ensure on-time deliveries across Hyderabad.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Account Management</h3>
                  <p className="text-gray-600">Each client receives personalized service from our experienced team, with tailored solutions for your specific needs.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg" 
                alt="Quality Assurance" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">1+ Year</div>
                <div className="text-sm opacity-90">of Trust Building</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;