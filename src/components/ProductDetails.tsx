// components/ProductDetails.tsx

"use client"; // Ce composant a besoin d'interactivité côté client

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "../app/types";

interface ProductDetailsProps {
  product: Product;
}

// Variants pour l'animation en cascade du conteneur
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Délai entre chaque enfant
    },
  },
};

// Variants pour chaque item qui apparaît du bas
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <motion.div
      className="container mx-auto px-6 py-20 lg:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Galerie d'images si disponible */}
      {product.gallery && product.gallery.length > 0 && (
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.gallery.map((image: string, index: number) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Colonne 1: Description & Histoire */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <h2 className="text-3xl font-semibold font-serif text-gray-800 mb-6">
            L'Âme de l'<em className="italic">{product.name}</em>
          </h2>

          {/* Description détaillée si disponible */}
          {product.detailedDescription ? (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {product.detailedDescription.title}
              </h3>
              {product.detailedDescription.paragraphs.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          )}
        </motion.div>

        {/* Colonne 2: Spécifications & Achat */}
        <motion.div className="space-y-8" variants={itemVariants}>
          {/* Le prix, mis en majesté */}
          <div className="text-center">
            {product.originalPrice && (
              <p className="text-2xl text-gray-500 line-through mb-2">
                {product.originalPrice} €
              </p>
            )}
            <p className="text-5xl font-bold text-gray-900">{product.price} €</p>
            <p className="text-sm text-gray-500">TTC</p>
            {product.promo && (
              <span className={`inline-block mt-2 px-3 py-1 text-sm font-semibold text-white rounded-full ${product.promo.color}`}>
                {product.promo.text}
              </span>
            )}
          </div>

          {/* Les caractéristiques */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <div className="flex justify-between items-center text-md">
              <strong className="text-gray-800">Tonalité</strong>
              <span className="text-gray-600">{product.tonality}</span>
            </div>
            <div className="w-full h-px bg-gray-200" />
            <div className="flex justify-between items-center text-md">
              <strong className="text-gray-800">Gamme</strong>
              <span className="text-gray-600">{product.scale}</span>
            </div>
            <div className="w-full h-px bg-gray-200" />
            <div className="flex justify-between items-center text-md">
              <strong className="text-gray-800">Notes</strong>
              <span className="text-gray-600">{product.notes}</span>
            </div>

            {/* Caractéristiques techniques supplémentaires */}
            {product.features && product.features.map((feature: { name: string; value: string }, index: number) => (
              <div key={index}>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex justify-between items-center text-md">
                  <strong className="text-gray-800">{feature.name}</strong>
                  <span className="text-gray-600">{feature.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Le bouton d'action, la touche finale */}
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
        </motion.div>
      </div>
    </motion.div>
  );
};
