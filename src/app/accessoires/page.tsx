// src/app/accessoires/page.tsx

"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { accessories } from "@/data/accessories";
import { AccessoryCard } from "@/components/AccessoryCard";
import FeaturedAccessories from "@/components/FeaturedAccessories";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AccessoriesPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
        {/* Titre de page signature */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2
            className="text-base font-semibold leading-7"
            style={{ color: "#EEC980" }}
          >
            L'Écrin de votre Instrument
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Les Essentiels pour votre <em className="font-serif italic">Art</em>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chaque accessoire est sélectionné pour sa qualité, sa durabilité et
            sa capacité à préserver et sublimer votre expérience musicale.
          </p>
        </div>

        {/* Grille de produits animée */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {accessories.map((accessory) => (
            <AccessoryCard key={accessory.id} accessory={accessory} />
          ))}
        </motion.div>
        <FeaturedAccessories />
      </main>
      <Footer />
    </div>
  );
};

export default AccessoriesPage;
