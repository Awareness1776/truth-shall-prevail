import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />

      <div className="relative z-10 container text-center px-4 animate-fade-up">
        <p className="font-heading text-sm md:text-base tracking-[0.3em] text-primary mb-4 uppercase">
          Est. 1776 — The Spirit Lives On
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-foreground mb-6">
          WE THE PEOPLE
          <br />
          <span className="text-gradient-revolution">HAVE HAD ENOUGH</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
          "When injustice becomes law, resistance becomes duty."
          <br />
          <span className="text-sm italic">
            — Wear the revolution. Defend the Constitution.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="revolution" size="xl" asChild>
            <Link to="/shop">Shop The Collection</Link>
          </Button>
          <Button variant="hero" size="xl" asChild>
            <Link to="/movement">Join The Movement</Link>
          </Button>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-sm tracking-[0.2em] text-primary-foreground mx-8"
            >
              ★ WE THE PEOPLE ★ DEFEND THE CONSTITUTION ★ 1776 ★ LIBERTY OR
              DEATH ★ SHALL NOT BE INFRINGED ★ ENOUGH IS ENOUGH ★
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
