// src/components/FeaturedAccessories.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { accessories } from "@/data/accessories";
import { AccessoryCard } from "@/components/AccessoryCard"; // On réutilise NOTRE composant !

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FeaturedAccessories = () => {
  // Conseil : Si vous ne voulez montrer qu'une sélection, faites-le ici.
  // Par exemple, pour n'en montrer que 4 :
  const featured = accessories.slice(0, 4);

  return (
    <section className="bg-gray-50/80 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Le bloc titre, signature de notre DA */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2
            className="text-base font-semibold leading-7"
            style={{ color: "#EEC980" }}
          >
            Pour Sublimer Votre Son
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Les Compagnons de votre{" "}
            <em className="font-serif italic">Instrument</em>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chaque accessoire a été pensé pour protéger, entretenir et enrichir
            votre expérience musicale.
          </p>
        </div>

        {/* La grille animée qui utilise notre composant AccessoryCard */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featured.map((accessory) => (
            <AccessoryCard key={accessory.id} accessory={accessory} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAccessories;
