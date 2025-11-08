// components/ArtisanCallout.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { VideoCard } from "./VideoCard"; // Import du composant VideoCard

// Le composant n'a plus besoin de props car les informations sont en dur
export const ArtisanCallout = () => {
  const phoneNumber = "+33665312352";
  const formattedPhoneNumber = "06 65 31 23 52";
  const address = "41 Rue Amelot, 75011 Paris";
  const googleMapsLink = `https://share.google/4Ed1ZV0M9EFDSe2Tr`;

  return (
    <motion.section
      className="bg-white py-24 sm:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative bg-gray-50/80 rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Partie Gauche: Le Message et la Signature */}
            <div className="p-8 md:p-12">
              <h2
                className="text-base font-semibold"
                style={{ color: "#EEC980" }}
              >
                Une connexion directe
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Au-delà de l'écran, <br /> il y a{" "}
                <em className="font-serif italic">l'artisan</em>.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Un site internet est une belle vitrine, mais rien ne remplace la
                richesse d'un échange direct. Je suis Florent Recouvreux, le
                créateur de chaque Handpan Endro®, et je suis à votre
                disposition pour discuter de votre projet et vous partager ma
                passion.
              </p>
              {/* Remplacement de l'image par le composant VideoCard */}
              <div className="mt-8">
                <VideoCard videoId="YcIEpcXOq6o" title="HANDPAN EDEROD / GAMME HIJAZ" />
              </div>
            </div>

            {/* Partie Droite: Les Informations et Actions */}
            <div className="bg-gray-100/60 p-8 md:p-12 flex flex-col justify-center space-y-8">
              {/* Contact Téléphonique */}
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-6 h-6 text-gray-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Contact direct par téléphone
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">
                  Pour une réponse immédiate, le mieux est de nous appeler
                  directement.
                </p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="mt-3 inline-block text-2xl font-semibold text-gray-800 hover:text-black transition-colors"
                >
                  {formattedPhoneNumber}
                </a>
              </div>

              {/* Ligne de séparation subtile */}
              <div className="w-full h-px bg-gray-300/70"></div>

              {/* Atelier à Paris */}
              <div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-6 h-6 text-gray-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Notre Atelier à Paris
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">
                  Venez ressentir la vibration de nos instruments. L'atelier
                  vous est ouvert sur rendez-vous.
                </p>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-medium text-gray-800 hover:text-black transition-colors underline decoration-dotted underline-offset-4"
                >
                  {address}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArtisanCallout;
