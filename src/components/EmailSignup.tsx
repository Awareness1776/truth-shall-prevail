import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-card border-t border-b border-border">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="text-primary h-10 w-10 mx-auto mb-6" />
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Be Part Of It
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10">
            JOIN THE MOVEMENT
          </h2>

          <div className="space-y-5 mb-12 max-w-2xl mx-auto">
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              Movements grow when people{" "}
              <span className="text-primary font-bold">REFUSE TO REMAIN SILENT.</span>
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join the community behind Awareness 1776 and help spread the message of awareness, truth, and liberty.
            </p>
            <div className="space-y-2 py-4">
              <p className="font-display text-lg text-foreground">Stay informed.</p>
              <p className="font-display text-lg text-foreground">Share the message.</p>
              <p className="font-display text-lg text-foreground">
                Encourage awareness in a world that often discourages it.
              </p>
            </div>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              The more people who stay aware, the{" "}
              <span className="text-primary font-bold">STRONGER FREEDOM BECOMES.</span>
            </p>
          </div>

          <p className="font-heading text-lg text-primary tracking-[0.2em] uppercase mb-10">
            Truth Shall Prevail.
          </p>

          {submitted ? (
            <div className="bg-primary/10 border border-primary rounded p-6 animate-fade-up">
              <p className="font-display text-xl text-primary mb-2">
                YOU'RE IN.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Welcome to the movement. Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 px-4 bg-background border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <Button variant="revolution" size="default" type="submit" className="h-12">
                Join <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="font-body text-xs text-muted-foreground mt-6">
            Join the growing community of people who believe in awareness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
