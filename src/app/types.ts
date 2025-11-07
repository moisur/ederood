export interface Product {
  id: string;
  name: string;
  scale: string;
  price: number;
  originalPrice?: number; // Prix original avant promotion
  imageUrl: string;
  gallery?: string[]; // Galerie d'images
  description: string;
  detailedDescription?: {
    title: string;
    paragraphs: string[];
  };
  features?: {
    name: string;
    value: string;
  }[];
  slug: string;
  promo?: {
    text: string;
    color: string;
  };
  tonality: string;
notes: number;
}
