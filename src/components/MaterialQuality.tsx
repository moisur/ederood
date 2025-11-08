// components/MaterialQuality.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) } },
};

const MaterialQuality = () => {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <motion.div
        className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-8 lg:order-last" variants={itemVariant}>
          <h2 className="text-4xl font-bold font-serif text-gray-900 sm:text-5xl">
            Un Handpan de qualité
          </h2>

          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                Qualité des matériaux
              </h3>
              <p>
                Le facteur le plus déterminant dans la fabrication d'un handpan
                est en premier la qualité de la tôle utilisée. C'est pourquoi,
                la société Ederod a créé et produit ses propres coques d'acier
                pour la fabrication de ses handpans Endro®.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                Le son et la tenue de l'accordage
              </h3>
              <p>
                La force majeure de Ederod réside dans ses profondes
                connaissances en matière de métallurgie. Ces savoirs sont le
                socle de presque 10 années de recherche et développement en
                matière d’ingénierie et d'innovation de tôles d'acier
                strictement vouées à l'application musicale. Les aptitudes
                recherchées sont tournées vers le son et la tenue à l'accordage.
                Ainsi, nous sommes parvenus à la production d'une tôle d'acier
                parfaitement adaptée à la fabrication de handpan. Les qualités
                de nos tables d’harmonie sont remarquables, elles offrent un son
                unique et une longue tenue à l'accordage.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                Une tôle brevetée
              </h3>
              <p>
                La technologie que nous avons mis au point pour fabriquer des
                Handpans Endro® nous est propre. Elle fait l'objet de protection
                en terme de propriété intellectuelle. Nous avons obtenu un
                Brevet pour cette invention.
              </p>
              <p className="mt-4">
                Pour celles et ceux qui souhaitent en savoir plus sur la
                fabrication du Handpan Endro®, nous vous invitons à consulter
                notre page{" "}
                <Link
                  href="/notre-vision"
                  className="font-semibold underline"
                  style={{ color: "#EEC980" }}
                >
                  Notre vision du handpan par Ederod
                </Link>
                .
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative w-full h-96 lg:h-[600px] rounded-xl overflow-hidden shadow-lg"
          variants={itemVariant}
        >
          <Image
            src="/uploads/2023/10/Ederod-fabricant-handpan-francais-gros-plan-note-1.jpg"
            alt="Gros plan sur la tôle brevetée d'un handpan de qualité"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MaterialQuality;
