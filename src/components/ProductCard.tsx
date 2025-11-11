// components/ProductCard.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Easing, Variants } from "framer-motion";
import { Product } from "@/types"; // Assurez-vous que votre type Product est bien défini et exporté

interface ProductCardProps {
  product: Product;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as Easing },
  },
};

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const defaultTransition = (cardVariants.visible as { transition?: object }).transition || {};

  const cardAnimation = {
    ...cardVariants.visible,
    transition: {
      ...defaultTransition,
      delay: index * 0.1, // Staggered animation delay
    },
  };

  const [currentImage, setCurrentImage] = useState(product.imageUrl);

  const handleMouseEnter = () => {
    const pubImage = index % 2 === 0 ? '/images/Ederod Pub 1.png' : '/images/Ederod Pub 2.png';
    setCurrentImage(pubImage);
  };

  const handleMouseLeave = () => {
    setCurrentImage(product.imageUrl);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={cardAnimation}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          {/* Section Image & Promo */}
          <div className="relative">
            {product.promo && (
              <div
                className="absolute top-4 right-4 text-black font-bold text-xs py-1 px-3 rounded-full z-10"
                style={{ backgroundColor: "#EEC980" }} // Notre couleur signature pour la cohérence
              >
                {product.promo.text}
              </div>
            )}
            <Image
              src={currentImage}
              alt={product.name}
              width={400}
              height={400}
              className="w-full aspect-square object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          {/* Section Contenu */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {product.features.find((f) => f.name === "Gamme")?.value}
              </span>
              <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {product.notes} notes
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 flex-grow">
              {product.name}
            </h3>

            <p className="text-gray-600 mt-2 text-sm">{product.description}</p>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold text-gray-900">
                  {product.price} €
                </p>
                {product.originalPrice && (
                  <p className="text-md font-medium text-gray-500 line-through">
                    {product.originalPrice} €
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
