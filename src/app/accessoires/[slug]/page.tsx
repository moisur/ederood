// app/accessoires/[slug]/page.tsx

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { accessories, Accessory } from "@/data/accessories";
import Image from "next/image";
import ArtisanCallout from "@/components/ArtisanCallout";
import { AccessoryCard } from "@/components/AccessoryCard";
import { AccessoryPurchasePanel } from "@/components/AccessoryPurchasePanel";

async function getAccessory(slug: string): Promise<Accessory | undefined> {
  return accessories.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return accessories.map((accessory) => ({
    slug: accessory.slug,
  }));
}

interface AccessoryPageProps {
  params: {
    slug: string;
  };
}

export default async function AccessoryPage({ params }: AccessoryPageProps) {
  const resolvedParams = await params as { slug: string };
  const accessory = await getAccessory(resolvedParams.slug);

  if (!accessory) {
    return <div>Accessoire non trouvé</div>;
  }

  // On trouve des accessoires similaires (différents de l'actuel)
  const relatedAccessories = accessories
    .filter((a) => a.id !== accessory.id)
    .slice(0, 3); // On en affiche 3 au maximum

  return (
    <div className="bg-white">
      <Header />
      <main>
        <section className="container mx-auto  px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt">
            {/* Colonne Gauche: Image de l'accessoire */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={accessory.imageUrl}
                  alt={accessory.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Colonne Droite: Détails de l'accessoire et panneau d'achat */}
            <AccessoryPurchasePanel accessory={accessory} />
          </div>
        </section>

        {/* Section Accessoires Similaires */}
        {relatedAccessories.length > 0 && (
          <section className="py-24 sm:py-32 bg-gray-50/80">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Accessoires Similaires
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {relatedAccessories.map((relatedAccessory) => (
                  <AccessoryCard
                    key={relatedAccessory.id}
                    accessory={relatedAccessory}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
        <ArtisanCallout />
      </main>
      <Footer />
    </div>
  );
}
