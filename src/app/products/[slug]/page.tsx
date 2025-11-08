// app/products/[slug]/page.tsx

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Product } from "@/types";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductPurchasePanel } from "@/components/ProductPurchasePanel";
import { ProductCard } from "@/components/ProductCard"; // On importe la carte pour les produits similaires
import { motion } from "framer-motion";
import ArtisanCallout from "@/components/ArtisanCallout";
// import type { PageProps } from "next";

// --- Fonctions de récupération des données (maintenant complétées) ---
async function getProduct(slug: string): Promise<Product | undefined> {
  // En situation réelle, ceci serait un appel à votre base de données ou API
  return products.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  // Génère les routes pour chaque produit au moment du build pour des performances optimales
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// --- Le Composant Page ---
interface ProductPageProps {
  params: {
    slug:string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  // In development, `params` can be a promise. We await it to get the value.
  const resolvedParams = await params as { slug: string };
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    // ... votre page 404 est très bien
    return <div>Produit non trouvé</div>;
  }

  // On trouve des produits similaires (même tonalité, mais pas le même produit)
  const relatedProducts = products
    .filter((p) => p.tonality === product.tonality && p.id !== product.id)
    .slice(0, 3); // On en affiche 3 au maximum

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* --- ACTE I & II : IMMERSION & CONNAISSANCE --- */}
        <section className="container mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Colonne Gauche: La Galerie d'Images */}
            <div className="lg:sticky lg:top-28">
              <ProductGallery
                mainImage={product.imageUrl}
                gallery={product.gallery}
                alt={product.name}
              />
            </div>

            {/* Colonne Droite: Le Panneau d'Achat */}
            <div>
              <ProductPurchasePanel product={product} />
            </div>
          </div>
        </section>

        {/* --- ACTE III : L'ÂME DE L'INSTRUMENT --- */}
        {product.detailedDescription && (
          <section className="bg-gray-50/80 py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                L'univers de la gamme{" "}
                <em className="font-serif italic">
                  {
                    product.features.find(
                      (f: { name: string; value: string }) => f.name === "Gamme"
                    )?.value
                  }
                </em>
              </h2>
              <div className="mt-6 text-lg leading-8 text-gray-600 space-y-6">
                {product.detailedDescription.paragraphs.map(
                  (paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* --- ACTE IV : L'EXPLORATION CONTINUE (NOUVEAU) --- */}
        {relatedProducts.length > 0 && (
          <section className="py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Découvrez aussi...
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    index={index}
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
