import tshirtImg from "@/assets/product-tshirt.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import capImg from "@/assets/product-cap.jpg";
import mugImg from "@/assets/product-mug.jpg";
import posterImg from "@/assets/product-poster.jpg";
import beanieImg from "@/assets/product-beanie.jpg";
import stickersImg from "@/assets/product-stickers.jpg";
import tee2Img from "@/assets/product-tee2.jpg";
import hoodie2Img from "@/assets/product-hoodie2.jpg";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Category = "all" | "apparel" | "headwear" | "accessories";

const products = [
  {
    name: '"Had Enough" Tee',
    price: "$34.99",
    image: tshirtImg,
    tagline: "We The People Have Had Enough",
    badge: "BESTSELLER",
    category: "apparel" as Category,
  },
  {
    name: '"Defend" Hoodie',
    price: "$64.99",
    image: hoodieImg,
    tagline: "Defend The Constitution",
    badge: "NEW DROP",
    category: "apparel" as Category,
  },
  {
    name: '"Article V" Tee',
    price: "$34.99",
    image: tee2Img,
    tagline: "The People's Reset",
    badge: "NEW",
    category: "apparel" as Category,
  },
  {
    name: '"Liberty or Death" Hoodie',
    price: "$64.99",
    image: hoodie2Img,
    tagline: "Flag Skull Edition",
    badge: "🔥 HOT",
    category: "apparel" as Category,
  },
  {
    name: '"1776" Dad Cap',
    price: "$29.99",
    image: capImg,
    tagline: "The Year It All Began",
    badge: null,
    category: "headwear" as Category,
  },
  {
    name: '"WTP" Beanie',
    price: "$24.99",
    image: beanieImg,
    tagline: "We The People — Embroidered",
    badge: "NEW",
    category: "headwear" as Category,
  },
  {
    name: '"Don\'t Tread" Mug',
    price: "$19.99",
    image: mugImg,
    tagline: "Don't Tread On Us",
    badge: null,
    category: "accessories" as Category,
  },
  {
    name: '"RISE" Poster',
    price: "$14.99",
    image: posterImg,
    tagline: "18×24 Screenprint Style",
    badge: "LIMITED",
    category: "accessories" as Category,
  },
  {
    name: "Sticker Pack (6pc)",
    price: "$12.99",
    image: stickersImg,
    tagline: "Slap 'Em Everywhere",
    badge: "FAN FAVORITE",
    category: "accessories" as Category,
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Apparel", value: "apparel" },
  { label: "Headwear", value: "headwear" },
  { label: "Accessories", value: "accessories" },
];

const ProductShowcase = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="shop" className="py-24 bg-gradient-dark">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Wear Your Rights
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            THE COLLECTION
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-8">
            Every piece carries the weight of the Constitution. Premium quality.
            Bold statements. Made for those who refuse to stay silent.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`font-display text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
                  active === cat.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
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
