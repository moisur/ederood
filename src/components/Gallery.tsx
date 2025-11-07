// components/Gallery.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Easing, Variants } from "framer-motion";
import { ImageModal } from "./ImageModal"; // Assurez-vous que le chemin d'import est correct

// La structure de données, complète avec les histoires d'artisan
const imageItems = [
  {
    src: "/images/ederod-fabricant-francais-handpan.jpg",
    alt: "Fabricant Français Handpan Endro",
    caption: "L'atelier du son",
    className: "md:col-span-2",
    story:
      "Chaque handpan commence sa vie ici, dans le calme de l'atelier. Ce n'est pas juste du métal ; c'est une toile vierge qui attend de recevoir sa voix. La lumière, l'acoustique de la pièce, tout joue un rôle dans la naissance de son futur timbre.",
  },
  {
    src: "/images/fabricant-handpan-francais.jpg",
    alt: "Fabricant Français Handpan Endro - vue en plongée",
    caption: "Précision martelée",
    className: "",
    story:
      "Le martelage n'est pas une question de force, mais de mémoire musculaire et d'écoute. Chaque coup de marteau, précis à une fraction de millimètre, façonne l'harmonique. C'est un dialogue silencieux entre l'artisan et l'acier.",
  },
  {
    src: "/images/fabricant-handpan-francais-1000x662.jpg",
    alt: "Fabricant Français Handpan Endro - gros plan vue de dessus",
    caption: "Chaque note compte",
    className: "",
    story:
      "La surface d'un handpan est un paysage de vallées et de collines sonores. Orienter l'instrument pour que chaque note ait l'espace de respirer est un art en soi, un équilibre délicat entre physique acoustique et intuition musicale.",
  },
  {
    src: "/images/close-up-handpan-francais-ederod.jpg",
    alt: "Fabricant Français Handpan Endro - gros plan note",
    caption: "La note juste",
    className: "md:col-span-2",
    story:
      "Ceci est le 'dimple', le cœur d'une note. Sa forme concave parfaite est obtenue après des centaines de frappes ajustées. C'est le secret d'une note claire, sans interférence, qui vibrera pendant de longues secondes. C'est notre signature acoustique.",
  },
  {
    src: "/images/ederod-fabricant-francais-handpan-1000x662.jpg",
    alt: "Ederod Fabricant Français Handpan - vue plongée",
    caption: "Harmonie des formes",
    className: "",
    story:
      "L'harmonie n'est pas que sonore, elle est aussi visuelle. La courbe parfaite, le reflet de la lumière, la finition satinée de l'acier... Un instrument Endro® doit être aussi beau à regarder qu'à écouter. C'est notre promesse d'un artisanat total.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
};

const Gallery = () => {
  // État pour suivre quelle image est actuellement sélectionnée pour la modale
  const [selectedImage, setSelectedImage] = useState<
    (typeof imageItems)[0] | null
  >(null);

  return (
    // On utilise un React Fragment <> pour retourner plusieurs éléments au même niveau
    <>
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2
              className="text-base font-semibold leading-7"
              style={{ color: "#EEC980" }}
            >
              Notre Savoir-Faire en Images
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Au cœur de la <em className="font-serif italic">Création</em>
            </p>
          </div>

          {/* La Mosaïque Animée */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {imageItems.map((image, index) => (
              <motion.div
                key={index}
                className={`group relative rounded-xl overflow-hidden shadow-lg cursor-pointer ${image.className}`}
                variants={imageVariant}
                onClick={() => setSelectedImage(image)} // Au clic, on met à jour l'état
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                {/* Overlay qui apparaît au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Légende qui glisse depuis le bas */}
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white text-lg font-semibold transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-20">
            <motion.a
              href="/videos"
              className="inline-block text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg"
              style={{ backgroundColor: "#EEC980" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Explorer nos créations en vidéo
            </motion.a>
          </div>
        </div>
      </section>

      {/* La Modale, contrôlée par AnimatePresence pour les animations d'entrée/sortie */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)} // La fonction pour fermer la modale
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
