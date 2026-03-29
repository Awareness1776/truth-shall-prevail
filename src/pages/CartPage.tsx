import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const donationOptions = [5, 10, 25, 50];

const CartPage = () => {
  const { items, removeItem, updateQty, clearCart, totalItems, totalPrice, getKey } = useCart();
  const [donationEnabled, setDonationEnabled] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(10);

  const donationAmount = donationEnabled ? selectedDonation : 0;
  const orderTotal = totalPrice + donationAmount;

  const handleCheckout = () => {
    if (donationAmount > 0) {
      toast.success(`Checkout coming soon! Thanks for adding a $${donationAmount.toFixed(2)} donation.`);
      return;
    }

    toast.success("Checkout coming soon! We're setting up payments now.");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-20 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="font-heading text-sm tracking-[0.3em] text-primary mb-2 uppercase">
                Your Cart
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground">
                SHOPPING CART
              </h1>
            </div>
            {items.length > 0 && (
              <p className="font-heading text-sm tracking-wider text-muted-foreground uppercase">
                {totalItems} {totalItems === 1 ? "Item" : "Items"}
              </p>
            )}
          </div>

          {items.length === 0 ? (
            /* Empty cart */
            <div className="text-center py-24 border border-border rounded bg-card">
              <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
              <h2 className="font-display text-2xl text-foreground mb-3">
                YOUR CART IS EMPTY
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
                Gear up with the statement pieces that let Washington know you're done being silent.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/shop" className="font-display tracking-wider">
                  <ArrowLeft className="mr-2 h-4 w-4" /> BROWSE THE SHOP
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Column headers (desktop) */}
                <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 border-b border-border">
                  <span className="font-heading text-xs tracking-widest text-muted-foreground uppercase">Product</span>
                  <span className="font-heading text-xs tracking-widest text-muted-foreground uppercase text-center">Price</span>
                  <span className="font-heading text-xs tracking-widest text-muted-foreground uppercase text-center">Quantity</span>
                  <span className="font-heading text-xs tracking-widest text-muted-foreground uppercase text-right">Total</span>
                  <span className="w-10" />
                </div>

                {items.map((item) => {
                  const key = getKey(item);
                  const itemTotal = (parseFloat(item.product.price.replace("$", "")) * item.qty).toFixed(2);

                  return (
                    <div
                      key={key}
                      className="bg-card border border-border rounded p-4 md:p-6 md:grid md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:gap-4 md:items-center"
                    >
                      {/* Product info */}
                      <div className="flex gap-4 items-center mb-4 md:mb-0">
                        <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden border border-border">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-sm text-foreground leading-tight truncate">
                            {item.product.name}
                          </h3>
                          {item.color && (
                            <p className="font-heading text-xs text-muted-foreground mt-1">
                              Color: {item.color}
                            </p>
                          )}
                          {item.size && (
                            <p className="font-heading text-xs text-muted-foreground">
                              Size: {item.size}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <p className="font-display text-lg text-primary text-center hidden md:block">
                        {item.product.price}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center justify-center mb-4 md:mb-0">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQty(key, item.qty - 1)}
                            className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 py-1 font-display text-sm text-foreground border-x border-border min-w-[2.5rem] text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(key, item.qty + 1)}
                            className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      {/* Item total */}
                      <p className="font-display text-lg text-foreground text-right hidden md:block">
                        ${itemTotal}
                      </p>

                      {/* Mobile price row */}
                      <div className="flex items-center justify-between md:hidden mb-4">
                        <p className="font-display text-lg text-primary">{item.product.price}</p>
                        <p className="font-display text-lg text-foreground">${itemTotal}</p>
                      </div>

                      {/* Remove */}
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            removeItem(key);
                            toast.info(`${item.product.name} removed from cart`);
                          }}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Actions row */}
                <div className="flex items-center justify-between pt-4">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/shop" className="font-heading text-xs tracking-wider uppercase">
                      <ArrowLeft className="mr-1 h-3 w-3" /> Continue Shopping
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      clearCart();
                      toast.info("Cart cleared");
                    }}
                    className="font-heading text-xs tracking-wider uppercase text-muted-foreground hover:text-destructive"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded p-6 sticky top-24">
                  <h3 className="font-display text-xl text-foreground mb-6">ORDER SUMMARY</h3>

                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                      <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-primary font-heading text-xs tracking-wider">CALCULATED AT CHECKOUT</span>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={donationEnabled}
                          onChange={(event) => setDonationEnabled(event.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded border-border bg-background text-primary"
                        />
                        <span className="font-body text-sm text-foreground leading-snug">
                          Add a donation to support veterans and survivor recovery.
                        </span>
                      </label>

                      {donationEnabled && (
                        <div className="mt-3 grid grid-cols-4 gap-2">
                          {donationOptions.map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => setSelectedDonation(amount)}
                              className={`border rounded px-2 py-2 font-heading text-xs tracking-wider uppercase transition-colors ${
                                selectedDonation === amount
                                  ? "border-primary text-primary"
                                  : "border-border text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              ${amount}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {donationAmount > 0 && (
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">Donation</span>
                        <span className="text-foreground">${donationAmount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="font-display text-lg text-foreground">TOTAL</span>
                    <span className="font-display text-2xl text-primary">${orderTotal.toFixed(2)}</span>
                  </div>

                  <Button
                    variant="default"
                    size="xl"
                    className="w-full font-display tracking-wider mb-3"
                    onClick={handleCheckout}
                  >
                    PROCEED TO CHECKOUT
                  </Button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    Taxes and shipping calculated at checkout. Donations go to your stated cause.
                  </p>

                  {/* Trust badges */}
                  <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <p className="font-heading text-[10px] tracking-widest text-muted-foreground uppercase">Secure</p>
                      <p className="font-heading text-[10px] tracking-wider text-primary uppercase">SSL Encrypted</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-[10px] tracking-widest text-muted-foreground uppercase">Shipping</p>
                      <p className="font-heading text-[10px] tracking-wider text-primary uppercase">USA Made</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-[10px] tracking-widest text-muted-foreground uppercase">Returns</p>
                      <p className="font-heading text-[10px] tracking-wider text-primary uppercase">30-Day Policy</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-[10px] tracking-widest text-muted-foreground uppercase">Support</p>
                      <p className="font-heading text-[10px] tracking-wider text-primary uppercase">Veteran Owned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default CartPage;
