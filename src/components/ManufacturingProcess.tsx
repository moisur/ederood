// components/ManufacturingProcess.tsx

"use client";

import React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) } },
};

const ManufacturingProcess = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <motion.div
        className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="relative w-full h-96 lg:h-[600px] rounded-xl overflow-hidden shadow-lg"
          variants={itemVariant}
        >
          <Image
            src="/uploads/2023/10/Ederod-fabricant-handpan-francais-vue-de-face-1.jpg"
            alt="Fabrication artisanale de handpan dans l'atelier Ederod"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div className="space-y-8" variants={itemVariant}>
          <h2 className="text-4xl font-bold font-serif text-gray-900 sm:text-5xl">
            La fabrication du Handpan Endro®
          </h2>

          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                Une fabrication artisanale
              </h3>
              <p>
                La fabrication du Handpan Endro® est artisanale, il est
                entièrement réalisé dans notre atelier à Besançon. La
                fabrication d'un Handpan Endro® requiert beaucoup d'énergie et
                de savoir faire. Un Handpan Endro® nécessite de nombreuses
                heures de travail et de nombreuses étapes de fabrication
                différentes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                L'accordage du Handpan
              </h3>
              <p>
                L'accordage est une étape clé dans le processus de fabrication
                du Handpan Endro®, c'est un art très difficile à acquérir et
                d'une grande exigence. La maîtrise de l'accordage d'un handpan
                Endro® requiert un réel dévouement, des milliers d'heures de
                pratique et d'apprentissage. Il nécessite donc d'y être
                entièrement consacré, chaque jour, pendant plusieurs années
                consécutives.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                Un Handpan de qualité
              </h3>
              <p>
                Parce-que l'évolution ne s’arrête jamais, nous sommes
                continuellement à la recherche de perfectionnement. Nous sommes
                actuellement à la cinquième génération du Handpan Endro®. Cette
                cinquième génération marque un réel tournant dans l'évolution de
                notre processus de fabrication du Handpan Endro® et dans notre
                technique d'accordage et permet aujourd'hui de vous proposer un
                Handpan Endro® d'une excellente qualité.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ManufacturingProcess;
