import { Users } from "lucide-react";

const YouAreNotAlone = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="text-primary h-10 w-10 mx-auto mb-6" />
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Together We Rise
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">
            YOU ARE NOT ALONE
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              Across the world, millions of people are beginning to question the narratives they were told to{" "}
              <span className="text-primary font-bold">BLINDLY ACCEPT.</span>
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              They are choosing awareness over ignorance.
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              They are choosing truth over silence.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              Awakened 1776 exists to{" "}
              <span className="text-primary font-bold">BRING THOSE INDIVIDUALS TOGETHER.</span>
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              This movement is not about one voice.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              It is about <span className="text-primary font-bold">MANY VOICES</span> who refuse to stop asking questions.
            </p>
            <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed font-bold mt-10">
              If you are here, it means you are already part of that awakening.
            </p>

            <div className="mt-14 pt-10 border-t border-border">
              <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                This movement does not belong to a company.
              </p>
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed font-bold">
                It belongs to <span className="text-primary">EVERY INDIVIDUAL</span> who believes awareness, truth, and liberty are worth defending.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouAreNotAlone;
