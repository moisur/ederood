// components/ContactForm.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire ici
    console.log("Form data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Votre nom (obligatoire)
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEC980] sm:text-sm sm:leading-6 transition-colors duration-200"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Adresse e-mail
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEC980] sm:text-sm sm:leading-6 transition-colors duration-200"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Votre message
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEC980] sm:text-sm sm:leading-6 transition-colors duration-200"
          />
        </div>
      </div>

      <div>
        <motion.button
          type="submit"
          className="w-full text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg"
          style={{ backgroundColor: "#EEC980" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(238, 201, 128, 0.7)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Envoyer le message
        </motion.button>
      </div>
    </form>
  );
}
