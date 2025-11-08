import ArtisanCallout from "@/components/ArtisanCallout";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HighQuality from "@/components/HighQuality";
import Manufacturing from "@/components/Manufacturing";
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
                Le Handpan Endro®
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  The <strong>Endro®</strong> is a steel melodic percussion instrument from the
                  ‘<strong>handpan</strong>’ family. This family includes instruments derived
                  from the steelpan or steeldrum category from the Caribbean,
                  played with sticks, whilst handpans are played with the hands.
                </p>
                <p>
                  The handpan Endro® is particular in that it brings a very
                  <em> intuitive</em> and fun approach to playing because of its
                  <strong>ergonomics</strong> and because it is tuned to a pre-determined mode.
                </p>
                <p>
                  The instrument is <strong>sensitive</strong> : a slight tapping of the
                  fingertips is sufficient to achieve <strong>resonance</strong>, producing a
                  note.
                </p>
                <p>
                  The <strong>timbre</strong> of the Endro® is characterised by a <em>warm, soft
                  sound</em> combined with a strong, sharp <em>vibrational resonance</em>
                  which is comparable to the tinkling of a bell or a crystal
                  glass. Thanks to the intrinsic qualities of the steel table
                  used, this produces the emission of <strong>rich harmonics</strong>.
                </p>
                <p>
                  The acoustic qualities and ease of use offer multiple possible
                  approaches to the instrument. It can be fun and recreational,
                  purely musical or a support to <em>meditation</em>.
                </p>
                <p>
                  The handpan Endro®, which you place on your lap, <strong>vibrates
                  between your hands</strong> and acts as a medium delivering expression
                  in the creation of a <em>sensitive sound</em>.
                </p>
              </div>
            </div>
          </section>

          <ProductList />
          <Manufacturing />
          <ArtisanCallout />
          <HighQuality />
          <Gallery />
          <MoreInfo />
          
        </main>
        <Footer />
      </div>
    </div>
  );
}
