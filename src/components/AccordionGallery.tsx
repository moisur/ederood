// components/AccordionGallery.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Définir le type pour nos images pour la robustesse avec TypeScript
type ImageItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

// Les données pour la galerie. Vous pouvez remplacer par vos propres images.
const images: ImageItem[] = [
  {
    id: 1,
    src: "/images/close-up-handpan-francais-ederod.jpg",
    alt: "Handpan en gros plan",
    title: "Détail",
    subtitle: "Artisanal",
  },
  {
    id: 2,
    src: "/images/ederod-fabricant-francais-handpan.jpg",
    alt: "Fabricant de handpan français",
    title: "Savoir-faire",
    subtitle: "Français",
  },
  {
    id: 3,
    src: "/images/fabricant-francais-handpan.jpg",
    alt: "Fabricant français de handpan",
    title: "Passion",
    subtitle: "Musique",
  },
  {
    id: 4,
    src: "/images/fabricant-handpan-francais.jpg",
    alt: "Handpan français",
    title: "Harmonie",
    subtitle: "Sonorités",
  },
  {
    id: 5,
    src: "/images/fabrication-handpan.webp",
    alt: "Fabrication d'un handpan",
    title: "Création",
    subtitle: "Fait main",
  },
  {
    id: 6,
    src: "/images/ederod-fabricant-francais-handpan-1000x662.jpg",
    alt: "Ederod, fabricant français de handpan",
    title: "Excellence",
    subtitle: "Qualité",
  },
  {
    id: 7,
    src: "/images/fabricant-francais-handpan-1000x662.jpg",
    alt: "Un autre fabricant français de handpan",
    title: "Mélodie",
    subtitle: "Instrument",
  },
];

const AccordionGallery = () => {
  // L'état qui va suivre l'index du volet survolé. `null` si aucun n'est survolé.
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 p-4 sm:p-8">
      <motion.div
        className="flex h-[300px] w-full max-w-6xl gap-4"
        onMouseLeave={() => setExpandedIndex(null)} // Réinitialise quand on quitte la galerie
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative h-full flex-1 cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            onMouseEnter={() => setExpandedIndex(index)} // Met à jour l'index survolé
            // C'est ici que la magie opère. La propriété `flex` est animée.
            animate={{ flex: index === expandedIndex ? 5 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            // Style de fond pour éviter un flash de contenu
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Conteneur pour le contenu textuel */}
            <div className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
              {/* Le contenu n'apparaît que si le volet est élargi */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index === expandedIndex ? 1 : 0,
                  y: index === expandedIndex ? 0 : 20,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                <p className="text-sm text-gray-300">{image.subtitle}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AccordionGallery;
