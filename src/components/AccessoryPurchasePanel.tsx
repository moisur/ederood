// src/components/AccessoryPurchasePanel.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { Accessory } from "@/data/accessories";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface AccessoryPurchasePanelProps {
  accessory: Accessory;
}

export const AccessoryPurchasePanel = ({
  accessory,
}: AccessoryPurchasePanelProps) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        {accessory.name}
      </h1>
      <p className="mt-4 text-3xl text-gray-900">{accessory.price}</p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {accessory.description}
      </p>

      <div className="mt-10">
        <button
          onClick={() => addToCart(accessory)}
          className="flex items-center justify-center w-full rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
        >
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};
