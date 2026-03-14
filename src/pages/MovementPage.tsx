import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ManifestoSection from "@/components/ManifestoSection";
import WhatWeStandFor from "@/components/WhatWeStandFor";
import ConstitutionBanners from "@/components/ConstitutionBanners";
import SupportTheMovement from "@/components/SupportTheMovement";
import YouAreNotAlone from "@/components/YouAreNotAlone";
import YourRole from "@/components/YourRole";
import EmailSignup from "@/components/EmailSignup";
import heroBg from "@/assets/hero-bg.jpg";

const MovementPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        {/* Hero Banner */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero-overlay)" }}
          />
          <div className="relative z-10 container text-center px-4 animate-fade-up">
            <p className="font-heading text-sm md:text-base tracking-[0.3em] text-primary mb-4 uppercase">
              The Movement
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-none text-foreground mb-6">
              TRUTH SHALL
              <br />
              <span className="text-gradient-revolution">PREVAIL</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              A movement built on awareness, truth, and the courage to question power.
            </p>
          </div>
        </section>

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
