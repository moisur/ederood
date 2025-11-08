// components/Accessories.tsx
"use client";

import { accessories } from "@/data/accessories";
import Image from "next/image";
import Link from "next/link";

const Accessories = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vous Aimerez Aussi
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Complétez votre expérience musicale avec notre sélection
            d'accessoires essentiels.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
          {accessories.map((accessory) => (
            <Link
              key={accessory.id}
              href={`/accessories/${accessory.slug}`}
              className="group"
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  src={accessory.imageUrl}
                  alt={accessory.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{accessory.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {accessory.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
