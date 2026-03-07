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
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="text-primary h-10 w-10 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            JOIN THE FRONTLINE
          </h2>
          <p className="font-body text-muted-foreground mb-2">
            Get early access to new drops, veteran impact updates, and
            constitutional truth bombs delivered straight to your inbox.
          </p>
          <p className="font-heading text-xs tracking-[0.2em] text-primary uppercase mb-8">
            No spam. No selling your data. That's a constitutional promise.
          </p>

          {submitted ? (
            <div className="bg-primary/10 border border-primary rounded p-6 animate-fade-up">
              <p className="font-display text-xl text-primary mb-2">
                YOU'RE IN, PATRIOT.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Welcome to the movement. Check your inbox for a confirmation
                and your first look at what's coming next.
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
            Joining 12,400+ patriots already on the list
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
