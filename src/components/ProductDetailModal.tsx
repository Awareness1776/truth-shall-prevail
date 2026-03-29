import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type { Product } from "@/data/products";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, open, onClose }: Props) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedColor(0);
    setSelectedSize(0);
    setQty(1);
  }, [product?.id]);

  if (!product) return null;

  const hasColors = product.colors.length > 0;
  const hasSizes = product.sizes && product.sizes.length > 0;

  const handleAddToCart = () => {
    addItem({
      product,
      color: hasColors ? product.colors[selectedColor].name : "",
      size: hasSizes ? product.sizes![selectedSize] : "",
      qty,
    });
    toast.success(`${product.name} added to cart`, {
      action: {
        label: "View Cart",
        onClick: () => navigate("/cart"),
      },
    });
  };

  const handleBuyNow = () => {
    addItem({
      product,
      color: hasColors ? product.colors[selectedColor].name : "",
      size: hasSizes ? product.sizes![selectedSize] : "",
      qty,
    });
    onClose();
    navigate("/cart");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl p-0 bg-card border-border overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Product image */}
          <div className="relative aspect-square bg-secondary overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground font-display text-xs tracking-wider px-3 py-1">
                {product.badge}
              </span>
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
                  Size:{" "}
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
              <Button
                variant="default"
                size="xl"
                className="w-full font-display tracking-wider"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full font-display tracking-wider"
                onClick={handleBuyNow}
              >
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
