// src/app/notre-vision/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtisanCallout from "@/components/ArtisanCallout";

// Sous-composants pour la lisibilité et le style
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mb-8 border-l-4 border-amber-400 pl-4"
    variants={itemVariant}
  >
    {children}
  </motion.h2>
);

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="text-lg text-gray-700 leading-relaxed space-y-6"
    variants={itemVariant}
  >
    {children}
  </motion.div>
);

const AnimatedImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    className="relative w-full h-80 lg:h-[450px] shadow-lg overflow-hidden my-12"
    variants={itemVariant}
  >
    <Image src={src} alt={alt} fill className="object-cover" />
  </motion.div>
);

// Variants pour les animations
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) } },
};

const NotreVisionPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* --- HEADER --- */}
        <header className="py-12 sm:py-32 text-center bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 relative w-full h-32 lg:h-48 overflow-hidden shadow-lg"
          >
            <Image
              src="/uploads/2024/10/close-up-handpan-francais-ederod.jpg"
              alt="Gros plan sur un handpan français Ederod"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif">
              La Vision du Handpan par Ederod
            </h1>
          </motion.div>
        </header>

        {/* --- CONTENT --- */}
        <motion.article
          className="container max-w-4xl mx-auto px-6 py-20 lg:py-28 space-y-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
            <BodyText>
                <p>Nous invitons les personnes intéressées par le Handpan Endro® à prendre en considération certains éléments que nous allons vous présentez, issus de notre <em>recherche et développement</em>, menés dans l’élaboration de nos instruments.</p>
            </BodyText>

          {/* Section 1: Taille */}
          <section>
            <SectionTitle>Fabrication artisanale de handpan - taille du handpan</SectionTitle>
            <BodyText>
              <p>La taille d’un Handpan est un critère de confection important. La taille de l’instrument conditionne les deux paramètres suivant :</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Le <strong>volume de résonance</strong> (Le volume de résonance correspond au volume d’air contenu à l’intérieur de l’instrument.)</li>
                <li>L’<strong>ergonomie générale</strong> : qui se traduit par le confort et la facilité de jeu</li>
              </ol>
              <p>Ces deux paramètres sont <em>antagonistes</em> : plus on agrandi le diamètre de l’instrument plus le volume de résonance augmente, mais à l’inverse plus le diamètre augmente et plus l’ergonomie se détériore.</p>
              <p>Le volume de résonance augmente :</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Le volume sonore</li>
                <li>Les capacités de projection du son</li>
                <li>Les capacités générales de résonance (En terme de durée d’émission : <em>Susten</em>)</li>
              </ol>
              <p>En résumé, plus un handpan est construit avec un diamètre important et plus cela facilite sa résonance et un volume sonore importants. Cependant, un handpan doit avoir une taille raisonnable, sinon le plaisir du jeu s’en trouve considérablement gâché par plusieurs paramètres:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Notamment le <strong>poids</strong> : le poids d’un handpan est fonction exponentielle de son diamètre. C’est pourquoi, si l’on ajoute ne serait-ce que quelques centimètres au diamètre d’un handpan, le poids de ce dernier s’en trouve considérablement augmenté. La différence est éloquente en terme de proportion, à titre d’exemple le Handpan Endro® pèse moins de <strong>3.8 kg pour 50 cm</strong> de diamètre. Si l’on ajoute 2,5 cm à son rayon actuel, celui-ci pèserait environ 5 kg. Néanmoins, certains pourraient librement penser qu’une différence d’un kilo n’est pas si importante. Et pourtant, tant sur l’aspect du transport que du plaisir de jeu ; la différence de confort sera sensible.</li>
                <li>L’<strong>encombrement</strong> : quelques centimètres supplémentaires au diamètre de l’instrument suffisent pour que son encombrement soit sensiblement augmenté. L’ergonomie est altérée, ce qui compromet l’aisance de jeu et donc le plaisir de jouer est diminué.</li>
              </ul>
              <p>Il apparaît clairement un <strong>paradoxe</strong> entre la taille du handpan et les qualités qui le constituent. Certaines qualités (le volume sonore, la projection du son, la résonance…) sont favorisées par l’augmentation de la taille de l’instrument, alors que d’autres qualités (le poids, l’encombrement, l’ergonomie…) sont altérées par ce même paramètre.</p>
              <p>Dans le compromis qui oppose ces différentes qualités, nous ne souhaitions faire <strong>aucune concession</strong> sur les qualités acoustiques générales et sur les qualités de confort et d’ergonomie.</p>
              <p>Nous allons vous expliquer comment la recherche et le développement des techniques que nous avons mené pour la fabrication du Handpan Endro® nous ont permis de pallier à ces contraintes.</p>
            </BodyText>
          </section>

          <AnimatedImage src="/uploads/2020/05/fabricant-handpan-grosplan-note.jpg" alt="Gros plan sur une note de handpan Ederod" />

          {/* Section 2: Matière */}
          <section>
            <SectionTitle>La matière première d’un Handpan Endro® : la tôle</SectionTitle>
            <BodyText>
                <p>Un instrument de musique est bien souvent la combinaison de deux principaux facteurs :</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>Une <strong>émission source du son</strong> (les cordes par exemple pour un violon)</li>
                    <li>Une <strong>caisse de résonance</strong> qui joue le rôle d’amplificateur</li>
                </ol>
                <p>Le son perçu résulte du couplage entre l’émission source et son amplification par la caisse de résonance. Nous avons vu que limiter la taille du Handpan oblige à limiter le volume de résonance. Limiter la taille du Handpan revient donc à limiter les capacités d’amplification.</p>
                <p>Dès lors pour augmenter les qualité acoustiques de notre Handpan, nous ne pouvons donc qu’ influer sur le premier paramètre : la <strong>source d’émission du son</strong>.</p>
                <p>Ce qui signifie compenser par une émission source de <em>plus grande intensité</em>.</p>
                <p>C’est cette voie que nous avons choisie : augmenter en intensité l’émission source du son. Nous avons vu que pour un violon la source d’émission du son correspond au cordes quelle serait donc la source d’émission du son pour un handpan ?</p>
                <p>Bien sûr, c’est la <strong>Tôle</strong> utilisée !</p>
                <p>Le type de tôle utilisé pour un Handpan Endro® : Il existe des centaines de nuances d’aciers différents, selon leurs compositions chimiques et le traitement apporté. Chaque acier a des particularités et des propriétés différentes. Précisément, ce sont les propriétés de la tôle d’acier utilisée pour fabriquer le handpan qui vont déterminer l’intensité de l’émission du son en terme de <strong>potentiel de vibration</strong> (équivalent à <em>« module de fréquence »</em>).</p>
                <p>Depuis 2012, nous avons beaucoup investi en recherche dans l’objectif de développer une tôle avec de meilleures propriétés d’émission du son. La tôle de notre Handpan Endro® devait avoir pour propriété un potentiel de vibration très élevé afin d’accroitre considérablement l’intensité de l’émission source du son. A l’issue de ces recherches et de multiples essais, nous avons réussi à produire un matériau que nous pourrions qualifier de <strong>‟SUPER-tôle”</strong>.</p>
                <p>Le principe générale de cette ‟SUPER-tôle” consiste en un enrichissement important de la tôle en carbone. C’est une technologie dont nous sommes les précurseurs, que nous avons inventé, et qui nous est propre (nous avons déposé un brevet en 2013 pour cette technologie).</p>
            </BodyText>
          </section>
          
          <AnimatedImage src="/uploads/2020/04/ederod-fabricant-handpan-1.png" alt="Micrographie de la tôle brevetée Ederod" />
          <p className="text-center text-sm text-gray-500 -mt-8">Micrographie de notre tôle x50</p>

          <section>
            <BodyText>
                <p>Ce résultat très satisfaisant nous a permis de construire tous les Handpans Endro® de première, deuxième et troisième génération. En 2016, encouragé par cette première réussite, nous avons poursuivi nos investissements et nos recherches en vue de produire ce que l’on peut qualifier d’une <strong>‟HYPER-tôle”</strong> !</p>
                <p>Nous avons gardé la même base que le traitement au carbone initial en l’affinant et le perfectionnant sur différents points. Nous sommes arrivés à la production de cette ‟HYPER-tôle” qui est encore davantage <em>nerveuse</em> avec un potentiel de vibration encore plus élevé.</p>
                <p>Le résultat de ce travail est sans équivoque : nous obtenons une tôle spécifiquement conçue pour être sonore et parfaitement adaptée à la conception du Handpan Endro®. L’émission source du son est d’une très grande intensité.</p>
                <p>Ce perfectionnement a été mis au point avec la quatrième génération et est utilisé encore actuellement pour la construction de nos Handpans Endro.</p>
            </BodyText>
          </section>

          <AnimatedImage src="/uploads/2020/05/fabricant-handpan-cerclage-cuivre.jpg" alt="Détail du cerclage en cuivre d'un handpan Ederod" />
            <BodyText>
                <p>Grâce aux qualités de cette « HYPER-tôle », nous avons réussi à résoudre notre précédent paradoxe : l’émission du son produite par notre tôle est d’une telle intensité que même avec un handpan de diamètre raisonné, le volume sonore et la projection sont de grande qualité.</p>
                <p>(A titre informatif, le Handpan Endro® a les capacités de rendre un volume moyen de <strong>85 dB</strong> mesuré à une distance d’un mètre de l’instrument, ce qui le rend comparativement, comme l’un des handpans les plus sonores que l’on connaisse.)</p>
            </BodyText>
          {/* Section 3: Esthétique */}
          <section>
            <SectionTitle>L’esthétique :</SectionTitle>
            <BodyText>
                <blockquote className="border-l-4 border-amber-400 pl-8 italic text-2xl my-8">« Le Handpan Endro® est puissant de par son son, doux de par ses courbes, léger de par sa taille ».</blockquote>
                <p>Lorsque l’on regarde dans la nature, on peut observer à quel point l’efficacité d’une chose est corrélée à son apparence, se traduisant par des lignes (un design) qui lui sont associées.</p>
                <p>Par le principe de l’évolution : la spécialisation s’exprime dans la sélection à travers un principe d’efficacité. Ce qui signifie que les lignes sont guidées, en tant <em>‟qu’expression d’une efficacité”</em>. Ainsi, toute chose à la forme de ce pourquoi elle est faite. Et plus elle demandera à être efficace dans un domaine, plus sa forme lui sera spécifique.</p>
                <p>Selon ce principe, si le Handpan Endro® a des courbes à la fois douce et une cambrure racée, c’est le reflet d’une très grande <em>vélocité</em>.</p>
                <p>Aussi, nous avons fait le choix de délimiter nos notes par l’action simple du marteau afin d’obtenir une courbe continue entre le pourtour de la note et l’intérieur de celle-ci. Cette manière de construire le Handpan Endro® est tout bonnement, pour nous, un <strong>gage d’authenticité</strong>.</p>
                <p>Certains handpans ont le pourtour des notes bien délimité, par une arête : c’est bien souvent parce que les notes sont <em>pressées</em> et non façonnées à la main par le travail du marteau. Lorsque la note est délimitée par une arrête, cela crée une cassure dans la continuité de la coque menant à l’aire de résonance de la note.</p>
                <p>Délimiter le pourtour de chaque note par de belles courbes demande plus de temps de façonnage et de savoir-faire.</p>
                <p>Un façonnage authentique au marteau, tout comme le principe d’une voûte, assure une <strong>continuité dans la répartition des contraintes</strong> : ce qui offre beaucoup plus de nuances dans la manière de faire sonner la note ainsi qu’une meilleure tenue de l’accordage. Nous estimons que la continuité des courbes permet également de réaliser un type d’accordage qui assure une mise en valeur de l’expressivité de la note : des notes à la fois <em>sensibles, nerveuses et très toniques</em>. Enfin, il nous paraît évident que lorsque l’ensemble des courbes qui façonnent un Handpan s’entremêlent les unes aux autres dans une harmonieuse continuité, le résultat est esthétiquement bien supérieur.</p>
                <p>Concernant l’apparence générale :</p>
                <p>Pour l’habillage esthétique du Handpan Endro® et afin de pallier aux problèmes de corrosion, nous avons choisi de ne pas apporter un revêtement filmogène (type peinture, vernis etc.) sur nos handpans.</p>
                <p>Nous avons recours à ce qu’on appelle un <strong>traitement de brunissage</strong>. C’est une oxydation de surface qui teinte joliment le métal d’une couleur noire. Il nécessite simplement d’apporter de manière régulière un corps gras (tel que l’huile de noix de coco) afin de maintenir son efficacité contre la corrosion.</p>
            </BodyText>
          </section>

          <AnimatedImage src="/uploads/2020/05/fabricant-handpan-vuededessus.jpg" alt="Vue de dessus d'un Handpan Endro®" />

          {/* Conclusion */}
          <section>
            <SectionTitle>En conclusion</SectionTitle>
            <BodyText>
              <p>la fabrication de nos Handpans Endro® intègre un véritable travail de réflexion et de recherche, l’objectif étant d’offrir des handpans de haute qualité.</p>
              <p>Nous avons donc mené un véritable travail de fond qui a mobilisé beaucoup de temps et de ressources. Aujourd’hui, nous avons acquis une compréhension plus globale de nos Handpans Endro® à travers l’invention de notre « HYPER-tôle » et la maîtrise de nos propres procédés de fabrication. Cet aboutissement confère à nos instruments un confort de jeu et une sonorité unique.</p>
              <p className="mt-8 text-sm text-gray-500">Notes : les particularités citées sont le fruit d’une conception du handpan qui est propre à la société Ederod. Elles décrivent à la fois notre vision et le travail associé au développement et à la fabrication de nos Handpans Endro®. Elles n’ont pas vocation à vouloir s’imposer à d’autres conceptions.</p>
              <p className="mt-4 text-sm text-gray-500">Nous espérons qu’elles vous aideront à comprendre notre engagement, l’investissement déployé et vous donneront l’envie d’essayer l’un de nos Handpans Endro®.</p>
            </BodyText>
          </section>
        </motion.article>
        
        <ArtisanCallout />
      </main>
      <Footer />
    </div>
  );
};

export default NotreVisionPage;
