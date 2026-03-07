import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoSection from "@/components/VideoSection";

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <VideoSection />
      </div>
      <SiteFooter />
    </div>
  );
};

export default VideosPage;
