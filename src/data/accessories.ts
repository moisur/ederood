// src/data/accessories.ts

export interface Accessory {
  id: number;
  slug: string;
  name: string;
  price: number; // Le prix est maintenant un NOMBRE
  priceDisplay: string; // La chaîne de caractères pour l'affichage
  imageUrl: string;
  hoverImageUrl?: string;
  description: string;
}

export const accessories: Accessory[] = [
  {
    id: 1,
    slug: "housse-de-protection-pour-handpan",
    name: "Housse de Protection pour Handpan",
    price: 99.9,
    priceDisplay: "99,90€",
    imageUrl: "/accessoires/Gemini_Generated_Image_i8qle9i8qle9i8ql_1_a14281b1-bbe3-44e3-89e1-3675e07e096c85a3.png",
    hoverImageUrl: "/accessoires/Gemini_Generated_Image_dbxmgydbxmgydbxm-removebg-previewd02c.png",
    description:
      "Protégez votre instrument avec cette housse robuste et rembourrée, conçue pour un transport sécurisé.",
  },
  {
    id: 2,
    slug: "trepied-en-bois-handpan",
    name: "Trépied en Bois pour Handpan",
    price: 115.0,
    priceDisplay: "À partir de 115€",
    imageUrl: "/accessoires/handpan-stand-support-bois-28beb.jpg",
    hoverImageUrl: "/accessoires/handpan-stand-support-boise5f0.jpg",
    description:
      "Un support artisanal en bois noble pour jouer confortablement, que ce soit assis ou debout.",
  },
  {
    id: 3,
    slug: "trepied-handpan",
    name: "Trépied de Scène pour Handpan",
    price: 79.9,
    priceDisplay: "79,90€",
    imageUrl: "/accessoires/handpan-stand-support-2b7eb.jpg",
    hoverImageUrl: "/accessoires/handpan-stand-supportc813.jpg",
    description:
      "Stable, ajustable et léger, ce trépied en métal est le compagnon idéal pour les musiciens en déplacement.",
  },
  {
    id: 4,
    slug: "ruban-de-protection-handpan-en-corde-tressee",
    name: "Ruban de Protection Tressé",
    price: 60.0,
    priceDisplay: "60€",
    imageUrl: "/accessoires/ruban-protection-handpan-tresse-2429c.jpg",
    hoverImageUrl: "/accessoires/ruban-protection-handpan-tresse429c.jpg",
    description:
      "Alliez protection et esthétique. Cette corde préserve le bord de votre handpan tout en lui ajoutant une touche unique.",
  },
  {
    id: 5,
    slug: "pendentif-handpan",
    name: "Pendentif Handpan",
    price: 96.0,
    priceDisplay: "96€",
    imageUrl: "/accessoires/handpan-collier-argente9fde.jpg",
    hoverImageUrl: "/accessoires/handpan-collier-argente-fond-noir429c.jpg",
    description:
      "Portez votre passion. Ce pendentif finement ciselé est une réplique miniature de nos instruments.",
  },
  {
    id: 6,
    slug: "mailloches-tongue-drum",
    name: "Paire de Mailloches",
    price: 12.0,
    priceDisplay: "12€",
    imageUrl: "/accessoires/Gemini_Generated_Image_fvs0e2fvs0e2fvs0986f.png",
    hoverImageUrl: "/accessoires/Gemini_Generated_Image_gv1c9kgv1c9kgv1c9968.png",
    description:
      "Des mailloches parfaitement équilibrées pour révéler les sonorités riches et subtiles de votre instrument.",
  },
];
