"use client";

import Link from "next/link";
import Image from "next/image"; // Importation de l'Image de Next.js
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { cartItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    // On exécute une fois au chargement pour définir l'état initial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Classes de base de l'en-tête
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
    scrolled || !isHomePage
      ? "bg-neutral-900 shadow-md backdrop-blur-sm"
      : "bg-transparent"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center"> {/* Utilisation de flex pour aligner l'image */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ederod Handpan Logo"
              width={120} // Ajustez la largeur selon vos besoins
              height={40} // Ajustez la hauteur selon vos besoins
              className="h-auto" // Pour maintenir le ratio d'aspect
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-2">
          <Link
            href="/models"
            className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
          >
            Nos Modèles
          </Link>
          <Link
            href="/videos"
            className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
          >
            Vidéos
          </Link>
          <Link
            href="/atelier"
            className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
          >
            L'Atelier
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/accessoires"
            className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
          >
            Accessoires
          </Link>
        </nav>

        <div className="flex items-center">
          <button onClick={openCart} className="relative mr-4">
            <ShoppingCartIcon className="h-6 w-6 text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-neutral-900 pb-4">
          <Link
            href="/models"
            className="block text-center py-3 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Nos Modèles
          </Link>
          <Link
            href="/videos"
            className="block text-center py-3 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Vidéos
          </Link>
          <Link
            href="/atelier"
            className="block text-center py-3 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            L'Atelier
          </Link>
          <Link
            href="/contact"
            className="block text-center py-3 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/accessoires"
            className="block text-center py-3 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Accessoires
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

