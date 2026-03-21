const values = [
  { bold: "Awareness", rest: "over ignorance." },
  { bold: "Truth", rest: "over manipulation." },
  { bold: "Liberty", rest: "over control." },
  { bold: "Accountability", rest: "over corruption." },
  { bold: "Courage", rest: "over silence." },
];

const WhatWeStandFor = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Our Principles
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">
            WHAT WE STAND FOR
          </h2>

          <div className="space-y-4 mb-14">
            {values.map((v) => (
              <p
                key={v.bold}
                className="font-display text-xl md:text-3xl text-foreground tracking-wide"
              >
                <span className="text-primary font-bold">{v.bold}</span> {v.rest}
              </p>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              Awakened 1776 exists to encourage people to stay informed, think critically, and{" "}
              <span className="text-primary font-bold">QUESTION NARRATIVES</span> that demand blind acceptance.
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              Freedom survives when people remain aware.
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              Truth survives when people refuse to stay silent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;
