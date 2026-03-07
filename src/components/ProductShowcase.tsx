import { useState } from "react";
import { products, categories, type Category, type Product } from "@/data/products";
import ProductDetailModal from "@/components/ProductDetailModal";

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Get categories excluding "all"
  const sections = categories.filter((c) => c.value !== "all");

  return (
    <div id="shop">
      {sections.map((section) => {
        const sectionProducts = products.filter((p) => p.category === section.value);
        if (sectionProducts.length === 0) return null;

        return (
          <section
            key={section.value}
            id={`shop-${section.value}`}
            className="py-20 border-b border-border last:border-b-0 odd:bg-gradient-dark even:bg-background"
          >
            <div className="container px-4">
              <div className="text-center mb-12">
                <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
                  Shop Collection
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground">
                  {section.label.toUpperCase()}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectionProducts.map((product) => (
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
                      <div className="flex items-center justify-between">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <ProductDetailModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ProductShowcase;
