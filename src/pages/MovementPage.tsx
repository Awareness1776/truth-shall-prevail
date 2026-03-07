import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ManifestoSection from "@/components/ManifestoSection";
import ConstitutionBanners from "@/components/ConstitutionBanners";
import EmailSignup from "@/components/EmailSignup";

const MovementPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <ManifestoSection />
        <ConstitutionBanners />
        <EmailSignup />
      </div>
      <SiteFooter />
    </div>
  );
};

export default MovementPage;
