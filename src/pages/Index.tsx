import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import VeteranMission from "@/components/VeteranMission";
import ConstitutionBanners from "@/components/ConstitutionBanners";
import ManifestoSection from "@/components/ManifestoSection";
import VideoSection from "@/components/VideoSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <ProductShowcase />
      <VeteranMission />
      <ConstitutionBanners />
      <ManifestoSection />
      <VideoSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
