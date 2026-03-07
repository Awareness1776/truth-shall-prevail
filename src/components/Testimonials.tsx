import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus R.",
    role: "U.S. Marine Corps Veteran",
    stars: 5,
    text: "I served two tours in Afghanistan. When I came home, nobody gave a damn. This brand actually puts money where their mouth is. I got my 'Had Enough' hoodie and found out they donated to the same veteran housing program that helped me get back on my feet. This is the real deal.",
    product: "Had Enough Hoodie",
    verified: true,
  },
  {
    name: "Sarah K.",
    role: "Army Spouse & Supporter",
    stars: 5,
    text: "My husband did 3 deployments and came back a different person. The VA put him on a 6-month waitlist for counseling. When I saw WTP was funding veteran mental health directly, I bought everything in the store. These people understand what we're going through.",
    product: "Liberty or Death Hoodie",
    verified: true,
  },
  {
    name: "James T.",
    role: "U.S. Navy Veteran",
    stars: 5,
    text: "Finally a brand that isn't just slapping a flag on a shirt to make a buck. The Article V tee is my daily wear now. People stop me and ask about it. It starts real conversations about what's happening to this country. That's worth more than any hoodie.",
    product: "Article V Tee",
    verified: true,
  },
  {
    name: "Diana M.",
    role: "Teacher & Constitutional Advocate",
    stars: 5,
    text: "I teach government to high schoolers. These designs use REAL constitutional language in a way that makes kids actually care. I bought the sticker pack for my classroom and the poster is on my wall. Education through fashion — genius.",
    product: "Sticker Pack & RISE Poster",
    verified: true,
  },
  {
    name: "Robert L.",
    role: "Retired Army Sergeant",
    stars: 5,
    text: "I was sleeping in my car outside the Capitol building for 3 weeks protesting veteran benefit cuts. A stranger walked up wearing the 'We The People Have Had Enough' tee and handed me a hot meal. He said he found our cause through this brand. That's impact you can't fake.",
    product: "Had Enough Tee",
    verified: true,
  },
  {
    name: "Chris & Alicia W.",
    role: "Gold Star Family",
    stars: 5,
    text: "We lost our son in 2019. Congress sent a letter. WTP sent a donation to the foundation in his name and a care package to our family. They didn't have to do that. They didn't even tell anyone they did it. We found out through the foundation. That's character.",
    product: "Defend The Constitution Hoodie",
    verified: true,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Real People. Real Impact.
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            VOICES OF THE MOVEMENT
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Don't take our word for it. Hear from the veterans, families, and
            patriots who wear the mission every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded p-6 flex flex-col shadow-card-revolution hover:border-primary transition-colors duration-500"
            >
              <Quote className="text-primary h-6 w-6 mb-4 shrink-0" />
              <p className="font-body text-sm text-foreground leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="font-display text-sm text-foreground">
                  {t.name}
                </p>
                <p className="font-heading text-xs text-muted-foreground tracking-wide">
                  {t.role}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-body text-xs text-primary">
                    Purchased: {t.product}
                  </span>
                  {t.verified && (
                    <span className="font-display text-[10px] tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded">
                      VERIFIED
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
