import logo from "@/assets/logo.png";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const navItems = [
  { label: "The Movement", path: "/movement" },
  { label: "Our Story", path: "/our-story" },
  { label: "Shop", path: "/shop" },
  
  { label: "Contact Us", path: "/contact" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Awakened 1776 Logo" className="h-12 w-auto object-contain" />
          <span className="font-display text-xl tracking-widest text-foreground">
            AWAKENED 1776
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

        <div className="flex items-center gap-3">
          {/* Cart icon */}
          <Link
            to="/cart"
            className="relative text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground font-display text-[10px] w-5 h-5 rounded-full flex items-center justify-center leading-none">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/shop">
              Shop Now
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
          <Link
            to="/cart"
            className="block px-6 py-3 font-heading text-sm tracking-wider uppercase text-muted-foreground hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
