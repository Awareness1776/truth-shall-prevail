import { useEffect, useState, useRef } from "react";
import { Heart, Home, Brain, Briefcase } from "lucide-react";

const targetStats = [
  {
    icon: Heart,
    target: 147832,
    prefix: "$",
    label: "Donated to Veteran Causes",
    suffix: "",
  },
  {
    icon: Home,
    target: 312,
    prefix: "",
    label: "Veterans Housed",
    suffix: "+",
  },
  {
    icon: Brain,
    target: 1847,
    prefix: "",
    label: "Mental Health Sessions Funded",
    suffix: "+",
  },
  {
    icon: Briefcase,
    target: 523,
    prefix: "",
    label: "Veterans Placed in Jobs",
    suffix: "+",
  },
];

function useCountUp(target: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
}

function formatNumber(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString();
  }
  return n.toString();
}

function StatCard({
  stat,
  visible,
}: {
  stat: (typeof targetStats)[0];
  visible: boolean;
}) {
  const count = useCountUp(stat.target, 2500, visible);
  const Icon = stat.icon;

  return (
    <div className="bg-card border border-border rounded p-8 text-center group hover:border-primary transition-colors duration-500">
      <Icon className="text-primary h-8 w-8 mx-auto mb-4" />
      <p className="font-display text-3xl md:text-5xl text-foreground mb-2">
        {stat.prefix}
        {formatNumber(count)}
        {stat.suffix}
      </p>
      <p className="font-heading text-xs tracking-widest text-muted-foreground uppercase">
        {stat.label}
      </p>
    </div>
  );
}

const ImpactTracker = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Transparent. Accountable. Always.
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            OUR IMPACT — LIVE
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Every dollar is tracked. Every receipt is published. This is what
            happens when a brand actually means what it says.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {targetStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} visible={visible} />
          ))}
        </div>

        <div className="text-center">
          <p className="font-body text-xs text-muted-foreground">
            Last updated: March 2026 •{" "}
            <a href="#" className="text-primary hover:underline">
              View full donation reports →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactTracker;
