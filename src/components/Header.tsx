"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
      ? "bg-black bg-opacity-90 shadow-md backdrop-blur-sm"
      : "bg-transparent"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="text-2xl font-bold">
          <Link href="/">Ederod Handpan</Link>
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
        </nav>

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

      {menuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 pb-4">
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
        </nav>
      )}
    </header>
  );
};

export default Header;
