import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/layout/HeroSection';
import AboutUsSection from '@/components/layout/AboutUsSection';
import FeaturedServices from '@/components/layout/FeaturedServices';
import ClearNailSection from '@/components/layout/ClearNailSection';
//import ServiceProcessSection from '@/components/layout/ServiceProcessSection';
import TestimonialsSection from '@/components/layout/TestimonialsSection';
import ContactSection from '@/components/layout/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <FeaturedServices />
      <ClearNailSection />
      {/* <ServiceProcessSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
