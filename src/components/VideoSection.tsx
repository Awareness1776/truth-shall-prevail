import { Play, X } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    title: "The First Amendment Under Attack",
    description: "Congressman exposes the censorship industrial complex targeting free speech.",
    thumbnail: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/7I1duV_m9xg?autoplay=1&rel=0",
  },
  {
    title: "The Bill of Rights Explained",
    description: "Why every American needs to understand the rights the founders fought and died for.",
    thumbnail: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/3F9A9ih4z1Q?autoplay=1&rel=0",
  },
  {
    title: "Veterans Abandoned by Congress",
    description: "The broken promises to those who served — and how we can fix it.",
    thumbnail: "https://images.unsplash.com/photo-1591848478625-de43268e6fb8?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/BqmFrmIOlMI?autoplay=1&rel=0",
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="videos" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            TikTok • YouTube • Reels
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            THE FEED
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Share our videos. Spread the message. The truth doesn't need a filter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={video.title} className="group">
              <div className="relative overflow-hidden rounded aspect-video mb-4 border border-border">
                {activeVideo === index ? (
                  <>
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-2 right-2 z-10 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <div
                    className="cursor-pointer w-full h-full"
                    onClick={() => setActiveVideo(index)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-revolution group-hover:scale-110 transition-transform">
                        <Play className="text-primary-foreground h-7 w-7 ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="font-display text-lg text-foreground mb-1">
                {video.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
