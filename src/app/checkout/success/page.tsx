"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header"; // Import the main Header
import Footer from "@/components/Footer"; // Import the main Footer

// Définir une couleur de succès subtile (un bleu-vert profond, par exemple)
// qui s'harmonise avec le noir/blanc/doré.
const ACCENT_COLOR_SUCCESS = "text-emerald-500";
// Si vous voulez du doré: const ACCENT_COLOR_SUCCESS = 'text-[#EEC980]';
// J'opte pour l'émeraude, plus conventionnel pour le succès, mais haut de gamme.

const CheckoutSuccessPage = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto text-center py-12 px-4 flex-grow flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-200 shadow-2xl max-w-2xl mx-auto"
        >
          {/* L'icône de succès, animée et stylisée */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <CheckCircleIcon
              className={`w-24 h-24 ${ACCENT_COLOR_SUCCESS} mx-auto mb-6`}
            />
          </motion.div>

          {/* Le titre avec notre typographie serif */}
          <h1 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-4">
            Commande Confirmée
          </h1>

          {/* Le message de confirmation */}
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
            <em className="italic">Félicitations !</em> Votre commande a été
            enregistrée avec succès. Un e-mail de confirmation détaillé vous a
            été envoyé.
          </p>

          {/* Le bouton de retour, notre signature */}
          <motion.button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-x-3 text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg"
            style={{ backgroundColor: "#EEC980" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Découvrir d'autres créations
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutSuccessPage;
