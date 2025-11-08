// components/EmailPopup.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

interface EmailPopupProps {
  delay?: number;
}

export default function EmailPopup({ delay = 30000 }: EmailPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  // La logique useEffect pour déclencher l'affichage
  useEffect(() => {
    // Vérifie si l'utilisateur a déjà interagi pour ne pas le déranger
    const emailSubmitted = localStorage.getItem("emailSubmitted");
    if (emailSubmitted) {
      return;
    }

    // Déclenche le popup après le délai imparti
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Nettoie le timer si le composant est démonté avant la fin
    return () => clearTimeout(timer);
  }, [delay]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Veuillez entrer une adresse email valide.");
      return;
    }
    console.log("Email soumis :", email);
    localStorage.setItem("emailSubmitted", "true");
    setIsSubmitted(true);
    setMessage("Parfait ! Votre geste de bienvenue est en route.");
    setTimeout(() => setIsVisible(false), 4000);
  };

  const handleClose = () => setIsVisible(false);

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
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              aria-label="Fermer"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {!isSubmitted ? (
              <>
                <h2
                  className="text-base font-semibold"
                  style={{ color: "#EEC980" }}
                >
                  Rejoignez le cercle
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                  Recevez notre{" "}
                  <em className="font-serif italic">geste de bienvenue</em>
                </p>
                <p className="text-gray-600 mt-4 mb-6">
                  Un code de -10% sur votre premier instrument, et l'accès à nos
                  créations en avant-première.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="block w-full rounded-full border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEC980] sm:text-sm sm:leading-6 transition-all duration-200"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="w-full text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg"
                    style={{ backgroundColor: "#EEC980" }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Recevoir mon code
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Félicitations !
                </h2>
                <p className="text-gray-600 mt-2">{message}</p>
              </div>
            )}
            {message && !isSubmitted && (
              <p className="text-red-500 text-sm mt-3">{message}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
