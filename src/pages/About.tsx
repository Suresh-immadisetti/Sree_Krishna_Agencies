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
    { icon: Award, value: "26+", label: "Years Experience", description: "Serving since 1998" },
    { icon: Users, value: "5000+", label: "Satisfied Clients", description: "Across Maharashtra" },
    { icon: Truck, value: "10000+", label: "Products Delivered", description: "Monthly deliveries" },
    { icon: Shield, value: "100%", label: "Quality Assured", description: "Premium products only" }
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We source only the finest products directly from trusted farmers and manufacturers, ensuring every item meets our strict quality standards."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Our customers are at the heart of everything we do. We build lasting relationships through exceptional service and competitive pricing."
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "With over 26 years of experience, we've built a reputation for consistent quality, timely delivery, and dependable service."
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
                Ramesh Trading Company
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established in 1998, we have been Mumbai's trusted wholesale partner for premium quality groceries, 
              food products, spices, grains, and commodities for over 26 years.
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
                alt="About Ramesh Trading Company" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Our 
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1998 by Mr. Ramesh Patel, Ramesh Trading Company began as a small grocery wholesale business 
                in Mumbai's bustling Crawford Market. What started as a vision to provide quality food products at 
                fair prices has grown into one of Maharashtra's most trusted wholesale suppliers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the past 26 years, we have built strong relationships with farmers, manufacturers, and suppliers 
                across India, ensuring we can offer the finest quality products at competitive wholesale rates. Our 
                commitment to excellence has earned us the trust of over 5,000 satisfied customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we specialize in providing premium quality groceries, spices, grains, pulses, oils, and 
                commodities to retailers, restaurants, hotels, and businesses across Mumbai and Maharashtra. Our 
                modern warehouse facilities and efficient distribution network ensure fresh products reach our 
                customers on time, every time.
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
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and have made us a trusted name in the wholesale grocery industry.
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
              Why Choose 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality Products</h3>
                  <p className="text-gray-600">We source directly from trusted farmers and manufacturers, ensuring only the finest quality products reach our customers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Wholesale Pricing</h3>
                  <p className="text-gray-600">Our strong supplier relationships and efficient operations allow us to offer the best wholesale prices in the market.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Supply Chain</h3>
                  <p className="text-gray-600">With our modern warehouse facilities and efficient distribution network, we ensure consistent supply and timely delivery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Customer Support</h3>
                  <p className="text-gray-600">Our experienced team provides personalized service and expert advice to help you make the best purchasing decisions.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg" 
                alt="Quality Assurance" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">26+ Years</div>
                <div className="text-sm opacity-90">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;