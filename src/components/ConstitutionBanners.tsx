import bannerInfringed from "@/assets/banner-infringed.jpg";
import bannerConsent from "@/assets/banner-consent.jpg";
import bannerLiberty from "@/assets/banner-liberty.jpg";

const banners = [
  {
    image: bannerInfringed,
    constitutionalText: "SHALL NOT BE INFRINGED",
    source: "2nd Amendment",
    slogan: "They keep chipping away. We keep standing up.",
  },
  {
    image: bannerConsent,
    constitutionalText: "CONSENT OF THE GOVERNED",
    source: "Declaration of Independence",
    slogan: "Nobody asked us. Nobody ever does. That ends now.",
  },
  {
    image: bannerLiberty,
    constitutionalText: "SECURE THE BLESSINGS OF LIBERTY",
    source: "Preamble to the Constitution",
    slogan: "Liberty isn't given. It's defended — generation after generation.",
  },
];

const slogans = [
  { phrase: "NO TAXATION WITHOUT REPRESENTATION", twist: "Still paying. Still unheard." },
  { phrase: "A WELL-REGULATED MILITIA", twist: "The people ARE the militia." },
  { phrase: "LIFE, LIBERTY & THE PURSUIT", twist: "They're taking all three." },
  { phrase: "TO PROVIDE FOR THE COMMON DEFENSE", twist: "Defending themselves — not us." },
  { phrase: "ESTABLISH JUSTICE", twist: "Justice for who? Not for us." },
  { phrase: "DOMESTIC TRANQUILITY", twist: "There is no peace without accountability." },
];

const ConstitutionBanners = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Words That Built A Nation
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            THEIR WORDS. OUR FIGHT.
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            The Founders wrote the playbook for freedom. Every line of the
            Constitution is a weapon against tyranny — if we choose to use it.
          </p>
        </div>

        {/* Big banners */}
        <div className="space-y-8 mb-20">
          {banners.map((banner) => (
            <div
              key={banner.constitutionalText}
              className="relative overflow-hidden rounded border border-border group"
            >
              <img
                src={banner.image}
                alt={banner.constitutionalText}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground tracking-wider mb-2">
                    "{banner.constitutionalText}"
                  </p>
                  <p className="font-heading text-xs tracking-[0.3em] text-primary uppercase mb-3">
                    — {banner.source}
                  </p>
                  <p className="font-body text-sm md:text-base text-muted-foreground italic">
                    {banner.slogan}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Constitutional slogans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slogans.map((item) => (
            <div
              key={item.phrase}
              className="bg-card border border-border p-8 rounded text-center group hover:border-primary transition-colors duration-500"
            >
              <p className="font-display text-lg md:text-xl text-foreground mb-3 tracking-wider leading-tight">
                "{item.phrase}"
              </p>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-3" />
              <p className="font-body text-sm text-primary italic font-medium">
                {item.twist}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width call to action quote */}
        <div className="mt-20 py-16 border-t border-b border-primary text-center">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight max-w-5xl mx-auto mb-6">
            "WHEN THE PEOPLE FEAR THE GOVERNMENT,
            <br />
            THERE IS <span className="text-gradient-revolution">TYRANNY</span>.
            <br />
            WHEN THE GOVERNMENT FEARS THE PEOPLE,
            <br />
            THERE IS <span className="text-gradient-revolution">LIBERTY</span>."
          </p>
          <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase">
            — Thomas Jefferson
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionBanners;
