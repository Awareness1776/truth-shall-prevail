import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import bannerInfringed from "@/assets/banner-infringed.jpg";
import bannerConsent from "@/assets/banner-consent.jpg";
import bannerLiberty from "@/assets/banner-liberty.jpg";

const banners = [
  {
    image: bannerInfringed,
    constitutionalText: "SHALL NOT BE INFRINGED",
    source: "2nd Amendment",
    slogan: "They keep chipping away. We keep standing up.",
  },
  {
    image: bannerConsent,
    constitutionalText: "CONSENT OF THE GOVERNED",
    source: "Declaration of Independence",
    slogan: "Nobody asked us. Nobody ever does. That ends now.",
  },
  {
    image: bannerLiberty,
    constitutionalText: "SECURE THE BLESSINGS OF LIBERTY",
    source: "Preamble to the Constitution",
    slogan: "Liberty isn't given. It's defended — generation after generation.",
  },
];

const slogans = [
  // Original
  { phrase: "NO TAXATION WITHOUT REPRESENTATION", twist: "Still paying. Still unheard.", source: "Revolutionary War Cry" },
  { phrase: "A WELL-REGULATED MILITIA", twist: "The people ARE the militia.", source: "2nd Amendment" },
  { phrase: "LIFE, LIBERTY & THE PURSUIT", twist: "They're taking all three.", source: "Declaration of Independence" },
  { phrase: "TO PROVIDE FOR THE COMMON DEFENSE", twist: "Defending themselves — not us.", source: "Preamble" },
  { phrase: "ESTABLISH JUSTICE", twist: "Justice for who? Not for us.", source: "Preamble" },
  { phrase: "DOMESTIC TRANQUILITY", twist: "There is no peace without accountability.", source: "Preamble" },
  // Bill of Rights
  { phrase: "CONGRESS SHALL MAKE NO LAW... ABRIDGING FREEDOM OF SPEECH", twist: "Unless they don't like what you're saying.", source: "1st Amendment" },
  { phrase: "THE RIGHT OF THE PEOPLE TO PEACEABLY ASSEMBLE", twist: "They call it a 'riot' when you disagree with them.", source: "1st Amendment" },
  { phrase: "TO PETITION THE GOVERNMENT FOR A REDRESS OF GRIEVANCES", twist: "We've been petitioning. They've been ignoring.", source: "1st Amendment" },
  { phrase: "NO SOLDIER SHALL BE QUARTERED IN ANY HOUSE", twist: "But they'll put surveillance in your pocket.", source: "3rd Amendment" },
  { phrase: "SECURE IN THEIR PERSONS, HOUSES, PAPERS & EFFECTS", twist: "Your data. Your phone. Your life. None of it is private anymore.", source: "4th Amendment" },
  { phrase: "NOR SHALL PRIVATE PROPERTY BE TAKEN FOR PUBLIC USE", twist: "Unless a corporation wants it more than you do.", source: "5th Amendment" },
  { phrase: "THE RIGHT TO A SPEEDY AND PUBLIC TRIAL", twist: "3 years in pre-trial detention is not speedy.", source: "6th Amendment" },
  { phrase: "EXCESSIVE BAIL SHALL NOT BE REQUIRED", twist: "$500K bail for a misdemeanor? That's the system working as designed.", source: "8th Amendment" },
  { phrase: "NOR CRUEL AND UNUSUAL PUNISHMENTS INFLICTED", twist: "Define cruel. Because they keep redefining it.", source: "8th Amendment" },
  // Declaration of Independence
  { phrase: "ALL MEN ARE CREATED EQUAL", twist: "Unless you're poor, veteran, or inconvenient.", source: "Declaration of Independence" },
  { phrase: "ENDOWED BY THEIR CREATOR WITH CERTAIN UNALIENABLE RIGHTS", twist: "Unalienable means they can't take them. Remind them.", source: "Declaration of Independence" },
  { phrase: "DERIVING THEIR JUST POWERS FROM THE CONSENT OF THE GOVERNED", twist: "We didn't consent to any of this.", source: "Declaration of Independence" },
  { phrase: "IT IS THE RIGHT OF THE PEOPLE TO ALTER OR ABOLISH IT", twist: "Read that again. Slowly. It's in the founding document.", source: "Declaration of Independence" },
  { phrase: "A LONG TRAIN OF ABUSES AND USURPATIONS", twist: "Sound familiar? The Founders wrote this about a king. We're living it under Congress.", source: "Declaration of Independence" },
  { phrase: "HE HAS ERECTED A MULTITUDE OF NEW OFFICES", twist: "Bureaucrats nobody elected making rules everybody follows.", source: "Declaration of Independence" },
];

