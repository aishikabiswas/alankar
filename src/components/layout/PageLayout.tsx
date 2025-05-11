
import Header from './Header';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';
import { Phone } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Sticky WhatsApp Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary shadow-lg py-3 z-40">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center text-white">
            <Phone className="h-5 w-5 mr-2" />
            <p className="font-medium">To order, contact on WhatsApp: <a href="https://wa.me/+918013061022" className="underline">+91 8013061022</a></p>
          </div>
        </div>
      </div>
      
      <Toaster />
    </div>
  );
}
