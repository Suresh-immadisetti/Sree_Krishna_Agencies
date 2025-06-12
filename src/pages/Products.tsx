import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Star,
  Filter,
  Grid,
  List,
  Search
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const { dispatch } = useCart();

  const categories = [
    "All", "Rice & Grains", "Pulses & Lentils", "Spices & Masalas", 
    "Cooking Oils", "Flour & Atta", "Sugar & Jaggery", "Tea & Coffee", 
    "Dry Fruits & Nuts", "Vegetables", "Salt & Seasonings"
  ];

  const products = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      category: "Rice & Grains",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      description: "Finest quality aged basmati rice with long grains and aromatic fragrance",
      price: "₹120/kg",
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: "Organic Toor Dal",
      category: "Pulses & Lentils",
      image: "https://images.pexels.com/photos/4552652/pexels-photo-4552652.jpeg",
      description: "Premium quality organic toor dal, rich in protein and nutrients",
      price: "₹85/kg",
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: "Red Chili Powder",
      category: "Spices & Masalas",
      image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
      description: "Pure red chili powder with perfect heat and vibrant color",
      price: "₹180/kg",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "Mustard Oil",
      category: "Cooking Oils",
      image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg",
      description: "Cold-pressed mustard oil, perfect for cooking and health benefits",
      price: "₹150/L",
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: "Wheat Flour (Atta)",
      category: "Flour & Atta",
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg",
      description: "Fresh ground wheat flour, perfect for making rotis and bread",
      price: "₹45/kg",
      rating: 4.8,
      inStock: true
    },
    {
      id: 6,
      name: "Organic Jaggery",
      category: "Sugar & Jaggery",
      image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
      description: "Pure organic jaggery, natural sweetener with health benefits",
      price: "₹65/kg",
      rating: 4.5,
      inStock: true
    },
    {
      id: 7,
      name: "Assam Tea Leaves",
      category: "Tea & Coffee",
      image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
      description: "Premium Assam tea leaves with rich flavor and aroma",
      price: "₹320/kg",
      rating: 4.9,
      inStock: true
    },
    {
      id: 8,
      name: "Premium Almonds",
      category: "Dry Fruits & Nuts",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
      description: "Fresh California almonds, rich in nutrients and perfect for health",
      price: "₹650/kg",
      rating: 4.8,
      inStock: true
    },
    {
      id: 9,
      name: "Non-Basmati Rice",
      category: "Rice & Grains",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      description: "High-quality non-basmati rice, perfect for daily meals",
      price: "₹65/kg",
      rating: 4.5,
      inStock: true
    },
    {
      id: 10,
      name: "Moong Dal",
      category: "Pulses & Lentils",
      image: "https://images.pexels.com/photos/4552652/pexels-photo-4552652.jpeg",
      description: "Premium moong dal, easy to digest and nutritious",
      price: "₹95/kg",
      rating: 4.7,
      inStock: true
    },
    {
      id: 11,
      name: "Turmeric Powder",
      category: "Spices & Masalas",
      image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
      description: "Pure turmeric powder with natural color and medicinal properties",
      price: "₹160/kg",
      rating: 4.8,
      inStock: true
    },
    {
      id: 12,
      name: "Sunflower Oil",
      category: "Cooking Oils",
      image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg",
      description: "Refined sunflower oil, light and healthy for cooking",
      price: "₹140/L",
      rating: 4.4,
      inStock: true
    },
    {
      id: 13,
      name: "Fresh Onions",
      category: "Vegetables",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
      description: "Fresh red onions, essential for Indian cooking",
      price: "₹25/kg",
      rating: 4.3,
      inStock: true
    },
    {
      id: 14,
      name: "Rock Salt",
      category: "Salt & Seasonings",
      image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
      description: "Pure rock salt, natural and healthy alternative to regular salt",
      price: "₹35/kg",
      rating: 4.6,
      inStock: true
    },
    {
      id: 15,
      name: "Cashews",
      category: "Dry Fruits & Nuts",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
      description: "Premium quality cashews, perfect for cooking and snacking",
      price: "₹750/kg",
      rating: 4.9,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('₹', '').split('/')[0]) - parseFloat(b.price.replace('₹', '').split('/')[0]);
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

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

  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our 
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Products</span>
          </h1>
          <p className="text-xl text-gray-600">
            Discover our wide range of premium quality grocery products at wholesale prices.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-colors ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-colors ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' : 'space-y-6'}>
          {sortedProducts.map((product) => (
            <div key={product.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`object-cover hover:scale-110 transition-transform duration-500 ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'}`}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </div>
                {product.inStock && (
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    In Stock
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1">
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

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;