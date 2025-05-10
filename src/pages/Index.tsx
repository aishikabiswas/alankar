
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      
      <section className="py-16 bg-gradient-to-r from-purple-light/20 to-purple/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Handcrafted with Love</h2>
          <p className="text-lg text-gray-700 mb-8">
            Each piece in our collection is meticulously crafted by skilled artisans, combining traditional techniques with modern designs to create timeless pieces that tell a story.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Artisanal Quality</h3>
              <p className="text-gray-600">Each piece is handcrafted with attention to detail and quality craftsmanship.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">We ethically source all our materials from local suppliers to support communities.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Unique Designs</h3>
              <p className="text-gray-600">Our designs are unique and made to express your personal style and individuality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
