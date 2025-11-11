// src/components/CartSidebar.tsx

"use client";

import { useCart, CartItem } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { accessories, Accessory } from "@/data/accessories";
import { Product } from "@/types";
import {
  XMarkIcon,
  PlusIcon,
  TrashIcon,
  MinusIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

type Suggestion = Product | Accessory;

// Helper pour créer un ID unique, doit être cohérent avec le contexte
const getUniqueId = (item: CartItem | Suggestion) => {
  if ("type" in item && (item.type === "product" || item.type === "accessory")) {
    return `${item.type}-${item.id}`;
  }
  const type = "tonality" in item ? "product" : "accessory";
  return `${type}-${item.id}`;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%", transition: { duration: 0.5 } },
  exit: { x: "100%", transition: { duration: 0.4 } },
};

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    getCartTotal,
    isCartOpen,
    closeCart,
    addToCart,
    applyPromoCode,
    promoCodeStatus,
    promoCodeMessage,
    updateQuantity,
  } = useCart();
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [promoCodeInput, setPromoCodeInput] = useState("");

  const handleApplyPromoCode = () => {
    applyPromoCode(promoCodeInput);
  };

  useEffect(() => {
    if (isCartOpen) {
      const cartUniqueIds = new Set(cartItems.map(getUniqueId));
      const allItems: Suggestion[] = [...products, ...accessories];

      const filteredSuggestions = allItems.filter(
        (item) => !cartUniqueIds.has(getUniqueId(item))
      );

      const shuffled = filteredSuggestions.sort(() => 0.5 - Math.random());
      setSuggestions(shuffled.slice(0, 2));
    }
  }, [isCartOpen, cartItems]);

  const formatPrice = (price: number | string) => {
    if (typeof price === "number") {
      return price.toFixed(2).replace(".", ",") + " €";
    }
    return price;
  };

  // Composant interne pour les suggestions pour éviter la répétition du code
  const SuggestionsContent = () => (
    <>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Vous aimerez aussi...
      </h3>
      <div className="space-y-4">
        {suggestions.map((item) => (
          <div key={getUniqueId(item)} className="flex items-center">
            <div className="relative w-12 h-12 rounded-md overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h4 className="font-semibold text-sm text-gray-800">
                {item.name}
              </h4>
              <p className="text-gray-600 text-sm">{formatPrice(item.price)}</p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors p-2 rounded-full shadow-sm"
              aria-label={`Ajouter ${item.name} au panier`}
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex justify-end"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeCart}
        >
          <motion.div
            className="h-full w-full max-w-4xl bg-gray-100 shadow-2xl flex flex-col lg:flex-row"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* COLONNE 1 : Panier Principal (prend 2/3 de la largeur sur desktop) */}
            <div className="flex flex-col w-full lg:w-2/3 bg-white h-full">
              {/* -- HEADER -- */}
              <div className="p-6 flex justify-between items-center border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  Votre Panier
                </h2>
                <button
                  onClick={closeCart}
                  className="text-gray-500 hover:text-black transition-colors p-1"
                  aria-label="Fermer le panier"
                >
                  <XMarkIcon className="w-7 h-7" />
                </button>
              </div>

              {/* -- ITEMS LIST -- */}
              <div className="flex-grow overflow-y-auto px-6 py-4">
                {cartItems.length === 0 ? (
                  <div className="text-center text-gray-500 pt-20">
                    <p className="text-lg">Votre panier est vide.</p>
                    <p className="mt-2 text-sm">
                      Explorez nos créations pour trouver votre perle rare.
                    </p>
                  </div>
                ) : (
                  <ul>
                    {cartItems.map((item) => (
                      <motion.li
                        key={getUniqueId(item)}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between py-4 border-b border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              updateQuantity(
                                getUniqueId(item),
                                item.quantity - 1
                              )
                            }
                            className="text-gray-400 hover:text-red-600 transition-colors p-2"
                            aria-label={`Retirer un ${item.name} du panier`}
                          >
                            {item.quantity > 1 ? (
                              <MinusIcon className="w-5 h-5" />
                            ) : (
                              <TrashIcon className="w-5 h-5" />
                            )}
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                getUniqueId(item),
                                item.quantity + 1
                              )
                            }
                            className="text-gray-400 hover:text-green-600 transition-colors p-2"
                            aria-label={`Ajouter un ${item.name} au panier`}
                          >
                            <PlusIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              {/* -- SUGGESTIONS (version mobile, visible uniquement sur petits écrans) -- */}
              {suggestions.length > 0 && cartItems.length > 0 && (
                <div className="px-6 py-6 border-t border-gray-200 bg-gray-50/80 lg:hidden">
                  <SuggestionsContent />
                </div>
              )}

              {/* -- FOOTER / TOTAL -- */}
              <div className="p-6 border-t border-gray-200 mt-auto bg-white">
                <div className="mb-4">
                  <label
                    htmlFor="promo-code"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Code promo
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo-code"
                      className="flex-grow border border-gray-300 rounded-l-md p-2 focus:ring-[#EEC980] focus:border-[#EEC980]"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      disabled={cartItems.length === 0}
                    />
                    <button
                      onClick={handleApplyPromoCode}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={cartItems.length === 0}
                    >
                      Appliquer
                    </button>
                  </div>
                  {promoCodeStatus === "success" && (
                    <p className="mt-2 text-sm text-green-600">
                      {promoCodeMessage}
                    </p>
                  )}
                  {promoCodeStatus === "error" && (
                    <p className="mt-2 text-sm text-red-600">
                      {promoCodeMessage}
                    </p>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-gray-700">
                    <span>Sous-total</span>
                    <span>{getCartTotal().subtotal}€</span>
                  </div>
                  {getCartTotal().discount > 0 && (
                    <div className="flex justify-between items-center text-green-600">
                      <span>Réduction</span>
                      <span>- {formatPrice(getCartTotal().discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-baseline font-bold text-xl pt-2 border-t border-gray-200">
                    <span className="text-gray-700">Total</span>
                    <span className="text-3xl text-gray-900">
                      {getCartTotal().total}€
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                  <ShieldCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                  Paiement sécurisé et garantie satisfaction
                </div>
                <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2 text-green-600" />
                  Contact direct avec votre fabricant pour toute question.
                </div>
                <Link href="/checkout">
                  <motion.button
                    className="w-full text-black font-bold py-4 px-6 rounded-full text-lg shadow-lg"
                    style={{
                      backgroundColor: "#EEC980",
                      opacity: cartItems.length === 0 ? 0.5 : 1,
                    }}
                    whileHover={
                      cartItems.length > 0
                        ? {
                            scale: 1.05,
                            boxShadow:
                              "0px 10px 30px rgba(238, 201, 128, 0.7)",
                          }
                        : {}
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    disabled={cartItems.length === 0}
                    onClick={closeCart}
                  >
                    Procéder au paiement
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* COLONNE 2 : Suggestions (cachée sur mobile, prend 1/3 de la largeur sur desktop) */}
            {suggestions.length > 0 && cartItems.length > 0 && (
              <div className="hidden lg:block w-full lg:w-1/3 p-6 overflow-y-auto">
                <SuggestionsContent />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
