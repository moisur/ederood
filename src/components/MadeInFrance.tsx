// src/components/MadeInFrance.tsx

"use client"; // Pour les animations Framer Motion

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Variants d'animation (réutilisés pour la cohérence)
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MadeInFrance = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <motion.div
        className="container mx-auto px-6 lg:px-8 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold font-serif text-gray-900 sm:text-6xl"
            variants={itemVariant}
          >
            Fabriqué ici. Pas de <em className="italic">compromis</em>.
          </motion.h2>
          <motion.p
            className="mt-6 text-xl font-semibold tracking-wide"
            style={{ color: "#EEC980" }} // Notre couleur signature
            variants={itemVariant}
          >
            Nous sommes l'un des rares ateliers en France à fabriquer 100% de
            nos handpans.
          </motion.p>
        </div>

        {/* Un séparateur animé, plus élégant qu'une simple bordure */}
        <motion.div
          className="w-24 h-px bg-gray-300 mx-auto my-16"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <motion.div
            className="space-y-6 text-lg text-gray-700"
            variants={itemVariant}
          >
            <p>
              En effet, <strong>90% des handpans</strong> disponibles sur
              internet proviennent d'Asie. Derrière les appellations
              commerciales comme <em>« artisanal »</em> ou <em>« France »</em>{" "}
              se cachent souvent des instruments de moindre qualité, conçus sans
              la passion et le savoir-faire d'un véritable luthier.
            </p>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Le risque d'un instrument sans âme
              </h4>
              <p>
                Outre la qualité sonore incomparable, tous les handpans
                nécessitent un entretien et un <strong>ré-accordage</strong>{" "}
                périodique, que nous préconisons tous les 18 à 24 mois pour
                maintenir leur justesse harmonique.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-lg text-gray-700"
            variants={itemVariant}
          >
            <p>
              Seuls des <strong>artisans fabricants confirmés</strong> sont en
              mesure d'effectuer ce travail de précision. Sans cet entretien
              essentiel, un instrument perd rapidement son intérêt musical.
            </p>
            {/* L'avertissement, transformé en affirmation de valeur */}
            <div className="border-l-4 p-4" style={{ borderColor: "#EEC980" }}>
              <p className="font-semibold text-gray-800">
                Ni nous, ni nos confrères en France, ne ré-accordons les
                instruments d'importation. À court terme, un achat sans service
                après-vente, c'est la quasi-certitude de perdre la valeur et le
                plaisir de votre instrument.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-20 text-center" variants={itemVariant}>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href="/models"
              className="inline-flex items-center gap-x-3 rounded-full py-4 px-8 text-lg font-bold text-black shadow-lg"
              style={{ backgroundColor: "#EEC980" }}
            >
              Découvrir nos créations françaises
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MadeInFrance;
