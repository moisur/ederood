// app/mentions-legales/page.tsx

"use client"; // Pour l'animation avec Framer Motion

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow container mx-auto px-6 lg:px-8 py-24 sm:py-32">
          {/* Titre de page, en accord avec notre DA */}
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2
              className="text-base font-semibold leading-7"
              style={{ color: "#EEC980" }}
            >
              Transparence & Confiance
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Mentions <em className="font-serif italic">Légales</em>
            </p>
          </div>

          {/* Le conteneur du contenu légal, animé */}
          <motion.div
            className="bg-gray-50/80 p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto legal-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>Informations légales</h2>
            <h3>1. Présentation du site.</h3>
            <p>
              En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
              la confiance dans l’économie numérique, il est précisé aux
              utilisateurs du site www.ederod.fr l’identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <p>
              <strong>Propriétaire</strong> : Ederod – 79378657500027 – 1D
              Chemin de Halage de Casamene 25000 Besançon
              <br />
              <strong>Créateur</strong> : Benjamin PILLOT
              <br />
              <strong>Responsable publication</strong> : Florent Recouvreux – 06
              65 31 23 52
              <br />
              Le responsable publication est une personne physique ou une
              personne morale.
              <br />
              <strong>Webmaster</strong> : Florent Recouvreux – ederod [at]
              hotmail.fr
              <br />
              <strong>Hébergeur</strong> : 1&amp;1 – INTERGEST SA 7 PLACE DE LA
              GARE 57200 SARREGUEMINES
              <br />
              <strong>Logo</strong> : Guillaume Guinchard
            </p>
            <h3>
              2. Conditions générales d’utilisation du site et des services
              proposés.
            </h3>
            <p>
              L’utilisation du site www.ederod.fr implique l’acceptation pleine
              et entière des conditions générales d’utilisation ci-après
              décrites. Ces conditions d’utilisation sont susceptibles d’être
              modifiées ou complétées à tout moment, les utilisateurs du site
              sont donc invités à les consulter de manière régulière.
            </p>
            {/* ... Collez ici l'intégralité du reste de votre contenu HTML légal ... */}
            <h3>11. Lexique.</h3>
            <p>
              Utilisateur : Internaute se connectant, utilisant le site
              susnommé.
            </p>
            <p>
              Informations personnelles : « les informations qui permettent,
              sous quelque forme que ce soit, directement ou non,
              l’identification des personnes physiques auxquelles elles
              s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            </p>
          </motion.div>
        </main>
        <Footer />
      </div>

      {/* Styles sur-mesure pour notre contenu légal */}
      <style jsx global>{`
        .legal-content h2 {
          @apply text-3xl font-bold font-serif text-gray-900 border-b border-gray-300 pb-4 mb-6;
        }
        .legal-content h3 {
          @apply text-xl font-semibold text-gray-800 mt-8 mb-4;
        }
        .legal-content p {
          @apply text-gray-600 leading-relaxed mb-4;
        }
        .legal-content a {
          @apply font-medium text-gray-800 hover:text-black transition-colors duration-200 underline decoration-dotted decoration-[#EEC980]/70 underline-offset-4 hover:decoration-[#EEC980];
        }
        .legal-content strong {
          @apply font-semibold text-gray-800;
        }
        .legal-content ul {
          @apply list-disc list-outside pl-6 space-y-2 text-gray-600 mb-4;
        }
      `}</style>
    </>
  );
}
