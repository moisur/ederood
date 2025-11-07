// components/MoreInfo.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Importation du composant Link de Next.js
import { AccordionItem } from "./AccordionItem";

// On définit une classe de style pour nos liens pour la réutiliser facilement
const linkStyle =
  "font-medium text-gray-900 hover:text-black transition-colors duration-200 underline decoration-dotted decoration-[#EEC980]/60 underline-offset-4 hover:decoration-[#EEC980]";

const faqData = [
  {
    question: "Ederod, Fabricant artisanal Français de Handpan",
    answer: (
      <>
        <p>
          Bienvenue sur le site d’Ederod, Fabricant de Handpans artisanaux{" "}
          <strong>depuis 2012</strong>. Nous sommes basés à <em>Besançon</em>, à
          70 km de la frontière Suisse.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Tradition, innovation et qualité
        </h4>
        <p className="mt-2">
          C’est Florent Recouvreux qui crée le{" "}
          <Link href="/nos-creations" className={linkStyle}>
            Endro®
          </Link>
          , « <em>Nature</em> » en Breton en 2012. Ederod développe actuellement
          sa <strong>cinquième génération</strong> de Handpan. Son diamètre est
          de <em>51 centimètres</em>.
        </p>
        <p className="mt-4">
          Sculpté dans une <strong>tôle brevetée</strong> particulièrement{" "}
          <em>nerveuse</em> avec un potentiel de vibration élevé. C’est le fruit
          de plus de <strong>10 années de recherche</strong>.
        </p>
      </>
    ),
  },
  {
    question: "La gamme Endro®",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Deux types de Endro®
        </h4>
        <p className="mt-2">
          Deux types de Endro® sont disponibles à l’achat. Soit à{" "}
          <strong>9 notes</strong> (8 périphériques et une centrale), soit à{" "}
          <strong>10 notes</strong> (9 périphériques et une centrale). Pour
          chacun, il est aussi désormais possible d’ajouter jusqu’à{" "}
          <strong>6 notes sur le dessous</strong>.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Le Handpan en Ré mineur
        </h4>
        <p className="mt-2">
          Dans la gamme de Ré mineur, le Handpan Endro®, est décliné selon trois
          modèles spécifiques :{" "}
          <Link
            href="/products/handpan-endro-re-mineur-integrale-kurde-9-notes"
            className={linkStyle}
          >
            <em>Intégrale (Kurde)</em>
          </Link>
          ,{" "}
          <Link
            href="/products/handpan-endro-re-mineur-celtic-amara-9-notes"
            className={linkStyle}
          >
            <em>Celtic (Amara)</em>
          </Link>{" "}
          et{" "}
          <Link
            href="/products/handpan-endro-re-mineur-mystic-9-notes"
            className={linkStyle}
          >
            <em>Mystic</em>
          </Link>
          .
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Handpan « sur mesure »
        </h4>
        <p className="mt-2">
          Outre les gammes Mystic, Celtic ou Intégrale, nous sommes à votre
          écoute et sommes à même de vous proposer une multitude de gammes
          différentes faites «{" "}
          <Link href="/contact" className={linkStyle}>
            <em>sur mesure</em>
          </Link>{" "}
          ».{" "}
          <Link href="/contact" className={linkStyle}>
            Contactez-nous
          </Link>{" "}
          pour la faisabilité, les délais et le prix du Handpan de vos rêves.
        </p>
      </>
    ),
  },
  {
    question: "Les gammes Ré mineur : Celtic, Mystic et Intégrale",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Le Handpan gamme <em>Intégrale (ou Kurde)</em>
        </h4>
        <p className="mt-2">
          La gamme Intégrale est construite sur le mode « Eolien ». Comme son
          nom l’indique, elle comprend <strong>toutes les notes</strong> de Ré
          mineur Eolien. A la fois profonde et musicale, c'est la gamme « Reine
          » qui offre le plus de possibilités de jeu.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Le Handpan gamme <em>Celtic (ou Amara)</em>
        </h4>
        <p className="mt-2">
          La gamme Celtic se caractérise par des sonorités plus{" "}
          <em>apaisées et moins nostalgiques</em> que le modèle Intégrale, car
          le Si bémol a été enlevé. Chaleureuse et polyvalente, elle valorise la
          musique Celtique et s’insère facilement en improvisation de
          World-music.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Le Handpan gamme <em>Mystic</em>
        </h4>
        <p className="mt-2">
          La gamme Mystic se caractérise par des sonorités{" "}
          <em>profondes, plus mélancoliques</em>, du fait de la mise en valeur
          de la note Si bémol. Elle invite à la méditation et l’introspection et
          possède une dimension spirituelle.
        </p>
      </>
    ),
  },
  {
    question: "Comment choisir sa gamme ?",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Handpan <em>Mystic</em>
        </h4>
        <p className="mt-2">
          Pour un univers <strong>profond et mélancolique</strong>. Idéal pour
          la méditation, l’introspection et la musicothérapie. Un univers
          aérien, céleste, magique.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Handpan <em>Celtic</em>
        </h4>
        <p className="mt-2">
          Pour la <strong>rondeur et la vitalité</strong>. C’est une gamme plus
          chaleureuse, musicale et polyvalente qui s’harmonise facilement avec
          d’autres instruments. Le compagnon idéal pour le musicien et un
          excellent choix comme premier instrument.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Handpan <em>Intégrale</em>
        </h4>
        <p className="mt-2">
          La gamme « Reine », <strong>la plus polyvalente</strong>. Puisqu'elle
          comporte toutes les notes de la gamme de Ré mineur, elle offre le plus
          de possibilités. Idéale comme premier instrument pour ceux qui
          souhaitent s’investir dans l’apprentissage et progresser.
        </p>
      </>
    ),
  },

  {
    question: "Conséquences des variations de gammes",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Handpan <em>Mystic</em>
        </h4>
        <p className="mt-2">
          Le Handpan Mystic se distingue par un univers profond et mélancolique.
          La gamme Mystic invite à la méditation et l’introspection, elle peut
          être adaptée à la musicothérapie. On évolue dans un univers aérien,
          céleste, magique, pour résumer : « mystique ».
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Handpan <em>Celtic</em>
        </h4>
        <p className="mt-2">
          La sonorité du Handpan Celtic se distingue par la rondeur et la
          vitalité, c’est une gamme plus chaleureuse, musicale et polyvalente.
          Elle s’harmonise facilement avec d’autres instruments de musiques. La
          gamme Celtic est le compagnon idéal pour le musicien et aussi un
          excellent choix comme premier instrument (d’autant plus si vous ne
          recherchez pas l’ascendant nostalgique).
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Handpan <em>Intégrale</em>
        </h4>
        <p className="mt-2">
          A coté des gammes Mystic et Celtic, le Handpan Intégrale se présente
          comme la gamme « Reine ». Parce qu’elle comporte toutes les notes de
          la gamme de Ré mineur, elle offre beaucoup d’atouts et de possibilités
          de jeux. C’est une gamme à la fois profonde et musicale. Pleine de
          richesse et très polyvalente, la gamme intégrale est idéale comme
          premier instrument. Sans aucun doute, nous la recommandons pour celles
          et ceux qui souhaitent s’investir dans l’apprentissage avec l’envie de
          progresser.
        </p>
      </>
    ),
  },

  {
    question: "Acheter un Handpan Endro®",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Comment acheter un Handpan ?
        </h4>
        <p className="mt-2">
          Pour acheter un Handpan, on peut choisir à l’écoute, à l’instinct, à
          l’émotion. On peut choisir en fonction d’un usage particulier : groupe
          de musique, musicothérapie, improvisation dans la nature. Si vous
          achetez un Handpan artisanal, « le sur mesure » vous ouvre toutes les
          portes du possible.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Essayer un Instrument
        </h4>
        <p className="mt-2">
          Pour acheter un Handpan Endro®, il vous faut choisir un modèle de
          gamme, pour vous aider nous vous invitons à{" "}
          <Link href="/contact" className={linkStyle}>
            nous contacter directement par téléphone
          </Link>
          . Vous êtes aussi les bienvenus à l’atelier si vous souhaitez tester
          des instruments. Le plaisir sera pour nous de vous rencontrer et
          l’achat ou non d’un Handpan, bien sur, tout à fait libre.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Le prix d’un Handpan Endro®
        </h4>
        <p className="mt-2">
          Chez Ederod, le prix d’un Handpan artisanal est de{" "}
          <strong>1 500 €</strong> pour un modèle 9 notes et{" "}
          <strong>1 650 €</strong> pour un modèle 10 notes. Nous réalisons un
          devis pour toute étude « sur mesure ». Le prix d’achat d’un Handpan ne
          dépend pas de la gamme souhaitée. Le prix est identique que vous
          achetiez un Handpan en Ré mineur Celtic, Mystic ou Intégral.
        </p>
      </>
    ),
  },

  {
    question: "Prix, Vente à distance et Expédition",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Le prix d’un Handpan Endro®
        </h4>
        <p className="mt-2">
          Le prix d’un Handpan artisanal est de <strong>1 500 €</strong> pour un
          modèle 9 notes et <strong>1 650 €</strong> pour un modèle 10 notes.
          Nous réalisons un devis pour toute étude «{" "}
          <Link href="/contact" className={linkStyle}>
            <em>sur mesure</em>
          </Link>{" "}
          ». Le prix ne dépend pas de la gamme (Celtic, Mystic ou Intégral).
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Vente de Handpan à distance
        </h4>
        <p className="mt-2">
          Pour une vente à distance,{" "}
          <Link href="/contact" className={linkStyle}>
            contactez-nous
          </Link>{" "}
          pour connaître la disponibilité. Si l'instrument n'est pas en stock,
          nous vous informerons du délai de livraison.
        </p>
        <p className="mt-4">
          Le Handpan est envoyé dans un <strong>colis sur mesure</strong> pour
          éviter les chocs, et l'expédition est <strong>assurée</strong>. Le
          coût est de <strong>48 €</strong> pour la France, entre{" "}
          <strong>50 et 70 €</strong> pour l’Europe, et plus pour le reste du
          monde.
        </p>
      </>
    ),
  },
  {
    question: "Entretien, Stockage et Accordage",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Conseils d’entretien
        </h4>
        <p className="mt-2">
          Après achat, il est important d’appliquer régulièrement un corps gras
          sur le Handpan Endro® (nous vous conseillons l’
          <em>huile de noix de coco</em>) afin de nettoyer et{" "}
          <strong>protéger votre instrument</strong>.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Conseils de stockage
        </h4>
        <p className="mt-2">
          Il est recommandé de stocker votre Handpan Endro® dans un{" "}
          <strong>endroit sec</strong> et à l’abri de l’humidité. Ne pas le
          laisser exposé en plein soleil et bien veiller à ce que votre
          instrument n’ait pas prit l’humidité avant de le stocker dans sa
          housse de protection.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Faire accorder son Handpan
        </h4>
        <p className="mt-2">
          Au cas où le Handpan Endro® acheté aurait subi un quelconque dommage,
          il est possible de le faire <strong>ré-accorder</strong>, parfois de
          le réparer en fonction de l’étendue des dégâts.
        </p>
      </>
    ),
  },
  {
    question: "Complément d’informations",
    answer: (
      <>
        <h4 className="text-lg font-semibold text-gray-800">
          Faire accorder son Handpan
        </h4>
        <p className="mt-2">
          Au cas où le Handpan Endro® acheté aurait subi un quelconque dommage,
          il est possible de le faire ré-accorder, parfois de le réparer en
          fonction de l’étendue des dégâts.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Conseils de stockage
        </h4>
        <p className="mt-2">
          Il est recommandé de stocker votre Handpan Endro® dans un endroit sec
          et à l’abri de l’humidité. Ne pas le laisser exposé en plein soleil et
          bien veiller à ce que votre instrument n’ait pas prit l’humidité avant
          de le stocker dans sa housse de protection.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Conseils d’entretien
        </h4>
        <p className="mt-2">
          Après achat, il est important d’appliquer régulièrement un corps gras
          sur le Handpan Endro® (nous vous conseillons l’huile de noix de coco)
          afin de nettoyer et protéger votre instrument.
        </p>
      </>
    ),
  },
];



const MoreInfo = () => (
  <section id="more-info" className="bg-gray-50 py-24 sm:py-32">
    <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
      <div className="max-w-3xl mb-16">
        <h2
          className="text-base font-semibold leading-7"
          style={{ color: "#EEC980" }}
        >
          Artisanat & Savoir-Faire
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Tout ce que vous devez savoir
        </p>
      </div>

      <motion.div
        className="border-t border-gray-300"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default MoreInfo;
