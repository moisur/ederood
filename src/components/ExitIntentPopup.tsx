// components/ExitIntentPopup.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  PhoneIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

interface ExitIntentPopupProps {
  calendlyLink: string;
  phoneNumber: string;
}

export default function ExitIntentPopup({
  calendlyLink,
  phoneNumber,
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  // La logique useEffect pour détecter l'intention de sortie
  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // Détecte si la souris quitte le haut de la fenêtre (zone des onglets)
      if (e.clientY <= 0) {
        const actionTaken = localStorage.getItem("exitIntentActionTaken");
        const lastClosed = localStorage.getItem("exitIntentClosedAt");
        const twentyFourHours = 24 * 60 * 60 * 1000;

        // Ne rien faire si l'utilisateur a déjà cliqué sur un bouton
        if (actionTaken) return;

        // Ne rien faire si l'utilisateur a fermé le popup il y a moins de 24h
        if (
          lastClosed &&
          new Date().getTime() - parseInt(lastClosed, 10) < twentyFourHours
        ) {
          return;
        }

        setIsVisible(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const handleAction = () => {
    localStorage.setItem("exitIntentActionTaken", "true");
    setIsVisible(false);
  };
  const handleClose = () => {
    localStorage.setItem("exitIntentClosedAt", new Date().getTime().toString());
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              aria-label="Fermer"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h2
              className="text-base font-semibold"
              style={{ color: "#EEC980" }}
            >
              Une dernière question ?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Un artisan est là pour vous{" "}
              <em className="font-serif italic">répondre</em>.
            </p>
            <p className="text-gray-600 mt-4 mb-8">
              Vous avez un projet en tête ou une interrogation ? Le meilleur
              moyen d'avancer est d'en discuter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAction}
                className="flex items-center justify-center gap-2 text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg"
                style={{ backgroundColor: "#EEC980" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CalendarDaysIcon className="w-5 h-5" />
                Prendre RDV
              </motion.a>
              <motion.a
                href={`tel:${phoneNumber}`}
                onClick={handleAction}
                className="flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-black transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <PhoneIcon className="w-5 h-5" />
                Appeler l'atelier
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
