import { Quote, Shield, Flame, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const constitutionQuotes = [
  {
    text: "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility...",
    source: "Preamble to the Constitution",
  },
  {
    text: "Congress shall make no law... abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble.",
    source: "First Amendment",
  },
  {
    text: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated.",
    source: "Fourth Amendment",
  },
];

const pillars = [
  {
    icon: Shield,
    title: "Expose The Corruption",
    description:
      "Career politicians have turned public service into personal profit. Lobbyists write the laws. Corporations buy the votes. The parasites feeding off our government answer to donors — not to you.",
  },
  {
    icon: Flame,
    title: "Reclaim What's Ours",
    description:
      "This government was built BY the people, FOR the people. Somewhere along the way, it was hijacked. Unelected bureaucrats, backroom deals, and trillion-dollar sellouts have hollowed it from the inside. It's time to take it back.",
  },
  {
    icon: Users,
    title: "Unite & Rise",
    description:
      "They divided us so we'd forget who the real enemy is. Left vs. right is their game — not ours. When We The People stand together, no amount of corruption can survive the light.",
  },
];

const ManifestoSection = () => {
  return (
    <section id="the-movement" className="py-24 bg-secondary">
      <div className="container px-4">
        {/* Manifesto intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Why We Stand
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8">
            THE MANIFESTO
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            This isn't fashion. This is a statement. When the people you elected
            forget who they serve, when your rights get traded for power plays,
            when the Constitution becomes a suggestion instead of the law —
            it's time to make noise.
          </p>
          <p className="font-body text-lg text-foreground leading-relaxed font-medium">
            We The People have always been the backbone of this nation. And we've
            had enough of silence. Every hoodie, every tee, every sticker is a
            declaration:{" "}
            <span className="text-primary">
              We remember our rights, and we will defend them.
            </span>
          </p>
        </div>

        {/* Take It Back banner */}
        <div className="relative my-20 py-16 px-6 border border-primary rounded bg-card overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><text x=%220%22 y=%2230%22 font-size=%2220%22 fill=%22white%22>★</text></svg>')] bg-repeat" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="font-display text-xs tracking-[0.4em] text-primary mb-4 uppercase">
              Enough Is Enough
            </p>
            <h3 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              TAKE OUR GOVERNMENT BACK
              <br />
              <span className="text-gradient-revolution">
                FROM THE PARASITES WITHIN
              </span>
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              They've embedded themselves into every branch — draining our
              treasury, shredding our liberties, and selling out our future to
              the highest bidder. They don't represent us. They exploit us.
              Generations of corruption have turned "public servants" into a
              ruling class that the Founders would have never tolerated.
            </p>
            <p className="font-heading text-lg text-foreground tracking-wide mb-8">
              "Whenever any Form of Government becomes destructive of these ends,
              it is the{" "}
              <span className="text-primary font-bold">
                Right of the People to alter or to abolish it.
              </span>
              "
              <span className="block text-xs text-muted-foreground mt-2 tracking-[0.3em]">
                — DECLARATION OF INDEPENDENCE
              </span>
            </p>
            <Button variant="revolution" size="lg">
              Join The Fight
            </Button>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card border border-border p-8 rounded shadow-card-revolution text-center group hover:border-primary transition-colors duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="text-primary h-7 w-7" />
              </div>
              <h4 className="font-display text-xl text-foreground mb-3">
                {pillar.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Constitutional quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {constitutionQuotes.map((quote) => (
            <div
              key={quote.source}
              className="bg-card border border-border p-8 rounded shadow-card-revolution"
            >
              <Quote className="text-primary mb-4 h-8 w-8" />
              <p className="font-body text-foreground italic mb-4 leading-relaxed">
                "{quote.text}"
              </p>
              <p className="font-display text-xs tracking-widest text-primary uppercase">
                — {quote.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
