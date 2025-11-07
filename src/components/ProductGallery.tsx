// components/ProductGallery.tsx
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
  const allImages = [mainImage, ...gallery];

  return (
    <div className="space-y-4">
      <div className="relative aspect-1 w-full rounded-2xl overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {allImages.slice(0, 4).map((img, idx) => (
          <div
            key={idx}
            className={`cursor-pointer aspect-1 rounded-lg overflow-hidden ring-2 ring-transparent transition-all duration-200 ${
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
    </div>
  );
};
