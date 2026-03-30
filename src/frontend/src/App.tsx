import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import BrandsSection from "./components/BrandsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import ReviewsSection from "./components/ReviewsSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUs />
        <BrandsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
