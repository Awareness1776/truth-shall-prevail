import { Quote } from "lucide-react";

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

const ManifestoSection = () => {
  return (
    <section id="the-movement" className="py-24 bg-secondary">
      <div className="container px-4">
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
            declaration: <span className="text-primary">We remember our rights, and we will defend them.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
