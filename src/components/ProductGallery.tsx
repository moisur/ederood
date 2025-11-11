// components/ProductGallery.tsx (Version "Fidèle à la Capture d'Écran")

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  mainImage: string;
  gallery: string[];
  alt: string;
}

export const ProductGallery = ({
  mainImage,
  gallery,
  alt,
}: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(mainImage);
  const allImages = [...new Set([mainImage, ...gallery])];

  return (
    // On utilise Flexbox pour la mise en page
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Colonne des Vignettes */}
      <div className="flex md:flex-col gap-4">
        {allImages.slice(0, 4).map((img, idx) => (
          <div
            key={img}
            className={`cursor-pointer w-1/4 md:w-24 flex-shrink-0 aspect-1 rounded-lg overflow-hidden ring-2 ring-transparent transition-all duration-200 ${
              activeImage === img ? "ring-[#EEC980]" : "hover:ring-[#EEC980]/50"
            }`}
            onClick={() => setActiveImage(img)}
          >
            <Image
              src={img}
              alt={`${alt} thumbnail ${idx + 1}`}
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      {/* Colonne de l'Image Principale */}
      <div className="relative flex-grow rounded-2xl overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={activeImage}
              alt={alt}
              width={800}
              height={800}
              className="object-cover w-full h-auto"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
