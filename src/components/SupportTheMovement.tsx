import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const SupportTheMovement = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="text-primary h-10 w-10 mx-auto mb-6" />
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Stand With Us
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-10">
            SUPPORT THE MOVEMENT
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              Awakened 1776 is powered by the people who believe in it.
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every design represents a message.
            </p>
            <p className="font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every purchase helps expand the reach of the movement.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              The clothing is <span className="text-primary font-bold">NOT</span> the movement itself.
              It is simply one way supporters help spread awareness and keep the message moving forward.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
              When you wear these messages, you help{" "}
              <span className="text-primary font-bold">CARRY THE IDEA FURTHER.</span>
            </p>
          </div>

          <p className="font-heading text-lg text-primary tracking-[0.2em] uppercase mb-10">
            Truth Shall Prevail.
          </p>

          <Button variant="revolution" size="lg" asChild>
            <Link to="/shop">Shop The Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportTheMovement;
