import React from 'react';
import Image from 'next/image';

const Manufacturing = () => (
  <section id="manufacturing" className="py-20 bg-stone-100">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://handpan-ederod.com/wp-content/uploads/2020/06/fabrication-handpan.jpg"
            alt="Fabrication d'un handpan Ederod"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">L'Endro® 5éme génération</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              L'Endro® est un instrument de musique fabriqué à la main. Sa
              création demande beaucoup d'énergie, de savoir-faire et de
              patience. Un seul instrument nécessite plusieurs heures de travail
              et de nombreuses étapes de fabrication.
            </p>
            <p>
              L'accordage de l'instrument est un art et un exercice très
              exigeant. Comprendre ce processus demande un réel dévouement ainsi
              que des milliers d'heures de jeu et d'apprentissage.
            </p>
            <p>
              Nous sommes actuellement à la cinquième génération du handpan
              Endro®. Cette génération marque un tournant dans notre processus
              de fabrication et notre technique d'accordage, aboutissant à un
              instrument d'une excellente qualité.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Manufacturing;
