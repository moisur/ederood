// pages/atelier.tsx

"use client"; // Page avec animations, donc composant client

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery"; // Import de la galerie
import { motion } from "framer-motion";
import Link from "next/link";

// On structure les étapes du processus pour plus de clarté
const processSteps = [
  {
    title: "Sélection des Matériaux",
    description:
      "Tout commence par le choix des meilleures tôles d'acier. La qualité du matériau est primordiale pour garantir la richesse harmonique et la stabilité de l'instrument.",
  },
  {
    title: "Façonnage & Accordage",
    description:
      "Chaque note est martelée à la main avec une précision extrême. L'accordage est une étape cruciale qui demande une oreille experte et une patience infinie pour atteindre la perfection.",
  },
  {
    title: "Finitions & Traitement",
    description:
      "L'instrument est ensuite traité thermiquement pour stabiliser l'accordage et le protéger. Des finitions personnalisées peuvent être appliquées pour un rendu unique.",
  },
];

const AtelierPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        {/* --- ACTE I : LA RENCONTRE --- */}
        <section className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Image de l'artisan */}
            <motion.div
              className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/fabrication-handpan.webp" // Nouvelle image
                alt="Fabrication d'un handpan dans l'atelier Ederod"
                width={800}
                height={533}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Texte de présentation */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2
                className="text-base font-semibold leading-7"
                style={{ color: "#EEC980" }}
              >
                L'Artisan Luthier
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Florent <em className="font-serif italic">Recouvreux</em>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Passionné par la musique et le travail du métal, Florent a
                consacré des années à perfectionner l'art du handpan. Chaque
                instrument est le fruit d'un{" "}
                <strong>savoir-faire unique</strong>, alliant techniques
                traditionnelles et innovations acoustiques. Son objectif : créer
                des instruments qui possèdent une <em>âme</em> et une{" "}
                <em>voix</em>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- ACTE II : LE PROCESSUS --- */}
        <section className="bg-gray-50/80 py-24 sm:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <h2
                className="text-base font-semibold leading-7"
                style={{ color: "#EEC980" }}
              >
                Un Savoir-Faire Méticuleux
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Les secrets de{" "}
                <em className="font-serif italic">fabrication</em>
              </p>
            </div>

            {/* Timeline verticale */}
            <div className="relative max-w-2xl mx-auto">
              <div
                className="absolute left-4 top-4 h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              ></div>
              <motion.ul
                className="space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              >
                {processSteps.map((step, index) => (
                  <motion.li
                    key={index}
                    className="relative pl-12"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg text-black"
                      style={{ backgroundColor: "#EEC980" }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        {/* --- ACTE III : L'INVITATION --- */}
        <section className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            className="text-center max-w-3xl mx-auto bg-gray-50 p-10 rounded-2xl border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Une invitation à la{" "}
              <em className="font-serif italic">découverte</em>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              L'atelier n'est pas seulement un lieu de fabrication, c'est un
              espace de création et de partage. Florent vous invite à découvrir
              son univers et à ressentir la magie qui opère lorsqu'un simple
              morceau de métal se transforme en un instrument vibrant
              d'émotions.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg"
                style={{ backgroundColor: "#EEC980" }}
                // whileHover et transition sont des props de motion.a, pas de Link
                // Si vous voulez des animations, vous devrez envelopper le Link dans motion.div ou utiliser un autre élément
              >
                Prendre Rendez-vous à l'Atelier
              </Link>
            </div>
          </motion.div>
        </section>
        {/* --- ACTE IV : LA GALERIE --- */}
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default AtelierPage;