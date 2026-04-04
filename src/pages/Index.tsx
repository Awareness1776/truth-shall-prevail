import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ProductShowcase from "@/components/ProductShowcase";
import VeteranMission from "@/components/VeteranMission";
import WhatWeStandFor from "@/components/WhatWeStandFor";
import Testimonials from "@/components/Testimonials";
import ImpactTracker from "@/components/ImpactTracker";
import ConstitutionBanners from "@/components/ConstitutionBanners";
import YourRole from "@/components/YourRole";
import SupportTheMovement from "@/components/SupportTheMovement";
import YouAreNotAlone from "@/components/YouAreNotAlone";
import EmailSignup from "@/components/EmailSignup";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <ManifestoSection />
      <ImpactTracker />
      <ProductShowcase />
      <WhatWeStandFor />
      <ConstitutionBanners />
      <VeteranMission />
      <Testimonials />
      <SupportTheMovement />
      <YouAreNotAlone />
      <YourRole />
      <EmailSignup />
      <SiteFooter />
    </div>
  );
};

export default Index;
