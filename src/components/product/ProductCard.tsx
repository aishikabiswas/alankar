
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  
  return (
    <div className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm product-card">
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
  );
}
