
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hashuli Set',
    description: 'Authentic Replica design with a touch of premium-ness',
    price: 899,
    category: 'replica',
    images: ['/images/products/replica-1.jpeg'],
    featured: true
  },
  {
    id: '2',
    name: 'Hashuli Statement Necklace Set',
    description: 'Bold statement necklace crafted with high-quality metal featuring authentic patterns.',
    price: 949,
    category: 'replica',
    images: ['/images/products/replica-2.jpeg']
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
  {
    id: '10',
    name: 'Replica कबूतर earrings',
    description: 'Authentic, Rare, Yours.',
    price: 129,
    category: 'replica',
    images: ['/images/products/replica-3.jpg']
  },
  {
    id: '11',
    name: 'Replica ঈগল earrings',
    description: 'Authentic, Rare, Yours.',
    price: 179,
    category: 'replica',
    images: ['/images/products/replica-4.jpg']
  },
  {
    id: '12',
    name: 'Replica ছাতা earrings',
    description: 'Authentic, Rare, Yours.',
    price: 129,
    category: 'replica',
    images: ['/images/products/replica-5.jpg']
  },
  {
    id: '13',
    name: 'Replica कबूतर-PEACE earrings',
    description: 'Authentic, Rare, Yours.',
    price: 199,
    category: 'replica',
    images: ['/images/products/replica-6.jpg']
  },
  {
    id: '14',
    name: 'Replica झुमके earrings',
    description: 'Authentic, Rare, Yours.',
    price: 129,
    category: 'replica',
    images: ['/images/products/replica-7.jpg']
  },
  {
    id: '15',
    name: 'Replica crescent earrings',
    description: 'Authentic, Rare, Yours.',
    price: 199,
    category: 'replica',
    images: ['/images/products/replica-8.jpg']
  },
  {
    id: '16',
    name: 'Replica abstract earrings',
    description: 'Authentic, Rare, Yours.',
    price: 179,
    category: 'replica',
    images: ['/images/products/replica-9.jpg']
  },
  {
    id: '17',
    name: 'Replica मछली earrings',
    description: 'Authentic, Rare, Yours.',
    price: 149,
    category: 'replica',
    images: ['/images/products/replica-10.jpg']
  },
  {
    id: '18',
    name: 'Replica ঘট earrings',
    description: 'Authentic, Rare, Yours.',
    price: 149,
    category: 'replica',
    images: ['/images/products/replica-11.jpg']
  },
  {
    id: '19',
    name: 'Replica royal earrings',
    description: 'Authentic, Rare, Yours.',
    price: 249,
    category: 'replica',
    images: ['/images/products/replica-12.jpg']
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
