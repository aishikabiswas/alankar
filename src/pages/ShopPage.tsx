
import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { categories } from '@/data/categories';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our complete collection of handcrafted jewelry and accessories, 
            each piece uniquely designed to add a touch of elegance to your style.
          </p>
        </div>
      </div>
      
      {/* Category filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
              ${selectedCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Items
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${selectedCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-600">No products found in this category.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
