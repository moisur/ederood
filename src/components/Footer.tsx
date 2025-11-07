import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-black text-stone-300">
    <div className="container mx-auto px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Ederod Handpan</h3>
          <p className="text-sm">Fabricant artisanal à Paris</p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/#models" className="hover:text-white transition-colors">Nos Modèles</Link></li>
            <li><Link href="/videos" className="hover:text-white transition-colors">Vidéos</Link></li>
            <li><Link href="/#about" className="hover:text-white transition-colors">L'Atelier</Link></li>
            <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        {/* Legal Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Légal</h4>
          <ul className="space-y-2">
            <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
            <li><Link href="/cgv" className="hover:text-white transition-colors">Conditions Générales de Vente</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-700 mt-8 pt-6 text-center">
        <p className="text-sm text-stone-400">
          &copy; {new Date().getFullYear()} Ederod Handpan. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
