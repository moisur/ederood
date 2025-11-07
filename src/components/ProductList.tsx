// components/ProductList.tsx

"use client"; // Le composant utilise motion, il doit être client

import React from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard"; // Assurez-vous que l'import est correct
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cette propriété est gérée par la prop 'index' dans la carte enfant
    },
  },
};

const ProductList = () => {
  return (
    <section id="models" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            L'Art de nos{" "}
            <em className="font-serif italic" style={{ color: "#EEC980" }}>
              Créations
            </em>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque pièce est le fruit d'une passion et d'un savoir-faire unique.
            Découvrez les modèles qui définissent notre excellence.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            // La prop 'index' est maintenant passée à ProductCard pour l'animation en cascade
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductList;
