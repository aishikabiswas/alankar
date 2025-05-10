
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Spiral Brass Earrings',
    description: 'Handcrafted spiral earrings made from premium brass material with intricate detailing.',
    price: 1299,
    category: 'brass',
    images: ['/images/products/brass-earrings-1.jpg', '/images/products/brass-earrings-2.jpg'],
    featured: true
  },
  {
    id: '2',
    name: 'Brass Statement Necklace',
    description: 'Bold statement necklace crafted with high-quality brass featuring geometric patterns.',
    price: 2499,
    category: 'brass',
    images: ['/images/products/brass-necklace.jpg']
  },
  {
    id: '3',
    name: 'Clay Hoop Earrings',
    description: 'Lightweight clay hoop earrings with hand-painted designs in earthy tones.',
    price: 999,
    category: 'clay',
    images: ['/images/products/clay-earrings.jpg'],
    featured: true
  },
  {
    id: '4',
    name: 'Clay Pendant Necklace',
    description: 'Unique pendant necklace made from natural clay with organic shapes.',
    price: 1899,
    category: 'clay',
    images: ['/images/products/clay-necklace.jpg']
  },
  {
    id: '5',
    name: 'Black Polish Stud Earrings',
    description: 'Minimalist stud earrings with sleek black polish finish.',
    price: 899,
    category: 'black-polish',
    images: ['/images/products/black-earrings.jpg'],
    featured: true
  },
  {
    id: '6',
    name: 'Black Polish Cuff Bracelet',
    description: 'Elegant cuff bracelet with black polish finish and subtle texture.',
    price: 1799,
    category: 'black-polish',
    images: ['/images/products/black-bracelet.jpg']
  },
  {
    id: '7',
    name: 'Oxidised Silver Jhumkas',
    description: 'Traditional jhumka earrings with oxidised silver finish and intricate patterns.',
    price: 1599,
    category: 'oxidised',
    images: ['/images/products/oxidised-jhumkas.jpg'],
    featured: true
  },
  {
    id: '8',
    name: 'Oxidised Layered Necklace',
    description: 'Layered oxidised silver necklace with vintage-inspired pendants.',
    price: 2299,
    category: 'oxidised',
    images: ['/images/products/oxidised-necklace.jpg']
  },
  {
    id: '9',
    name: 'Bohemian Tassel Earrings',
    description: 'Colorful tassel earrings with boho-chic appeal and lightweight design.',
    price: 1099,
    category: 'bohemian',
    images: ['/images/products/boho-earrings.jpg']
  },
  {
    id: '10',
    name: 'Bohemian Anklet with Bells',
    description: 'Traditional inspired anklet with small bells and colorful beads.',
    price: 899,
    category: 'bohemian',
    images: ['/images/products/boho-anklet.jpg'],
    featured: true
  },
  {
    id: '11',
    name: 'Canvas Tote Bag',
    description: 'Durable canvas tote bag with hand-embroidered designs and spacious interior.',
    price: 1499,
    category: 'tote-bags',
    images: ['/images/products/tote-bag-1.jpg'],
    featured: true
  },
  {
    id: '12',
    name: 'Printed Fabric Tote',
    description: 'Eco-friendly tote bag with unique block-printed patterns.',
    price: 1299,
    category: 'tote-bags',
    images: ['/images/products/tote-bag-2.jpg']
  }
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
