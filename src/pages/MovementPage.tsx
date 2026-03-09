import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ManifestoSection from "@/components/ManifestoSection";
import WhatWeStandFor from "@/components/WhatWeStandFor";
import ConstitutionBanners from "@/components/ConstitutionBanners";
import SupportTheMovement from "@/components/SupportTheMovement";
import YouAreNotAlone from "@/components/YouAreNotAlone";
import YourRole from "@/components/YourRole";
import EmailSignup from "@/components/EmailSignup";

const MovementPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <ManifestoSection />
        <WhatWeStandFor />
        <ConstitutionBanners />
        <SupportTheMovement />
        <YouAreNotAlone />
        <YourRole />
        <EmailSignup />
      </div>
      <SiteFooter />
    </div>
  );
};

export default MovementPage;
