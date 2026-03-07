import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VeteranMission from "@/components/VeteranMission";
import ImpactTracker from "@/components/ImpactTracker";
import Testimonials from "@/components/Testimonials";

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <VeteranMission />
        <ImpactTracker />
        <Testimonials />
      </div>
      <SiteFooter />
    </div>
  );
};

export default OurStoryPage;
