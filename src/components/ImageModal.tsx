// components/ImageModal.tsx

'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid';

// On a besoin de savoir quel type d'objet on reçoit
interface ImageItem {
  src: string;
  alt: string;
  caption: string;
  story: string;
}

interface ImageModalProps {
  image: ImageItem;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const ImageModal = ({ image, onClose }: ImageModalProps) => {
  // Gérer la fermeture avec la touche "Echap"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose} // Fermer en cliquant sur le fond
    >
      <motion.div
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] grid grid-cols-1 lg:grid-cols-2 shadow-2xl overflow-hidden"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant sur la modale elle-même
      >
        {/* Colonne de l'image */}
        <div className="relative h-64 lg:h-auto">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>

        {/* Colonne du contenu */}
        <div className="p-8 lg:p-10 flex flex-col">
          <h2 className="text-3xl font-bold font-serif text-gray-900">{image.caption}</h2>
          <div className="w-20 h-1 my-4" style={{ backgroundColor: '#EEC980' }} />
          <p className="text-gray-600 text-lg leading-relaxed flex-grow">{image.story}</p>
          <Link href="/contact">
            {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
            }
            <motion.button
              className="mt-8 inline-block w-full text-center text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg"
              style={{ backgroundColor: '#EEC980' }}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(238, 201, 128, 0.7)' }}
            >
              Discuter de votre création
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
        <XMarkIcon className="w-8 h-8" />
      </button>
    </motion.div>
  );
};
