
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Alankar</h3>
            <p className="text-gray-300 mb-4">
              Handcrafted jewelry and accessories inspired by tradition and reimagined for the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/brass" className="text-gray-300 hover:text-primary transition-colors">
                  Brass Collection
                </Link>
              </li>
              <li>
                <Link to="/category/clay" className="text-gray-300 hover:text-primary transition-colors">
                  Clay Creations
                </Link>
              </li>
              <li>
                <Link to="/category/black-polish" className="text-gray-300 hover:text-primary transition-colors">
                  Black Polish
                </Link>
              </li>
              <li>
                <Link to="/category/oxidised" className="text-gray-300 hover:text-primary transition-colors">
                  Oxidised Silver
                </Link>
              </li>
              <li>
                <Link to="/category/bohemian" className="text-gray-300 hover:text-primary transition-colors">
                  Bohemian Collection
                </Link>
              </li>
              <li>
                <Link to="/category/tote-bags" className="text-gray-300 hover:text-primary transition-colors">
                  Tote Bags
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Sign up for our newsletter to receive updates and special offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alankar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
