// src/types.ts

export interface Product {
  id: string;
  name: string;
  scale: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  gallery: string[];
  description: string;
  detailedDescription: {
    title: string;
    paragraphs: string[];
  };
  features: {
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