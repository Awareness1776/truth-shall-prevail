import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ManifestoSection from "@/components/ManifestoSection";
import VideoSection from "@/components/VideoSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <ProductShowcase />
      <ManifestoSection />
      <VideoSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
