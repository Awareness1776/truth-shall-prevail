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
        <p className="font-heading text-sm md:text-base tracking-[0.3em] text-primary mb-4 uppercase drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]">
          Est. 1776 — The Spirit Lives On
        </p>
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] text-foreground mb-8 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          <span className="block" style={{ textShadow: '0 0 40px hsl(var(--primary) / 0.3)' }}>AWARENESS</span>
          <span className="text-gradient-revolution drop-shadow-[0_0_60px_hsl(var(--revolution-gold)/0.5)]" style={{ textShadow: '0 0 60px hsl(40 90% 55% / 0.4)' }}>1776</span>
        </h1>
        <div className="w-24 h-[2px] mx-auto mb-6" style={{ background: 'var(--gradient-revolution)' }} />
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground max-w-3xl mx-auto mb-3 tracking-wide uppercase leading-relaxed" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
          A platform dedicated to spreading awareness, defending truth, and encouraging the courage to question power.
        </p>
        <p className="font-heading text-base md:text-lg tracking-[0.3em] text-primary uppercase mb-10 drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)]">
          ★ Truth Shall Prevail ★
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
