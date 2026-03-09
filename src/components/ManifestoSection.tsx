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
    title: "Speak Truth",
    description:
      "Truth is not partisan. It belongs to no party, no institution, no government. It belongs to the people — and it demands to be spoken, even when power tries to silence it.",
  },
  {
    icon: Flame,
    title: "Defend Liberty",
    description:
      "Liberty is not given — it is guarded. Every generation must decide whether to protect the freedoms earned by those before them, or let them erode in silence.",
  },
  {
    icon: Users,
    title: "Refuse Silence",
    description:
      "Silence is compliance. When injustice operates in the dark, the only moral response is to shine a light. We choose awareness over apathy, every single time.",
  },
];

const ManifestoSection = () => {
  return (
    <section id="the-movement" className="py-24 bg-secondary">
      <div className="container px-4">
        {/* Manifesto intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Awareness 1776
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-10">
            TRUTH SHALL PREVAIL
          </h2>
          <p className="font-display text-xl md:text-2xl text-foreground leading-snug mb-6 uppercase tracking-wide">
            A movement built on awareness, truth, and the courage to question power.
          </p>
          <p className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Awareness 1776 exists to remind people that freedom survives only when individuals stay{" "}
            <span className="text-primary font-bold">INFORMED, AWARE,</span> and willing to{" "}
            <span className="text-primary font-bold">CHALLENGE AUTHORITY</span> when necessary.
          </p>
          <p className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-6">
            This is <span className="text-primary font-bold">NOT JUST A CLOTHING BRAND.</span>
          </p>
          <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
            It is a platform created to spread ideas, encourage awareness, and unite individuals who believe{" "}
            <span className="text-primary font-bold">TRUTH SHOULD NEVER BE BURIED.</span>
          </p>
        </div>

        {/* Core values banner */}
        <div className="relative my-20 py-16 px-6 border border-primary rounded bg-card overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><text x=%220%22 y=%2230%22 font-size=%2220%22 fill=%22white%22>★</text></svg>')] bg-repeat" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              <p className="font-display text-3xl md:text-5xl text-foreground leading-none uppercase">
                Speak Truth.
              </p>
              <p className="font-display text-3xl md:text-5xl leading-none uppercase">
                <span className="text-gradient-revolution">Defend Liberty.</span>
              </p>
              <p className="font-display text-3xl md:text-5xl text-foreground leading-none uppercase">
                Refuse Silence.
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
