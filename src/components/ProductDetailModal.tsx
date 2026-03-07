import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

// Transparent-background cutout images per category
import tshirtCutout from "@/assets/product-tshirt-cutout.png";
import hoodieCutout from "@/assets/product-hoodie-cutout.png";
import tankCutout from "@/assets/product-tank-cutout.png";
import mugCutout from "@/assets/product-mug-cutout.png";
import bottleCutout from "@/assets/product-bottle-cutout.png";
import caseCutout from "@/assets/product-case-cutout.png";
import keychainCutout from "@/assets/product-keychain-cutout.png";

const CATEGORY_CUTOUTS: Record<string, string> = {
  apparel: tshirtCutout,
  "tank-tops": tankCutout,
  mugs: mugCutout,
  drinkware: bottleCutout,
  "phone-cases": caseCutout,
  keychains: keychainCutout,
};

const HOODIE_IDS = new Set([
  "hoodie-patriot", "hoodie-1776", "hoodie-dont-tread",
  "hoodie-liberty", "hoodie-shield", "hoodie-revolution",
]);

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, open, onClose }: Props) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSelectedColor(0);
    setSelectedSize(0);
    setQty(1);
  }, [product?.id]);

  if (!product) return null;

  const hasColors = product.colors.length > 0;
  const hasSizes = product.sizes && product.sizes.length > 0;
  const isDefaultColor = selectedColor === 0;
  const colorHex = hasColors ? product.colors[selectedColor].hex : null;

  // Get cutout for this product
  const cutoutImage = HOODIE_IDS.has(product.id)
    ? hoodieCutout
    : CATEGORY_CUTOUTS[product.category] || null;

  const showColorPreview = !isDefaultColor && cutoutImage && colorHex;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl p-0 bg-card border-border overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Product image */}
          <div className="relative aspect-square bg-secondary overflow-hidden">
            {showColorPreview ? (
              /* Color preview: neutral bg + colored product shape + textured product on top */
              <div className="w-full h-full relative bg-card flex items-center justify-center">
                {/* Layer 1: Solid color, masked to product shape */}
                <div
                  className="absolute inset-4 transition-all duration-500"
                  style={{
                    backgroundColor: colorHex,
                    WebkitMaskImage: `url(${cutoutImage})`,
                    maskImage: `url(${cutoutImage})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
                {/* Layer 2: Original cutout on top for texture/detail at low opacity */}
                <img
                  src={cutoutImage}
                  alt={product.name}
                  className="relative w-full h-full object-contain p-4 transition-all duration-500"
                  style={{ opacity: 0.35, mixBlendMode: "multiply" }}
                />
              </div>
            ) : (
              /* Default: original product photo */
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground font-display text-xs tracking-wider px-3 py-1">
                {product.badge}
              </span>
            )}
            {hasColors && !isDefaultColor && (
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="bg-background/80 backdrop-blur-sm text-foreground font-display text-xs tracking-wider px-3 py-2 rounded">
                  Color: {product.colors[selectedColor].name}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col">
            <p className="font-heading text-xs tracking-[0.3em] text-primary mb-2 uppercase">
              {product.tagline}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              {product.name}
            </h2>
            <p className="font-display text-3xl text-primary mb-4">
              {product.price}
            </p>

            {product.description && (
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Colors */}
            {hasColors && (
              <div className="mb-5">
                <p className="font-heading text-xs tracking-widest text-muted-foreground uppercase mb-3">
                  Color: <span className="text-foreground">{product.colors[selectedColor].name}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(i)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === i
                          ? "border-primary ring-2 ring-primary/30 scale-110"
                          : "border-border hover:border-muted-foreground"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {hasSizes && (
              <div className="mb-5">
                <p className="font-heading text-xs tracking-widest text-muted-foreground uppercase mb-3">
                  {product.category === "phone-cases" ? "Device" : "Size"}:{" "}
                  <span className="text-foreground">{product.sizes![selectedSize]}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes!.map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(i)}
                      className={`font-display text-xs tracking-wider px-3 py-2 border transition-all ${
                        selectedSize === i
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-heading text-xs tracking-widest text-muted-foreground uppercase mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-border inline-flex">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground font-display"
                >
                  −
                </button>
                <span className="px-4 py-2 font-display text-foreground border-x border-border min-w-[3rem] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground font-display"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-auto space-y-3">
              <Button variant="default" size="xl" className="w-full font-display tracking-wider">
                ADD TO CART
              </Button>
              <Button variant="outline" size="lg" className="w-full font-display tracking-wider">
                BUY IT NOW
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
