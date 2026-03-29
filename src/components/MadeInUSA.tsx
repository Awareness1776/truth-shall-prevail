import { Shield, Flag, Star, Users } from "lucide-react";

const pillars = [
  {
    icon: Flag,
    title: "100% MADE IN THE USA",
    text: "Every single piece is cut, sewn, and finished right here on American soil. No overseas factories. No shortcuts. No compromises. When you hold our gear, you're holding American craftsmanship — period.",
  },
  {
    icon: Star,
    title: "PREMIUM HEAVYWEIGHT FABRIC",
    text: "We use only top-tier, heavyweight cotton blends that feel like armor. No thin, see-through fast-fashion garbage. Our fabrics are built to last — wash after wash, fight after fight. This is clothing that stands up because YOU stand up.",
  },
  {
    icon: Shield,
    title: "QUALITY YOU CAN TRUST",
    text: "Reinforced stitching. Pre-shrunk materials. Fade-resistant prints that hit as hard on day 1,000 as they do on day one. We don't cut corners — we cut tyranny. Every detail is intentional, every thread is accountable.",
  },
  {
    icon: Users,
    title: "YOUR PURCHASE CREATES AMERICAN JOBS",
    text: "Every order directly supports American workers, American families, and American communities. The more you support us, the more jobs we create right here at home. This isn't just a brand — it's an economic rebellion against outsourcing.",
  },
];

const MadeInUSA = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Built Different
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            PROUDLY AMERICAN. UNAPOLOGETICALLY PREMIUM.
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We refuse to ship our labor overseas so some corporation can pocket the difference.
            Our products are made by American hands, with American materials, for Americans
            who demand the best — because you deserve nothing less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded p-8 hover:border-primary transition-colors duration-300"
            >
              <p.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-display text-2xl md:text-3xl text-foreground">
            When you wear <span className="text-primary font-bold">Awakened 1776</span>,
            you're not just making a statement —
          </p>
          <p className="font-display text-2xl md:text-3xl text-primary font-bold mt-2">
            YOU'RE INVESTING IN AMERICA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MadeInUSA;
