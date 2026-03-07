import { Button } from "@/components/ui/button";
import { useState } from "react";
import { products, categories, type Category, type Product } from "@/data/products";
import ProductDetailModal from "@/components/ProductDetailModal";

const ProductShowcase = () => {
  const [active, setActive] = useState<Category>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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
              key={product.id}
              className="group bg-card rounded border border-border overflow-hidden shadow-card-revolution hover:border-primary transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
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
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display text-2xl text-primary">
                    {product.price}
                  </p>
                  {product.colors.length > 0 && (
                    <div className="flex gap-1">
                      {product.colors.slice(0, 4).map((c) => (
                        <span
                          key={c.name}
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <span className="text-xs text-muted-foreground font-display ml-1">
                          +{product.colors.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                >
                  View Options
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductShowcase;
