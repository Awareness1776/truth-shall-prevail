import logo from "@/assets/logo.png";
import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="bg-revolution-dark border-t border-border py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="WTP Logo" className="h-10 w-10" />
              <span className="font-display text-lg tracking-widest text-foreground">
                WE THE PEOPLE
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
              Born from the spirit of 1776. We carry the fire of the founders —
              the belief that power belongs to the people, not the powerful.
            </p>
            <p className="font-body text-xs text-primary font-medium tracking-wide uppercase">
              ★ 10% of every sale supports veteran organizations ★
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "The Movement", path: "/movement" },
                { label: "Our Story", path: "/our-story" },
                { label: "Shop", path: "/shop" },
                { label: "Videos", path: "/videos" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-foreground mb-4">
              Join The Movement
            </h4>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Follow us for daily content, drops, and constitutional truth bombs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.23 8.23 0 004.76 1.52V7.05a4.83 4.83 0 01-1-.36z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase">
            © 2026 We The People — "Governments derive their just powers from the consent of the governed."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
