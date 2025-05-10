
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/product/ProductCard';
import { Product, Category } from '@/types';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  
  useEffect(() => {
    if (!id) return;
    
    // Find the category
    const foundCategory = categories.find(cat => cat.id === id);
    if (foundCategory) {
      setCategory(foundCategory);
    }
    
    // Get products for this category
    const categoryProducts = getProductsByCategory(id);
    setProducts(categoryProducts);
    
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [id]);
  
  return (
    <div>
      {/* Hero section for the category */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${category?.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">{category?.name}</h1>
            <p className="text-lg">{category?.description}</p>
          </div>
        </div>
      </div>
      
      {/* Products grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-600">No products found in this category.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
