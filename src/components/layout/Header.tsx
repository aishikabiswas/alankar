
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { categories } from '@/data/categories';

export default function Header() {
  const { itemCount } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="\logo.png" alt="logo" className='h-24 w-24 rounded-full' />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-primary transition-colors flex items-center">
              Shop
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden w-48 z-10">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-primary text-sm text-gray-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <Link to="/account" className="text-gray-700 hover:text-primary">
              <span className="sr-only">Account</span>
              <User className="h-6 w-6" />
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hover:text-primary">Login</Button>
            </Link>
          )}
          
          <Link to="/cart" className="relative text-gray-700 hover:text-primary">
            <span className="sr-only">Cart</span>
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-gray-100 pt-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Categories</p>
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block py-1 text-gray-700 hover:text-primary text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary py-2 border-t border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
