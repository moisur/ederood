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
import { XMarkIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

type Suggestion = Product | Accessory;

// Helper pour créer un ID unique, doit être cohérent avec le contexte
const getUniqueId = (item: CartItem | Suggestion) => {
    // Si l'objet a une propriété 'type', c'est un CartItem
    if ('type' in item && (item.type === 'product' || item.type === 'accessory')) {
        return `${item.type}-${item.id}`;
    }
    // Sinon, c'est une Suggestion (Product ou Accessory), on détermine le type
    const type = 'tonality' in item ? 'product' : 'accessory';
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
  } = useCart();
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

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
    if (typeof price === 'number') {
      return price.toFixed(2).replace(".", ",") + " €";
    }
    return price; // Si c'est déjà une chaîne (ex: "99,90€")
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeCart}
        >
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl flex flex-col"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* -- HEADER -- */}
            <div className="p-6 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Votre Panier</h2>
              <button
                onClick={closeCart}
                className="text-gray-500 hover:text-black transition-colors p-1"
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
                <motion.ul
                  key={cartItems.length} // Ajout d'une clé pour forcer le re-render de la liste
                  variants={{
                    visible: { transition: { staggerChildren: 0.07 } },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {cartItems.map((item) => (
                    <motion.li
                      key={getUniqueId(item)}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
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
                            {formatPrice(item.price)} x {item.quantity}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(getUniqueId(item))}
                        className="text-gray-400 hover:text-red-600 transition-colors p-2"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* -- SUGGESTIONS -- */}
            {suggestions.length > 0 && cartItems.length > 0 && (
              <div className="px-6 py-6 border-t border-gray-200 bg-gray-50/80">
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
                        <p className="text-gray-600 text-sm">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors p-2 rounded-full shadow-sm"
                      >
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* -- FOOTER / TOTAL -- */}
            <div className="p-6 border-t border-gray-200 mt-auto bg-white">
              <div className="flex justify-between items-baseline font-bold text-xl mb-6">
                <span className="text-gray-700">Total</span>
                <span className="text-3xl text-gray-900">
                  {getCartTotal()}€
                </span>
              </div>
              <Link href="/contact" passHref>
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
                          boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
