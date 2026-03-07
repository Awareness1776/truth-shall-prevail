import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

// Parse hex to get lightness and saturation
function parseColor(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  const saturation = max === min ? 0 : (max - min) / (1 - Math.abs(2 * lightness - 1));
  return { lightness, saturation };
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
  const colorInfo = colorHex ? parseColor(colorHex) : null;
  const isChromatic = colorInfo ? colorInfo.saturation > 0.15 : false;

  // Compute image filter based on selected color type
  // For all non-default colors, we overlay the color on a desaturated base
  const getImageStyle = (): React.CSSProperties => {
    if (isDefaultColor || !colorInfo) return {};
    // Desaturate base so overlay color is accurate
    return { filter: "saturate(0) brightness(1.0)", transition: "filter 0.5s" };
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl p-0 bg-card border-border overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Product image with color preview */}
          <div className="relative aspect-square bg-secondary overflow-hidden" style={{ isolation: "isolate" }}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              style={getImageStyle()}
            />
            {/* Color tint overlay — works for ALL colors including black/white */}
            {!isDefaultColor && colorHex && (
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: colorHex,
                  mixBlendMode: "color",
                  opacity: 0.9,
                }}
              />
            )}
            {/* Screen layer for light colors to brighten the image */}
            {!isDefaultColor && colorHex && colorInfo && colorInfo.lightness > 0.4 && (
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: colorHex,
                  mixBlendMode: "screen",
                  opacity: Math.min(0.85, colorInfo.lightness * 0.9),
                }}
              />
            )}
            {/* Multiply layer for dark colors to deepen */}
            {!isDefaultColor && colorHex && colorInfo && colorInfo.lightness <= 0.4 && colorInfo.saturation > 0.15 && (
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: colorHex,
                  mixBlendMode: "multiply",
                  opacity: 0.5,
                }}
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
                <div className="flex gap-2">
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
