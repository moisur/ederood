// app/contact/page.tsx

"use client"; // Cette page contient des animations, on la déclare cliente.

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Colonne de Gauche : L'Invitation */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2
                className="text-base font-semibold leading-7"
                style={{ color: "#EEC980" }}
              >
                Un dialogue, une création
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Initions la <em className="font-serif italic">conversation</em>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Concernant toutes demandes de renseignement sur la fabrication ou
                la commande d’un Handpan Endro® : Si vous souhaitez avoir des
                réponses claires, immédiates et détaillées à vos questions,
                alors n’hésitez pas, nous ferons un plaisir de vous renseigner.
              </p>

              <div className="mt-12 border-t border-gray-200 pt-10 space-y-8">
                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-7 h-7 text-[#EEC980] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Contact direct par téléphone
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Pour une réponse immédiate, le mieux est de nous appeler
                      directement. <br />{" "}
                      <a
                        href="tel:+33665312352"
                        className="font-medium text-gray-800 hover:text-black underline decoration-dotted underline-offset-4"
                      >
                        06 65 31 23 52
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-7 h-7 text-[#EEC980] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Notre Atelier à Paris
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Venez ressentir la vibration de nos instruments. L'atelier
                      vous est ouvert sur rendez-vous. <br />
                      Adresse : 41 Rue Amelot, 75011 Paris
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Colonne de Droite : Le Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="bg-gray-50/80 p-8 rounded-2xl border border-gray-200 shadow-sm">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
