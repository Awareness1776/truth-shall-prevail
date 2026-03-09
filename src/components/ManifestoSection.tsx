import { Quote, Shield, Flame, Users } from "lucide-react";

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
    title: "Awareness",
    description:
      "A society that stops asking questions slowly loses its liberty. A society that stays aware remains difficult to control.",
  },
  {
    icon: Flame,
    title: "Truth",
    description:
      "This movement exists to remind people that truth deserves to be spoken, defended, and protected — no matter who it inconveniences.",
  },
  {
    icon: Users,
    title: "Courage",
    description:
      "Throughout history, freedom has only survived because ordinary people were willing to question power and defend truth when it mattered most.",
  },
];

const ManifestoSection = () => {
  return (
    <section id="the-movement" className="py-24 bg-secondary">
      <div className="container px-4">
        {/* Manifesto intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            The Movement
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-10">
            TRUTH SHALL PREVAIL
          </h2>
          <p className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-6">
            <span className="text-primary font-bold">Truth Shall Prevail</span> is the message that drives Awareness 1776.
          </p>
          <p className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Throughout history, freedom has only survived because ordinary people were willing to{" "}
            <span className="text-primary font-bold">QUESTION POWER</span> and defend truth when it mattered most.
          </p>
          <p className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Awareness 1776 was created to encourage that same spirit of{" "}
            <span className="text-primary font-bold">AWARENESS AND COURAGE</span> in the modern world.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground leading-snug mb-6 uppercase tracking-wide font-bold">
            We believe awareness is the foundation of freedom.
          </p>
          <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
            A society that stops asking questions slowly loses its liberty. A society that stays aware{" "}
            <span className="text-primary font-bold">REMAINS DIFFICULT TO CONTROL.</span>
          </p>
        </div>

        {/* Core values banner */}
        <div className="relative my-20 py-16 px-6 border border-primary rounded bg-card overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><text x=%220%22 y=%2230%22 font-size=%2220%22 fill=%22white%22>★</text></svg>')] bg-repeat" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              <p className="font-display text-2xl md:text-4xl text-foreground leading-snug">
                Awareness leads to truth.
              </p>
              <p className="font-display text-2xl md:text-4xl leading-snug">
                <span className="text-gradient-revolution">Truth leads to courage.</span>
              </p>
              <p className="font-display text-2xl md:text-4xl text-foreground leading-snug">
                Courage protects freedom.
              </p>
            </div>
            <p className="font-heading text-lg text-primary tracking-[0.2em] mt-10 uppercase">
              Truth Shall Prevail.
            </p>
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
              <h4 className="font-display text-xl text-foreground mb-3 uppercase">
                {pillar.title}
              </h4>
              <p className="font-display text-sm text-foreground leading-relaxed">
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
