// src/components/AccessoryCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Accessory } from "@/data/accessories";

interface AccessoryCardProps {
  accessory: Accessory;
}

export const AccessoryCard = ({ accessory }: AccessoryCardProps) => {
  return (
    <motion.div
      className="group"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <Link
          href={`/accessoires/${accessory.slug}`}
          className="block overflow-hidden"
        >
          <div className="relative aspect-square">
            <Image
              src={accessory.imageUrl}
              alt={accessory.name}
              fill
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            {accessory.hoverImageUrl && (
              <Image
                src={accessory.hoverImageUrl}
                alt={`${accessory.name} (survol)`}
                fill
                className="object-cover w-full h-full transition-transform duration-500 scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100"
              />
            )}
          </div>
        </Link>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900">{accessory.name}</h3>
          <p className="mt-2 text-gray-600 leading-relaxed flex-grow">
            {accessory.description}
          </p>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-2xl font-bold text-gray-800">
              {accessory.price}
            </p>
            <Link href={`/accessoires/${accessory.slug}`}>
              <motion.div
                className="inline-block text-black font-semibold py-2 px-5 rounded-full text-sm"
                style={{ backgroundColor: "#EEC980" }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 5px 20px rgba(238, 201, 128, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Plus de détails
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
