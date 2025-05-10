
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  const { addItem } = useCart();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Products</h2>
        <p className="text-gray-600 text-center mb-10">Our most popular curated selections</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm product-card">
              <Link to={`/product/${product.id}`} className="block relative aspect-square bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">
                  <Link to={`/product/${product.id}`} className="hover:text-purple transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{formatPrice(product.price)}</span>
                  <Button 
                    onClick={() => addItem(product)}
                    variant="outline" 
                    size="sm"
                    className="text-purple border-purple hover:bg-purple hover:text-white transition-colors"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
