// components/HeroIntroduction.tsx

"use client";

import React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) } },
};

const HeroIntroduction = () => {
  return (
    <section className="relative bg-gray-900 text-white py-24 sm:py-32">
      <Image
        src="/images/fabrication-handpan.webp"
        layout="fill"
        objectFit="cover"
        alt="..."
        className="opacity-20"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="text-4xl font-bold font-serif sm:text-5xl"
            variants={itemVariant}
          >
            Fabricant Français de Handpan
          </motion.h2>

          <motion.div
            className="mt-12 space-y-8 text-lg leading-relaxed text-gray-300"
            variants={itemVariant}
          >
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#EEC980" }}
              >
                Un Handpan de qualité
              </h3>
              <p>
                Le Handpan Endro® est réalisé par Ederod, fabricant français de
                Handpans. Le Handpan fait partie de la famille des instruments
                de musique à percussion mélodique en acier. Cette famille
                regroupe des instruments dérivés du steelpan ou steeldrum des
                Caraïbes, qui se jouent avec des baguettes tandis que les
                Handpans se jouent avec les mains.
              </p>
              <p className="mt-4">
                Le Handpan Endro® se détermine par une approche de jeu très
                intuitive et ludique en raison de son ergonomie et du fait que
                le Handpan Endro® est accordé sur un mode pré-déterminé. Le
                Handpan Endro® est sensible, une légère impulsion du bout des
                doigts suffit à déclencher la résonance et la note se met à
                sonner.
              </p>
            </div>
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#EEC980" }}
              >
                Le timbre du Handpan Endro®
              </h3>
              <p>
                Le timbre du Handpan Endro® se caractérise à la fois par une
                sonorité chaude, douce et par une forte résonance vibratoire
                comparable aux tintements de la cloche ou du verre de cristal.
                Cela, grâce aux qualités intrinsèques de la table d'acier
                utilisée, permettant l'émission de riches harmoniques accordées
                en quinte.
              </p>
              <p className="mt-4">
                Les qualités acoustiques ainsi que l'aisance de jeu offrent de
                multiples approches possibles du Handpan Endro®. Elles peuvent
                être ludiques et récréatives, purement musicales ou encore
                ouvertes sur la méditation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroIntroduction;
