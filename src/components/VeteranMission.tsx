import veteranImg from "@/assets/veteran-story.jpg";
import { Heart, Shield, DollarSign, Users, Scale, FileWarning } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { number: "22", label: "Veterans lost to suicide every single day" },
  { number: "37K+", label: "Veterans experiencing homelessness tonight" },
  { number: "$0", label: "What Congress budgets for real veteran care reform" },
  { number: "10%", label: "Of every sale goes directly to veteran aid" },
  { number: "10%", label: "Of every sale supports Epstein victims' recovery" },
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
                20% of every purchase supports veterans & Epstein survivors
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
                In March 2026, families across America are watching headlines about
                a possible war with Iran while asking the same question: <span className="text-foreground font-medium">who is
                listening to the people who pay the price?</span> Not the pundits. Not the
                insiders. The parents, veterans, workers, and young Americans who
                would carry the burden of another generation of conflict.
              </p>
              <p>
                Our veterans already gave everything. They stepped into chaos so
                politicians could stand at podiums and call it strategy. They came
                home to closed clinics, endless waitlists, broken promises, and a
                system that thanks them in speeches while abandoning them in real life.
              </p>
              <p>
                And now the same machine beats the same drum again — louder fear,
                faster escalation, less accountability. Meanwhile, Americans across
                this country are saying they do <span className="text-foreground font-medium">not</span> want another endless war,
                another blank check, another list of names carved into stone while
                Washington cashes in.
              </p>
              <p className="text-foreground font-medium text-lg">
                This brand exists so that voice can’t be ignored.
              </p>
              <p>
                Every product is a signal: we remember who bleeds, who grieves, and
                who gets left behind. Every person wearing Awakened 1776 carries a
                piece of that truth into their town, their job, their school, and
                their streets.
              </p>
              <p>
                We are not building this for one person. We are building this for all
                of us in the United States — for veterans, for families, for survivors,
                for anyone tired of being treated like collateral.
              </p>
              <p className="text-foreground font-medium text-lg">
                We need to unite. We need to be seen. We need to march — peacefully,
                loudly, and together — until the people in power remember who this
                country belongs to.
              </p>
            </div>
          </div>
        </div>

        {/* ===== EPSTEIN FILES SECTION ===== */}
        <div className="relative my-20 py-16 px-6 md:px-12 border border-primary rounded bg-card overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><text x=%220%22 y=%2230%22 font-size=%2220%22 fill=%22white%22>⚖</text></svg>')] bg-repeat" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileWarning className="text-primary h-8 w-8" />
              <p className="font-display text-xs tracking-[0.4em] text-primary uppercase">
                The Epstein Files
              </p>
              <FileWarning className="text-primary h-8 w-8" />
            </div>

            <h3 className="font-display text-3xl md:text-5xl text-foreground text-center mb-8 leading-tight">
              THEY RELEASED THE FILES.
              <br />
              <span className="text-gradient-revolution">
                NOBODY IS BEING PROSECUTED.
              </span>
            </h3>

            <div className="max-w-3xl mx-auto space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                The Epstein files are out. The names are there. The flight logs are there. The evidence
                of what happened to <span className="text-foreground font-medium">innocent children</span> on
                that island is there for the entire world to see. And what has our government done about it?
              </p>
              <p className="text-foreground font-medium text-lg">
                Absolutely nothing.
              </p>
              <p>
                Members of Congress — the same people who swore an oath to protect this nation and
                its citizens — are sitting on their hands while <span className="text-foreground font-medium">known
                predators walk free</span>. Some of those names belong to the very people sitting in
                those congressional seats. They're not just ignoring the problem — they ARE the problem.
              </p>
              <p>
                These weren't victimless crimes. These were <span className="text-primary font-medium">children</span>.
                Kids who were trafficked, abused, and thrown away by the most powerful people in the
                world. And the government that was supposed to protect them? It protected the predators instead.
              </p>
              <p>
                They sealed documents. They buried evidence. They let co-conspirators cut deals and
                walk away with slaps on the wrist. Billionaires, politicians, celebrities — they all
                got the VIP treatment while victims got silence.
              </p>
              <p className="text-foreground font-medium text-lg">
                We cannot let them get away with it. Not now. Not ever.
              </p>
              <p>
                Every single name on that list needs to be investigated. Every single person who
                set foot on that island needs to answer for what they did. Every member of Congress
                who looked the other way, who blocked investigations, who protected their colleagues —
                they are <span className="text-primary font-medium">complicit</span> and they need to
                be held accountable.
              </p>
              <p>
                This isn't a left or right issue. This is about <span className="text-foreground font-medium">protecting
                children</span>. If you can't agree on that, you're part of the problem. The American
                people are awake. We've seen the files. We know the names. And we will not rest until
                every last one of them faces justice.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="revolution" size="lg" asChild>
                <Link to="/shop">Shop The Justice Collection</Link>
              </Button>
            </div>

            {/* Key demands */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border p-6 rounded text-center">
                <Scale className="text-primary h-7 w-7 mx-auto mb-3" />
                <h4 className="font-display text-sm text-foreground mb-2">
                  RELEASE EVERY NAME
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  Unseal every document. Release every flight log. The American people
                  have the right to know who was on that island and what they did there.
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded text-center">
                <FileWarning className="text-primary h-7 w-7 mx-auto mb-3" />
                <h4 className="font-display text-sm text-foreground mb-2">
                  PROSECUTE THEM ALL
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  No plea deals. No sealed settlements. No quiet resignations.
                  Full criminal prosecution for every person involved — no matter
                  how powerful they are.
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded text-center">
                <Shield className="text-primary h-7 w-7 mx-auto mb-3" />
                <h4 className="font-display text-sm text-foreground mb-2">
                  PROTECT THE CHILDREN
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  Demand Congress pass real legislation to protect children from
                  trafficking. Fund victim support. Put predators behind bars for life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
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
              <span className="text-foreground font-medium">Another 10% of every sale</span> goes
              directly to organizations supporting the{" "}
              <span className="text-primary font-medium">survivors and victims of the Epstein
              trafficking ring</span>. These are real people — many of them were children when
              they were abused by the most powerful people in the world. They deserve therapy,
              legal aid, and the chance to rebuild their lives. Our government failed them.
              We won't.
            </p>
            <p>
              That's <span className="text-foreground font-medium">20% of every purchase</span> going
              to the people who need it most — veterans who bled for this country and survivors
              who were failed by the people running it.
            </p>
            <p>
              We publish our donation receipts quarterly because{" "}
              <span className="text-primary font-medium">
                transparency isn't optional — it's constitutional
              </span>
              . If our government won't show you where the money goes, we will.
            </p>
            <p className="text-foreground font-medium">
              When you wear Awareness 1776, you're not just making a statement — you're
              funding the fight for veterans and for the survivors that Congress abandoned.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="revolution" size="lg" asChild>
              <Link to="/shop">Shop & Support Veterans</Link>
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
