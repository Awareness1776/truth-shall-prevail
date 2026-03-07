import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import SiteFooter from "@/components/SiteFooter";
import EmailSignup from "@/components/EmailSignup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <EmailSignup />
      <SiteFooter />
    </div>
  );
};

export default Index;
