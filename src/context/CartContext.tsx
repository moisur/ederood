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
  type: "product" | "accessory";
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartableItem) => void;
  removeFromCart: (uniqueId: string) => void;
  updateQuantity: (uniqueId: string, newQuantity: number) => void; // Fonction pour mettre à jour la quantité
  clearCart: () => void;
  getCartTotal: () => { subtotal: string; total: string; discount: number };
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  applyPromoCode: (code: string) => void;
  promoCodeStatus: "idle" | "success" | "error";
  promoCodeMessage: string;
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
const getUniqueId = (item: { type: "product" | "accessory"; id: number }) =>
  `${item.type}-${item.id}`;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [promoCodeStatus, setPromoCodeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [promoCodeMessage, setPromoCodeMessage] = useState("");

  const addToCart = (itemToAdd: CartableItem) => {
    const itemType = "tonality" in itemToAdd ? "product" : "accessory";
    const uniqueId = getUniqueId({ type: itemType, id: Number(itemToAdd.id) });

    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((i) => getUniqueId(i) === uniqueId);

      if (itemInCart) {
        return prevItems.map((i) =>
          getUniqueId(i) === uniqueId ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
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
    setCartItems((prevItems) =>
      prevItems.filter((item) => getUniqueId(item) !== uniqueId)
    );
  };

  const updateQuantity = (uniqueId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Si la quantité est 0 ou moins, on retire l'article
      removeFromCart(uniqueId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          getUniqueId(item) === uniqueId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyPromoCode = (code: string) => {
    if (code.toUpperCase() === "PROMO10") {
      setPromoCode(code.toUpperCase());
      setDiscount(0.1); // 10% discount
      setPromoCodeStatus("success");
      setPromoCodeMessage("Code promo appliqué avec succès !");
    } else {
      setPromoCode(null);
      setDiscount(0);
      setPromoCodeStatus("error");
      setPromoCodeMessage("Code promo invalide.");
    }
  };

  const getCartTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const total = subtotal * (1 - discount);
    return {
      subtotal: subtotal.toFixed(2).replace(".", ","),
      total: total.toFixed(2).replace(".", ","),
      discount: subtotal * discount,
    };
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        isCartOpen,
        openCart,
        closeCart,
        applyPromoCode,
        promoCodeStatus,
        promoCodeMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