const billOfRights = [
  {
    amendment: "1ST",
    title: "FREEDOM OF SPEECH, PRESS & ASSEMBLY",
    original: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press.",
    reality: "They can't silence you with laws, so they silence you with algorithms, deplatforming, and 'misinformation' labels. The 1st Amendment doesn't have a terms of service.",
  },
  {
    amendment: "2ND",
    title: "THE RIGHT TO BEAR ARMS",
    original: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
    reality: "'Shall not be infringed' — four words they've spent 250 years trying to rewrite. The Founders didn't stutter.",
  },
  {
    amendment: "4TH",
    title: "UNREASONABLE SEARCH & SEIZURE",
    original: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated.",
    reality: "Your phone is your papers. Your data is your effects. They're searching both without a warrant — every single day.",
  },
  {
    amendment: "5TH",
    title: "DUE PROCESS OF LAW",
    original: "No person shall be deprived of life, liberty, or property, without due process of law.",
    reality: "Civil asset forfeiture lets them take your property without even charging you with a crime. Due process? Only if you can afford a lawyer.",
  },
  {
    amendment: "10TH",
    title: "POWERS RESERVED TO THE PEOPLE",
    original: "The powers not delegated to the United States by the Constitution are reserved to the States respectively, or to the people.",
    reality: "The federal government has taken every power not nailed down — and then pried up the nails. The 10th Amendment is the most ignored sentence in American history.",
  },
];

const ConstitutionBanners = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedAmendment, setExpandedAmendment] = useState<string | null>(null);
  const visibleSlogans = showAll ? slogans : slogans.slice(0, 6);

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Words That Built A Nation
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            THEIR WORDS. OUR FIGHT.
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            The Founders wrote the playbook for freedom. Every line of the
            Constitution is a weapon against tyranny — if we choose to use it.
          </p>
        </div>

        {/* Big banners */}
        <div className="space-y-8 mb-20">
          {banners.map((banner) => (
            <div
              key={banner.constitutionalText}
              className="relative overflow-hidden rounded border border-border group"
            >
              <img
                src={banner.image}
                alt={banner.constitutionalText}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground tracking-wider mb-2">
                    "{banner.constitutionalText}"
                  </p>
                  <p className="font-heading text-xs tracking-[0.3em] text-primary uppercase mb-3">
                    — {banner.source}
                  </p>
                  <p className="font-body text-sm md:text-base text-muted-foreground italic">
                    {banner.slogan}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bill of Rights deep dive */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <BookOpen className="text-primary h-8 w-8 mx-auto mb-4" />
            <h3 className="font-display text-3xl md:text-5xl text-foreground mb-3">
              THE BILL OF RIGHTS
            </h3>
            <p className="font-heading text-xs tracking-[0.3em] text-primary uppercase mb-2">
              What They Wrote vs. What They're Doing
            </p>
            <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
              Click each amendment to see the original text — and the reality of
              how it's being violated today.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {billOfRights.map((item) => (
              <div
                key={item.amendment}
                className={`bg-card border rounded overflow-hidden transition-all duration-500 cursor-pointer ${
                  expandedAmendment === item.amendment
                    ? "border-primary shadow-revolution"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() =>
                  setExpandedAmendment(
                    expandedAmendment === item.amendment ? null : item.amendment
                  )
                }
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl md:text-3xl text-primary">
                      {item.amendment}
                    </span>
                    <h4 className="font-display text-sm md:text-base text-foreground tracking-wider">
                      {item.title}
                    </h4>
                  </div>
                  {expandedAmendment === item.amendment ? (
                    <ChevronUp className="text-primary h-5 w-5 shrink-0" />
                  ) : (
                    <ChevronDown className="text-muted-foreground h-5 w-5 shrink-0" />
                  )}
                </div>

                {expandedAmendment === item.amendment && (
                  <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-display text-xs tracking-widest text-muted-foreground uppercase mb-2">
                          What They Wrote
                        </p>
                        <p className="font-body text-sm text-foreground italic leading-relaxed">
                          "{item.original}"
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-xs tracking-widest text-primary uppercase mb-2">
                          What's Really Happening
                        </p>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {item.reality}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Constitutional slogans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSlogans.map((item) => (
            <div
              key={item.phrase}
              className="bg-card border border-border p-8 rounded text-center group hover:border-primary transition-colors duration-500"
            >
              <p className="font-display text-lg md:text-xl text-foreground mb-3 tracking-wider leading-tight">
                "{item.phrase}"
              </p>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-3" />
              <p className="font-body text-sm text-primary italic font-medium mb-2">
                {item.twist}
              </p>
              <p className="font-heading text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                — {item.source}
              </p>
            </div>
          ))}
        </div>

        {slogans.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-display text-sm tracking-widest uppercase text-primary hover:text-accent transition-colors flex items-center gap-2 mx-auto"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Show All {slogans.length} Slogans <ChevronDown className="h-4 w-4" /></>
              )}
            </button>
          </div>
        )}

        {/* Full-width call to action quote */}
        <div className="mt-20 py-16 border-t border-b border-primary text-center">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight max-w-5xl mx-auto mb-6">
            "WHEN THE PEOPLE FEAR THE GOVERNMENT,
            <br />
            THERE IS <span className="text-gradient-revolution">TYRANNY</span>.
            <br />
            WHEN THE GOVERNMENT FEARS THE PEOPLE,
            <br />
            THERE IS <span className="text-gradient-revolution">LIBERTY</span>."
          </p>
          <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase">
            — Thomas Jefferson
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionBanners;
