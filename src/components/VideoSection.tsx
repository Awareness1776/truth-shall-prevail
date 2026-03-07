import { Play } from "lucide-react";

const videos = [
  {
    title: "The Awakening",
    description: "People across America are waking up. This is their story.",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  },
  {
    title: "Know Your Rights",
    description: "The Constitution isn't a suggestion. Learn what they don't teach you.",
    thumbnail: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop",
  },
  {
    title: "Voices of Change",
    description: "Real people. Real stories. The revolution is happening now.",
    thumbnail: "https://images.unsplash.com/photo-1591848478625-de43268e6fb8?w=600&h=400&fit=crop",
  },
];

const VideoSection = () => {
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
          {videos.map((video) => (
            <div
              key={video.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded aspect-video mb-4 border border-border">
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
