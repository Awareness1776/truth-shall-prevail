import logo from "@/assets/logo.png";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "The Movement", path: "/movement" },
  { label: "Our Story", path: "/our-story" },
  { label: "Shop", path: "/shop" },
  { label: "Videos", path: "/videos" },
  { label: "Contact Us", path: "/contact" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="WTP Logo" className="h-10 w-10" />
          <span className="font-display text-xl tracking-widest text-foreground">
            WE THE PEOPLE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`font-heading text-sm tracking-wider transition-colors uppercase ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/shop">
              <ShoppingBag className="mr-1 h-4 w-4" /> Shop
            </Link>
          </Button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`block px-6 py-3 font-heading text-sm tracking-wider uppercase ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
