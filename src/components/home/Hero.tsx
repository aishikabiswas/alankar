
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSlide {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: HeroSlide[] = [
  {
    title: 'Handcrafted Elegance',
    subtitle: 'Discover our exquisite new brass collection for the modern woman',
    buttonText: 'Shop Now',
    buttonLink: '/category/brass',
    image: '/images/hero/hero-1.jpg'
  },
  {
    title: 'Bohemian Spirit',
    subtitle: 'Express your free spirit with our bohemian jewelry collection',
    buttonText: 'Explore',
    buttonLink: '/category/bohemian',
    image: '/images/hero/hero-2.jpg'
  },
  {
    title: 'Artisanal Clay',
    subtitle: 'Each piece tells a story, handcrafted with love and precision',
    buttonText: 'View Collection',
    buttonLink: '/category/clay',
    image: '/images/hero/hero-3.jpg'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <Link to={slide.buttonLink}>
                <Button size="lg" className="bg-purple-light hover:bg-purple text-white">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-purple-light' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
