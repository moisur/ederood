"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LockClosedIcon,
  CreditCardIcon,
  UserCircleIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import Header from "@/components/Header"; // Import the main Header
import Footer from "@/components/Footer"; // Import the main Footer

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  },
 []);

  const { subtotal, total, discount } = getCartTotal();

  const handleMockPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a real payment provider
    // For now, we'll just simulate a successful payment
    clearCart();
    router.push("/checkout/success");
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-800"></div>
      </div>
    );
  }

  const formatPrice = (price: number | string | undefined | null): string => {
    const numericPrice =
      typeof price === "string" ? parseFloat(price.replace(",", ".")) : price;

    if (typeof numericPrice === "number" && !isNaN(numericPrice)) {
      return numericPrice.toFixed(2).replace(".", ",") + " €";
    }

    // Valeur par défaut si le prix n'est pas valide, pour éviter le crash.
    return "0,00 €";
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="container mx-auto text-center py-24 sm:py-32 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-serif font-bold text-gray-800">
              Votre panier est vide
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Il semble que vous n'ayez pas encore trouvé votre son.
            </p>
            <motion.button
              onClick={() => router.push("/")}
              className="mt-8 inline-flex items-center gap-x-2 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg"
              style={{ backgroundColor: "#EEC980" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Continuer mes achats
            </motion.button>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-8 lg:py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
          {/* --- Colonne de droite : Formulaires --- */}
          <div className="lg:col-span-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Finaliser ma commande
            </h1>

            <motion.form
              onSubmit={handleMockPayment}
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Sections du formulaire... */}
              <section>
                <div className="flex items-center mb-3">
                  <UserCircleIcon className="w-6 h-6 mr-3 text-gray-500" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Informations de contact
                  </h2>
                </div>
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#EEC980] focus:border-[#EEC980] transition"
                  required
                />
              </section>
              <section>
                <div className="flex items-center mb-3">
                  <HomeModernIcon className="w-6 h-6 mr-3 text-gray-500" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Adresse de livraison
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#EEC980] focus:border-[#EEC980] transition"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Nom"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#EEC980] focus:border-[#EEC980] transition"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Adresse"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#EEC980] focus:border-[#EEC980] transition"
                    required
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Ville"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#EEC980] focus:border-[#EEC980] transition sm:col-span-2"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Code Postal"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#EEC980] focus:border-[#EEC980] transition"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Pays"
                    defaultValue="France"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#EEC980] focus:border-[#EEC980] transition"
                    required
                  />
                </div>
              </section>
              <section>
                <div className="flex items-center mb-3">
                  <CreditCardIcon className="w-6 h-6 mr-3 text-gray-500" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Paiement
                  </h2>
                </div>
                <div className="bg-white border-2 border-[#EEC980] rounded-lg p-6">
                  <p className="font-semibold text-gray-800">
                    Carte de crédit sécurisée
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Ceci est une simulation. Toutes vos informations sont
                    sécurisées. Aucune donnée réelle n'est requise.
                  </p>
                </div>
              </section>

              <motion.button
                type="submit"
                className="w-full text-black font-bold py-4 px-6 rounded-full text-lg shadow-lg"
                style={{ backgroundColor: "#EEC980" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="flex items-center justify-center">
                  <LockClosedIcon className="w-5 h-5 mr-2" />
                  Procéder au paiement ({formatPrice(total)})
                </span>
              </motion.button>
            </motion.form>
          </div>

          {/* --- Colonne de gauche : Récapitulatif --- */}
          <motion.div
            className="lg:col-span-6 bg-white p-8 rounded-2xl border border-gray-200 h-fit sticky top-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Récapitulatif
            </h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.type}-${item.id}`}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden shadow-sm">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-3 text-lg">
              <div className="flex justify-between text-gray-600">
                <span>Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Réduction</span>
                  <span>- {formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-xl text-gray-900 mt-2">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
