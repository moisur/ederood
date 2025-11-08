// src/context/CartContext.tsx

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types";
import { Accessory } from "@/data/accessories";

// Un type unifié pour tout ce qui peut être ajouté au panier
type CartableItem = Product | Accessory;

// Le type de l'objet qui sera réellement dans le panier
export interface CartItem {
  id: number;
  type: 'product' | 'accessory';
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartableItem) => void;
  removeFromCart: (uniqueId: string) => void;
  clearCart: () => void;
  getCartTotal: () => string;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Helper pour créer un ID unique
const getUniqueId = (item: { type: 'product' | 'accessory', id: number }) => `${item.type}-${item.id}`;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (itemToAdd: CartableItem) => {
    const itemType = 'tonality' in itemToAdd ? 'product' : 'accessory';
    const uniqueId = getUniqueId({ type: itemType, id: Number(itemToAdd.id) });

    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((i) => getUniqueId(i) === uniqueId);

      if (itemInCart) {
        return prevItems.map((i) =>
          getUniqueId(i) === uniqueId ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Le prix est maintenant toujours un nombre, plus besoin de conversion
        const newItem: CartItem = {
          id: Number(itemToAdd.id),
          type: itemType,
          name: itemToAdd.name,
          price: itemToAdd.price,
          imageUrl: itemToAdd.imageUrl,
          quantity: 1,
        };
        return [...prevItems, newItem];
      }
    });
    openCart();
  };

  const removeFromCart = (uniqueId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => getUniqueId(item) !== uniqueId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2).replace(".", ",");
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
