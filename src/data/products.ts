
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Spiral Brass Earrings',
    description: 'Handcrafted spiral earrings made from premium brass material with intricate detailing.',
    price: 1299,
    category: 'replica',
    images: ['/images/products/brass-earrings-1.jpg', '/images/products/brass-earrings-2.jpg'],
    featured: true
  },
  {
    id: '2',
    name: 'Brass Statement Necklace',
    description: 'Bold statement necklace crafted with high-quality brass featuring geometric patterns.',
    price: 2499,
    category: 'replica',
    images: ['/images/products/brass-necklace.jpg']
  },
  {
    id: '3',
    name: 'Clay Swastik Brooch Pin',
    description: 'Lightweight clay brooch with hand-painted designs in earthy tones.',
    price: 149,
    category: 'clay',
    images: ['/images/products/clay-brotch-1.jpg'],
    featured: true
  },
  {
    id: '4',
    name: 'Clay Bangali-Ana Brooch Pin',
    description: 'Unique Bangali-coded brooch made from natural clay with organic shapes.',
    price: 149,
    category: 'clay',
    images: ['/images/products/clay-brotch-2.jpg']
  },
  {
    id: '5',
    name: 'Clay B-Buzz Brooch Pin',
    description: 'Sweet as Honey, straight out of a hive; made from natural clay ',
    price: 149,
    category: 'clay',
    images: ['/images/products/clay-brotch-3.jpg']
  },
  {
    id: '6',
    name: 'Clay ক-for-Kolkata Brooch pin',
    description: 'Aesthetic Kolkata brooch with elements of Howrah bridge, made with love.',
    price: 149,
    category: 'clay',
    images: ['/images/products/clay-brotch-4.jpg']
  },
  {
    id: '7',
    name: 'Clay Kulo w Swastik Brooch pin',
    description: 'Elements of Bangla Heritage, in a single pin.',
    price: 149,
    category: 'clay',
    images: ['/images/products/clay-brotch-5.jpg']
  },
  {
    id: '8',
    name: 'Clay Taxi Brooch pin',
    description: 'The good old yellow taxi, flaunt it with grace and heritage',
    price: 149,
    category: 'clay',
    images: ['/images/products/clay-brotch-6.jpg']
  },
  {
    id: '9',
    name: 'Clay Flower Brooch pin',
    description: 'If he does not buy you flowers, wear your own flowers like a queen',
    price: 149,
    category: 'clay',
    images: ['/images/products/clay-brotch-7.jpg']
  },
  
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
