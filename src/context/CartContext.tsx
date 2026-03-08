import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  color: string;
  size: string;
  qty: number;
}

function cartKey(item: { product: Product; color: string; size: string }) {
  return `${item.product.id}__${item.color}__${item.size}`;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (key: string) => void;
  updateQty: (key: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getKey: (item: CartItem) => string;
}

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}

function parsePrice(price: string) {
  return parseFloat(price.replace("$", "")) || 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("wtp-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wtp-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const key = cartKey(newItem);
      const existing = prev.find((i) => cartKey(i) === key);
      if (existing) {
        return prev.map((i) =>
          cartKey(i) === key ? { ...i, qty: i.qty + newItem.qty } : i
        );
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (key: string) => {
    setItems((prev) => prev.filter((i) => cartKey(i) !== key));
  };

  const updateQty = (key: string, qty: number) => {
    if (qty < 1) return removeItem(key);
    setItems((prev) =>
      prev.map((i) => (cartKey(i) === key ? { ...i, qty } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + parsePrice(i.product.price) * i.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
        getKey: cartKey,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
