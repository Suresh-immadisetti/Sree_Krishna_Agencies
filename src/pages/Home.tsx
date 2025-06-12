import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight,
  Users,
  Award,
  Truck,
  Shield,
  Star
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const { dispatch } = useCart();

  const categories = [
    { name: "Rice & Grains", icon: "🌾", count: 25, description: "Premium Basmati, Non-Basmati Rice, Wheat, Barley" },
    { name: "Pulses & Lentils", icon: "🫘", count: 18, description: "Toor Dal, Moong Dal, Chana Dal, Urad Dal" },
    { name: "Spices & Masalas", icon: "🌶️", count: 35, description: "Turmeric, Red Chili, Coriander, Garam Masala" },
    { name: "Cooking Oils", icon: "🫒", count: 12, description: "Mustard Oil, Sunflower Oil, Coconut Oil" },
    { name: "Flour & Atta", icon: "🌾", count: 15, description: "Wheat Flour, Gram Flour, Rice Flour, Maida" },
    { name: "Sugar & Jaggery", icon: "🍯", count: 8, description: "White Sugar, Brown Sugar, Organic Jaggery" },
    { name: "Tea & Coffee", icon: "☕", count: 20, description: "Assam Tea, Green Tea, Coffee Beans, Masala Tea" },
    { name: "Dry Fruits & Nuts", icon: "🥜", count: 22, description: "Almonds, Cashews, Dates, Raisins, Walnuts" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      category: "Rice & Grains",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      description: "Finest quality aged basmati rice with long grains and aromatic fragrance",
      price: "₹120/kg",
      rating: 4.8
    },
    {
      id: 2,
      name: "Organic Toor Dal",
      category: "Pulses & Lentils",
      image: "https://images.pexels.com/photos/4552652/pexels-photo-4552652.jpeg",
      description: "Premium quality organic toor dal, rich in protein and nutrients",
      price: "₹85/kg",
      rating: 4.9
    },
    {
      id: 3,
      name: "Red Chili Powder",
      category: "Spices & Masalas",
      image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
      description: "Pure red chili powder with perfect heat and vibrant color",
      price: "₹180/kg",
      rating: 4.7
    },
    {
      id: 4,
      name: "Mustard Oil",
      category: "Cooking Oils",
      image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg",
      description: "Cold-pressed mustard oil, perfect for cooking and health benefits",
      price: "₹150/L",
      rating: 4.6
    }
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Award, value: "26+", label: "Years Experience" },
    { icon: Truck, value: "10000+", label: "Products Delivered" },
    { icon: Shield, value: "100%", label: "Quality Assured" }
  ];

  const addToCart = (product: any) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      }
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-red-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Premium Quality
                  <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Grocery Products
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your trusted wholesale partner for premium groceries, food products, spices, grains, and commodities. 
                  Serving Mumbai and Maharashtra since 1998 with guaranteed quality and competitive prices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products"
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <span>Shop by Categories</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold text-lg text-center"
                >
                  Contact Us
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/4552652/pexels-photo-4552652.jpeg" 
                  alt="Quality Grocery Products" 
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our extensive range of premium grocery products organized by categories for easy shopping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to="/products"
                className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-100 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <p className="text-orange-600 font-semibold mb-4">{category.count} Products</p>
                  <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium">
                    View Products
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular high-quality grocery products, carefully sourced and delivered fresh to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;