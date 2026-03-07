import tshirtImg from "@/assets/product-tshirt.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import capImg from "@/assets/product-cap.jpg";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: '"Had Enough" Tee',
    price: "$34.99",
    image: tshirtImg,
    tagline: "We The People Have Had Enough",
    badge: "BESTSELLER",
  },
  {
    name: '"Defend" Hoodie',
    price: "$64.99",
    image: hoodieImg,
    tagline: "Defend The Constitution",
    badge: "NEW DROP",
  },
  {
    name: '"1776" Dad Cap',
    price: "$29.99",
    image: capImg,
    tagline: "The Year It All Began",
    badge: null,
  },
];

const ProductShowcase = () => {
  return (
    <section id="shop" className="py-24 bg-gradient-dark">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Wear Your Rights
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            THE COLLECTION
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Every piece carries the weight of the Constitution. Premium quality.
            Bold statements. Made for those who refuse to stay silent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded border border-border overflow-hidden shadow-card-revolution hover:border-primary transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-display text-xs tracking-wider px-3 py-1">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="font-heading text-xs tracking-widest text-muted-foreground mb-1 uppercase">
                  {product.tagline}
                </p>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-display text-2xl text-primary mb-4">
                  {product.price}
                </p>
                <Button variant="outline" className="w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
