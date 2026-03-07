import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Instagram, Youtube } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <section className="py-24 bg-background">
          <div className="container px-4">
            <div className="text-center mb-16">
              <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
                Get In Touch
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
                CONTACT US
              </h1>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                Got questions, ideas, or want to join the fight? We're all ears, patriot.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div>
                {submitted ? (
                  <div className="bg-primary/10 border border-primary rounded p-8 text-center animate-fade-up">
                    <Send className="text-primary h-10 w-10 mx-auto mb-4" />
                    <p className="font-display text-xl text-primary mb-2">MESSAGE SENT!</p>
                    <p className="font-body text-sm text-muted-foreground">
                      We'll get back to you within 24 hours. Stay strong, patriot.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-12 px-4 bg-card border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-12 px-4 bg-card border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full h-12 px-4 bg-card border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <textarea
                      placeholder="Your Message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                    <Button variant="revolution" size="lg" type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded p-8">
                  <Mail className="text-primary h-8 w-8 mb-4" />
                  <h3 className="font-display text-lg text-foreground mb-2">EMAIL US</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    wetpeople.1776@gmail.com
                  </p>
                </div>

                <div className="bg-card border border-border rounded p-8">
                  <MapPin className="text-primary h-8 w-8 mb-4" />
                  <h3 className="font-display text-lg text-foreground mb-2">BASED IN</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    The United States of America
                  </p>
                  <p className="font-body text-xs text-primary mt-2 tracking-wide uppercase">
                    Where freedom was born
                  </p>
                </div>

                <div className="bg-card border border-border rounded p-8">
                  <h3 className="font-display text-lg text-foreground mb-4">FOLLOW THE MOVEMENT</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Youtube size={24} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.23 8.23 0 004.76 1.52V7.05a4.83 4.83 0 01-1-.36z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
};

export default ContactPage;
