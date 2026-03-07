import veteranImg from "@/assets/veteran-story.jpg";
import { Heart, Shield, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "22", label: "Veterans lost to suicide every single day" },
  { number: "37K+", label: "Veterans experiencing homelessness tonight" },
  { number: "$0", label: "What Congress budgets for real veteran care reform" },
  { number: "10%", label: "Of every sale goes directly to veteran aid" },
];

const VeteranMission = () => {
  return (
    <section id="our-story" className="py-24 bg-background overflow-hidden">
      <div className="container px-4">
        {/* Hero statement */}
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            This Is Why We Fight
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            THEY SERVED US.
            <br />
            <span className="text-gradient-revolution">NOW WE SERVE THEM.</span>
          </h2>
        </div>

        {/* Story + image split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src={veteranImg}
              alt="Veteran outside the Capitol"
              className="w-full rounded border border-border shadow-card-revolution"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded border border-border">
              <p className="font-heading text-xs tracking-[0.2em] text-primary uppercase">
                10% of every purchase supports veteran organizations
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">
              THEY SWORE AN OATH TO DEFEND THE CONSTITUTION.
              <br />
              <span className="text-primary">CONGRESS FORGOT THEIRS.</span>
            </h3>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Our veterans walked into war zones so politicians could sleep
                safe at night. They left pieces of themselves on foreign soil —
                limbs, sanity, brothers and sisters in arms — because they
                believed in something bigger than themselves.
              </p>
              <p>
                And what did they come home to? <span className="text-foreground font-medium">Closed VA hospitals. Months-long
                waitlists. Benefits slashed while Congress voted themselves
                raises.</span> Veterans who defended the halls of government are now
                sleeping outside them.
              </p>
              <p>
                They sent our people to fight wars that made defense contractors
                rich and left veterans broken. They cut veteran healthcare to
                fund pet projects. They wave the flag on Memorial Day and vote
                against veteran bills on Tuesday.
              </p>
              <p className="text-foreground font-medium text-lg">
                We started this brand because{" "}
                <span className="text-primary">enough is enough</span>. Every
                hoodie, every tee, every sticker you buy — 10% goes directly to
                veteran support organizations. Not to lobbyists. Not to PACs.
                To the men and women who actually bled for this country.
              </p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border p-6 rounded text-center"
            >
              <p className="font-display text-3xl md:text-4xl text-primary mb-2">
                {stat.number}
              </p>
              <p className="font-body text-xs text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* The pledge */}
        <div className="max-w-3xl mx-auto bg-card border border-primary rounded p-8 md:p-12 text-center shadow-revolution">
          <Heart className="text-primary h-10 w-10 mx-auto mb-6" />
          <h3 className="font-display text-2xl md:text-4xl text-foreground mb-6">
            THE WTP PLEDGE
          </h3>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-left md:text-center">
            <p>
              <span className="text-foreground font-medium">10% of every single sale</span> is
              donated to veteran housing, mental health services, and transition
              programs. No exceptions. No fine print. No CEO bonuses.
            </p>
            <p>
              We publish our donation receipts quarterly because{" "}
              <span className="text-primary font-medium">
                transparency isn't optional — it's constitutional
              </span>
              . If our government won't show you where the money goes, we will.
            </p>
            <p className="text-foreground font-medium">
              When you wear WTP, you're not just making a statement — you're
              funding the fight for the people who fought for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="revolution" size="lg">
              Shop & Support Veterans
            </Button>
            <Button variant="outline" size="lg">
              See Our Donations
            </Button>
          </div>
        </div>

        {/* Why this matters callout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Shield className="text-primary h-8 w-8 mx-auto mb-4" />
            <h4 className="font-display text-lg text-foreground mb-2">
              VETERAN HOUSING
            </h4>
            <p className="font-body text-sm text-muted-foreground">
              Funding transitional housing for veterans who served overseas
              and came home to nothing. A roof over the head of someone who
              kept one over yours.
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="text-primary h-8 w-8 mx-auto mb-4" />
            <h4 className="font-display text-lg text-foreground mb-2">
              MENTAL HEALTH
            </h4>
            <p className="font-body text-sm text-muted-foreground">
              Supporting PTSD treatment, counseling, and peer support programs.
              Because "thank you for your service" doesn't treat trauma — but
              real funding does.
            </p>
          </div>
          <div className="text-center p-6">
            <DollarSign className="text-primary h-8 w-8 mx-auto mb-4" />
            <h4 className="font-display text-lg text-foreground mb-2">
              JOB TRANSITION
            </h4>
            <p className="font-body text-sm text-muted-foreground">
              Helping veterans translate military skills into civilian careers.
              They protected this economy — they deserve a place in it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeteranMission;
