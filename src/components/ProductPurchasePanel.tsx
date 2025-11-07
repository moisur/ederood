// components/ProductPurchasePanel.tsx
"use client";
import { motion } from "framer-motion";
import { Product } from "@/types";

export const ProductPurchasePanel = ({ product }: { product: Product }) => {
  return (
    <div className="bg-gray-50/80 p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
      <div>
        {product.promo && (
          <span
            className="text-black font-bold text-xs py-1 px-3 rounded-full mr-2"
            style={{ backgroundColor: "#EEC980" }}
          >
            {product.promo.text}
          </span>
        )}
        <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
          {product.features.find((f) => f.name === "Gamme")?.value}
        </span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">
        {product.name}
      </h1>
      <div className="flex items-baseline gap-4">
        <p className="text-4xl font-bold text-gray-900">{product.price} €</p>
        {product.originalPrice && (
          <p className="text-xl font-medium text-gray-500 line-through">
            {product.originalPrice} €
          </p>
        )}
      </div>
      <div className="pt-6 border-t border-gray-200 space-y-4">
        {product.features.map((feature) => (
          <div key={feature.name} className="flex justify-between text-md">
            <strong className="text-gray-800">{feature.name}</strong>
            <span className="text-gray-600">{feature.value}</span>
          </div>
        ))}
      </div>
      <motion.button
        className="w-full text-black font-bold py-4 px-6 rounded-full text-lg shadow-lg"
        style={{ backgroundColor: "#EEC980" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        Ajouter au panier
      </motion.button>
    </div>
  );
};
