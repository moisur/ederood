// components/Reassurance.tsx
"use client";

import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Paiement Sécurisé",
    description: "Transactions protégées par cryptage SSL.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Livraison Offerte",
    description: "En France métropolitaine pour toute commande.",
    icon: TruckIcon,
  },
  {
    name: "Support Artisan",
    description: "Contact direct avec votre fabricant pour toute question.",
    icon: ChatBubbleLeftRightIcon,
  },
];

const Reassurance = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 my-6">
      <h3 className="text-lg font-semibold text-center mb-4">
        Votre Achat en Toute Confiance
      </h3>
      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature.name} className="flex items-start">
            <div className="flex-shrink-0">
              <feature.icon
                className="h-6 w-6 text-gray-600"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {feature.name}
              </p>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center items-center space-x-4">
        <p className="text-sm text-gray-500">Nous acceptons :</p>
        <div className="flex space-x-2">
          {/* Replace with actual payment icons if you have them */}
          <CreditCardIcon className="h-6 w-6 text-gray-400" />
          <p className="font-bold">VISA</p>
          <p className="font-bold">MasterCard</p>
        </div>
      </div>
    </div>
  );
};

export default Reassurance;
