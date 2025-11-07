'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, Easing, Variants } from 'framer-motion';
import { VideoCard } from '@/components/VideoCard'; // On importe notre nouveau composant

const videos = [
  { id: "fS8mVBh51Xo", title: "HANDPAN EDEROD / CELTIQUE" },
  { id: "0xxkJCooGHU", title: "HANDPAN EDEROD / ETIENNE SALMON" },
  { id: "Sjk7lb9LimA", title: "HANDPAN FRANCAIS EDEROD / AMARA / CELTIC" },
  { id: "AQHmeOKuedw", title: "HANDPAN FRANCAIS EDEROD / RE MAJEUR" },
  { id: "3kLPiogrRmU", title: "HANDPAN FRANCAIS EDEROD" },
  { id: "om5TYn-rSZ4", title: "HANPAN FRANCAIS EDEROD / CELTIQUE / AMARA" },
  { id: "5jgD1_ws1QA", title: "HANDPAN EDEROD / RE MINEUR HANGAOUT 2023" },
  { id: "t8i70N5ZJBk", title: "HANDPAND EDEROD / HANGAOUT 2023" },
  { id: "YzJ7RU0-qNU", title: "HANDPAN EDEROD / FABRICATION / ACCORDAGE" },
  { id: "P62Kua76bQ8", title: "HANDPAN / FA EOLIAN" },
  { id: "3akajIK-oHk", title: "HANDPAN EDEROD / = INTEGRALE 10 / KURDE 10" },
  { id: "YcIEpcXOq6o", title: "HANDPAN EDEROD / GAMME HIJAZ" },
  { id: "4NmEVJTajiU", title: "HANDPAN EDEROD / HIJAZ" },
  {
    id: "bPoexRRIhkc",
    title: "HANDPAN EDEROD / CELTIQUE / AMARA / RE/ LA DO RE MI FA SOL LA DO",
  },
  { id: "QgMn63LHImI", title: "HANDPAN EDEROD / FRANCE 3" },
  { id: "8M3shsLoeZ0", title: "HANDPAN EDEROD / MYSTIQUE" },
  { id: "a3jB5Yf4YiM", title: "HANDPAN EDEROD / GAMME CELTIC / AMARA" },
  {
    id: "89XaMTg4c5A",
    title:
      "HANDPAN / INTEGRALE 9 / RE MINEUR (KURDE ) RE / LA SIb DO RE MI FA SOL LA",
  },
  { id: "5TV1BgMRy1o", title: "HANDPAN EDEROD / = INTEGRALE 10 (KURDE 10)" },
  { id: "DrQ2Et4v_ss", title: "HANDPAN EDEROD / SPECIALE LA 2" },
  { id: "KnUPiCy_GLc", title: "HANDPAN EDEROD / YSHA SAVITA" },
  { id: "kmFqFzY5IDM", title: "HANDPAN EDEROD / CELTIC / AMARA" },
  { id: "R_nuHg6Qdf0", title: "HANDPAN EDEROD / INTEGRALE / KURDE 2017" },
  { id: "Z8JzKmcHxvE", title: "HANDPAN EDEROD / DAVID LESSAGE" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariant: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as Easing } },
};

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto py-24 sm:py-32 px-6 lg:px-8">
        {/* Titre de page, en accord avec notre DA */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-base font-semibold leading-7" style={{ color: '#EEC980' }}>
            Collection Endro® en Vidéo
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Plongez dans l'<em className="font-serif italic">Harmonie</em>
          </p>
        </div>
        
        {/* Grille animée */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {videos.map((video) => (
            <motion.div key={video.id} variants={itemVariant}>
              <VideoCard videoId={video.id} title={video.title} />
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
