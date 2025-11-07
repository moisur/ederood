import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: 'Fabrication - Endro® Handpan | Ederod',
  description: 'Fabrication artisanale des handpans Endro® par Ederod. Informations sur les gammes, prix, entretien et expédition.',
};

export default function FabricationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />

  <main className="grow container mx-auto px-6 py-20">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 prose prose-lg prose-stone">
          <h1>Endro® — un Handpan artisanal</h1>

          <p>
            Bienvenue sur le site d’Ederod, fabricant de Handpans artisanaux depuis 2012.
            Nous sommes basés à Besançon, à 70 km de la frontière Suisse.
          </p>

          <h2>Tradition, innovation et qualité</h2>
          <p>
            C’est Florent Recouvreux qui crée le <strong>Endro®</strong> (« Nature » en Breton)
            en 2012. Ederod développe actuellement sa cinquième génération de Handpan.
            Son diamètre est de 51 centimètres. Sculpté dans une tôle brevetée particulièrement
            nerveuse avec un potentiel de vibration élevé, c’est le fruit de plus de 10 années de recherche.
          </p>

          <h2>La gamme Endro®</h2>
          <p>Deux types de Endro® sont disponibles à l’achat :</p>
          <ul>
            <li>9 notes — 8 périphériques et une centrale</li>
            <li>10 notes — 9 périphériques et une centrale</li>
          </ul>
          <p>Il est également possible d’ajouter jusqu’à 6 notes sur le dessous.
          </p>

          <h3>Le Handpan en ré mineur</h3>
          <p>
            Dans la gamme de ré mineur, le Handpan Endro® est décliné selon trois modèles
            : <strong>Intégrale (Kurde)</strong>, <strong>Celtic (Amara)</strong> et <strong>Mystic</strong>,
            en fonction de votre usage.
          </p>

          <h3>Handpan « sur mesure »</h3>
          <p>
            Outre les gammes Mystic, Celtic ou Intégrale, nous réalisons des instruments « sur mesure ».
            Contactez-nous pour la faisabilité, les délais et un devis.
          </p>

          <h2>Les gammes Ré mineur : Celtic, Mystic et Intégrale</h2>
          <h4>Le Handpan gamme Intégrale (ou Kurde)</h4>
          <p>
            La gamme Intégrale est construite sur le mode « Eolien », qui caractérise la gamme de
            Ré mineur. Elle comprend toutes les notes de Ré mineur Eolien.
          </p>

          <h4>Le Handpan gamme Celtic (ou Amara)</h4>
          <p>
            La gamme Celtic propose des sonorités apaisées, moins nostalgiques que l’Intégrale — le Si
            bémol a été enlevé — et convient particulièrement à la musique celtique et à l’improvisation.
          </p>

          <h4>Le Handpan gamme Mystic</h4>
          <p>
            La gamme Mystic met en valeur la note Si bémol et produit des sonorités plus profondes
            et mélancoliques, avec une dimension spirituelle prononcée.
          </p>

          <h2>Acheter un Handpan Endro®</h2>
          <h4>Comment acheter ?</h4>
          <p>
            Le choix d’un Handpan se fait souvent à l’écoute, à l’instinct ou selon l’usage (groupe,
            musicothérapie, improvisation). Le sur-mesure ouvre de nombreuses possibilités.
          </p>

          <h4>Essayer un instrument</h4>
          <p>
            Nous vous invitons à nous contacter par téléphone ou à venir à l’atelier pour tester les
            instruments. Le rendez‑vous est toujours apprécié.
          </p>

          <h4>Prix</h4>
          <p>
            Prix indicatif : <strong>1 500 €</strong> pour le modèle 9 notes et <strong>1 650 €</strong>
            pour le modèle 10 notes. Le prix ne dépend pas de la gamme (Celtic, Mystic, Intégrale).
            Un devis est réalisé pour toute étude sur‑mesure.
          </p>

          <h4>Vente à distance</h4>
          <p>
            Pour un achat à distance, contactez-nous pour vérifier la disponibilité. Si l’instrument
            n’est pas en stock, nous vous informerons du délai.
          </p>

          <h4>Expédition</h4>
          <p>
            Les instruments sont expédiés dans un colis sur mesure et assurés pour le transport.
          </p>

          <h2>Complément d’informations</h2>
          <h4>Faire accorder son Handpan</h4>
          <p>
            En cas de dommage, il est parfois possible de ré-accorder ou réparer l’instrument selon
            l’étendue des dégâts.
          </p>

          <h4>Conseils de stockage</h4>
          <p>
            Stockez votre Handpan dans un endroit sec, à l’abri de l’humidité et du soleil. Vérifiez
            toujours l’état d’humidité avant de le ranger dans sa housse.
          </p>

          <h4>Conseils d’entretien</h4>
          <p>
            Après achat, appliquez régulièrement un corps gras (par ex. huile de noix de coco)
            pour nettoyer et protéger votre instrument.
          </p>

          <div className="mt-8">
            <a href="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full">
              Nous contacter pour un devis
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
