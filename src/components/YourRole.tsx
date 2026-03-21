import { Megaphone } from "lucide-react";

const YourRole = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Megaphone className="text-primary h-10 w-10 mx-auto mb-6" />
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            It Starts With You
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">
            YOUR ROLE IN THE MOVEMENT
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              Awareness spreads{" "}
              <span className="text-primary font-bold">PERSON BY PERSON.</span>
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every conversation, every shared idea, and every message worn publicly helps challenge the culture of silence.
            </p>
            <p className="font-display text-xl md:text-2xl text-foreground leading-snug font-bold uppercase tracking-wide my-10">
              The mission of Awakened 1776 is simple:
            </p>
            <div className="space-y-3 py-2">
              <p className="font-display text-lg md:text-xl text-foreground">
                Encourage people to <span className="text-primary font-bold">THINK.</span>
              </p>
              <p className="font-display text-lg md:text-xl text-foreground">
                Encourage people to <span className="text-primary font-bold">QUESTION.</span>
              </p>
              <p className="font-display text-lg md:text-xl text-foreground">
                Encourage people to <span className="text-primary font-bold">REMAIN AWARE.</span>
              </p>
            </div>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed pt-4">
              If enough individuals refuse to ignore the truth,{" "}
              <span className="text-primary font-bold">CHANGE BECOMES INEVITABLE.</span>
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              Movements are not built by leaders alone.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              They are built by <span className="text-primary font-bold">ORDINARY PEOPLE</span> who refuse to stay silent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourRole;
