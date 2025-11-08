import ArtisanCallout from "@/components/ArtisanCallout";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HeroIntroduction from "@/components/HeroIntroduction";
import HighQuality from "@/components/HighQuality";
import MadeInFrance from "@/components/MadeInFrance";
import Manufacturing from "@/components/Manufacturing";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import MaterialQuality from "@/components/MaterialQuality";
import MoreInfo from "@/components/MoreInfo";
import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <div>
        <main>
          {/* Section Hero */}
          <section
            className="relative h-screen bg-cover bg-center flex items-center justify-center text-white shadow-lg"
            style={{
              backgroundImage:
                "url('https://handpan-ederod.com/wp-content/uploads/2023/10/fabricant-handpan-France.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center px-4">
              <h1
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white to-[#EEC980] text-transparent bg-clip-text"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
              >
                Ederod <span className="text-white bg-gradient-to-r from-white to-[#EEC980] text-transparent bg-clip-text">Handpan</span>
              </h1>
              <p className="mt-4 text-xl md:text-2xl font-light">
                L'instrument de musique <span className="italic">artisanal</span>, forgé pour vous à <strong className="font-bold">Paris</strong>.
              </p>
            </div>
          </section>
              
          {/* Section Présentation */}
          <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Le Handpan Endro® 5éme génération
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Le <strong>Endro®</strong> est un instrument de percussion mélodique en acier, issu de la famille des « <strong>handpans</strong> ». Cette famille regroupe des instruments dérivés du steelpan ou steeldrum des Caraïbes, joués avec des baguettes, tandis que les handpans sont joués avec les mains.
                </p>
                <p>
                  Le handpan Endro® se distingue par son approche de jeu très <em>intuitive</em> et ludique, grâce à son <strong>ergonomie</strong> et à son accordage sur un mode prédéfini.
                </p>
                <p>
                  L'instrument est <strong>sensible</strong> : un léger tapotement du bout des doigts suffit à obtenir une <strong>résonance</strong>, produisant une note.
                </p>
                <p>
                  Le <strong>timbre</strong> du Endro® se caractérise par un <em>son chaud et doux</em>, combiné à une <em>résonance vibratoire</em> forte et nette, comparable au tintement d'une cloche ou d'un verre en cristal. Grâce aux qualités intrinsèques de la tôle d'acier utilisée, cela produit l'émission d'<strong>harmoniques riches</strong>.
                </p>
                <p>
                  Les qualités acoustiques et la facilité d'utilisation offrent de multiples approches possibles de l'instrument. Il peut être amusant et récréatif, purement musical ou un support à la <em>méditation</em>.
                </p>
                <p>
                  Le handpan Endro®, que vous placez sur vos genoux, <strong>vibre entre vos mains</strong> et agit comme un médium délivrant l'expression dans la création d'un <em>son sensible</em>.
                </p>
              </div>
            </div>
          </section>

          <ProductList />
          <Manufacturing />
          <HeroIntroduction />
          <ManufacturingProcess />
          <MaterialQuality />
          <ArtisanCallout />
          <HighQuality />
          <Gallery />
          <MadeInFrance />
          <MoreInfo />
          
        </main>
        <Footer />
      </div>
    </div>
  );
}
