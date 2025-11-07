import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CgvPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <main className="flex-grow bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-base font-semibold text-yellow-600">Juridique</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">Conditions Générales de Vente</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">Dernière mise à jour : 7 novembre 2025</p>
          </div>
          <div className="mt-16 bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto legal-content">
            <h2>Conditions générales de vente</h2>
            <h3>Introduction</h3>
            <p>Les présentes Conditions Générales de Vente (CGV) établissent les conditions contractuelles applicables à toute vente conclue entre Handpan-ederod.com et les Clients enregistrés sur le site.<br />
            Tout achat vaut acceptation pleine et entière des CGV en vigueur.</p>
            <p>Identité :</p>
            <ul>
              <li>Nom : Ederod</li>
              <li>Siège social : 1D Chem. de Halage de Casamene, 25000 Besançon.</li>
              <li>E-mail : ederod@hotmail.fr</li>
              <li>Numéro de téléphone : 06 65 31 23 52</li>
            </ul>
            <h3>Prix</h3>
            <p>Les prix de tous nos produits sont indiqués en euros (€) toutes taxes comprises hors participation aux frais de traitement et d’expédition.<br />
            Les articles seront facturés sur la base des tarifs en vigueur au moment de l’enregistrement des commandes. Ils demeurent la propriété de handpan-ederod.com jusqu’au paiement complet du prix.</p>
            <h3>Commande et livraison :</h3>
            <h4>Processus de commande</h4>
            <p>Le processus de commande est le suivant :</p>
            <ul>
              <li>Choix des articles et ajout au panier</li>
              <li>Validation du contenu du panier</li>
              <li>Identification sur le site si le Client n’est pas déjà identifié</li>
              <li>Choix du mode de livraison</li>
              <li>Choix du mode de paiement et acceptation des CGV</li>
              <li>Validation du paiement</li>
            </ul>
            <p>Le Client a la possibilité de visualiser durant les différentes étapes le détail de sa commande et son prix total et corriger d’éventuelles erreurs.<br />
            Le Client recevra un e-mail de confirmation de commande suite à la validation de sa commande.</p>
            <p>Handpan-ederod.com reste propriétaire des articles jusqu’au règlement complet de la commande, c’est-à-dire à l’encaissement du prix de la commande par Handpan-ederod.com.<br />
            Handpan-ederod.com se réserve le droit d’annuler ou de refuser toute commande d’un Client avec lequel il existerait un litige relatif au paiement d’une commande antérieure ou qui présenterait à ses yeux une quelconque forme de risque.<br />
            La validation de la commande vaut acceptation des prix et description des articles disponibles à la vente.</p>
            <h4>Expédition et Livraison</h4>
            <p>Handpan-ederod.com s’engage à livrer les articles commandés et payés à l’adresse choisie par le Client et selon le mode et les délais de livraison suivants :<br />
            Livraison en France métropolitaine : DPD</p>
            <p>La livraison est offerte à partir de deux produits achetés. En deçà de ce montant, les frais de livraison seront de 48€.<br />
            Le Client est tenu de vérifier l’état des articles livrés et d’en notifier Handpan-ederod.com en cas d’anomalie et ce dans un délai de 7 jours. Nous entendons par anomalie : avarie, article manquant par rapport au bon de commande, colis endommagé ou ouvert, article cassé.<br />
            Tous les articles proposés par Handpan-ederod.com sont soumis à la garantie légale prévue par les articles 1641 et suivants du Code Civil.</p>
            <h3>Paiement</h3>
            <h4>Moyens de paiement</h4>
            <p>Le Client a le choix de son moyen de paiement parmi ceux-ci :</p>
            <ul>
              <li>Carte bancaire via Systempay de la Caisse d’Epargne</li>
            </ul>
            <h3>Echange, retour et remboursement</h3>
            <h4>Droit de rétractation</h4>
            <p>Conditions :<br />
            Conformément aux dispositions légales en vigueur, vous disposez d’un délai de 14 jours à compter de la réception de vos produits pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalité. Après communication de votre décision d’exercer votre droit de rétractation dans ce délai de 14 jours, vous disposez d’un autre délai de 14 jours pour renvoyer le ou les produits concernés par la rétractation. Le coût de livraison pour le retour est pris en charge par le Client.</p>
            <h4>Conditions d’échange et de retour pour remboursement</h4>
            <p>Le(s) article(s) retourné(s) doivent être dans leur état et boite d’origine parfaitement intacts et ne doivent pas avoir été utilisés sans quoi la responsabilité du Client sera celle engagée.<br />
            Tout échange ou retour doit faire l’objet d’une demande d’échange ou de retour à partir de la rubrique Contact du site Handpan-ederod.com.<br />
            Si la commande du Client comporte plusieurs articles et qu’il souhaite retourner plus d’un article, il devra sélectionner lors de cette demande de retour tous les articles qu’il souhaite échanger ou se faire rembourser.<br />
            En France, le Client devra renvoyer ses articles par DPD et s’engage à les emballer aussi précautionneusement que Handpan-ederod.com l’a fait pour l’expédition, car les produits retournés incomplets, endommagés ou salis ne seront pas repris<br />
            Si le Client venait à renvoyer des articles par tout autre mode de transport, il ne pourrait demander aucun remboursement de la part de Handpan-ederod.com.</p>
            <h4>Etat des articles</h4>
            <p>Tous les articles retournés devront être renvoyés parfaitement intacts.<br />
            Aucun retour ne sera accepté si les articles retournés ont subi une dégradation de leur état d’origine les rendant impropre à la vente ou ont été utilisés.<br />
            Si tel était le cas lors d’un échange de produit(s), Handpan-ederod.com pourra exercer toutes actions de recouvrement correspondantes auprès du Client.<br />
            De la même manière, si le(s) produit(s) retourné(s) n’étaient pas conformes, le remboursement ne pourrait avoir lieu.</p>
            <h4>Remboursement</h4>
            <p>Le remboursement sera effectué dès réception et contrôle de la conformité des articles par Handpan-ederod.com. Le remboursement sera reversé sur la carte utilisée lors du paiement.<br />
            En cas de réception d’un colis retour dont le contenu ne serait pas conforme à la demande de retour ou dont les articles ne respecteraient pas les conditions de retour mentionnées ci-dessus, Handpan-ederod.com se réserve le droit d’exercer toutes actions de recouvrement correspondantes auprès du Client.<br />
            Le Client dispose de 7 jours à compter de la réception de son colis retour pour formuler une réclamation.<br />
            Aucune demande ne sera acceptée à l’issue de ce délai.<br />
            Le Client devra transmettre sa réclamation à Handpan-ederod.com via le formulaire de la page contact.</p>
            <h3>Garantie</h3>
            <p>Nos articles proposés sur Handpan-ederod.com sont soumis à la garantie légale prévue par les articles L 217-4, et suivants du Code de la Consommation et à la garantie des vices cachés prévue par les articles 1641 et suivants du Code Civil.<br />
            Le Client dispose ainsi de deux 2 ans pour utiliser l’une ou l’autre de ces garanties. Pour le défaut de conformité, le délai commence à compter de la délivrance. Pour les vices cachés, le délai commence à compter de la découverte du vice.<br />
            Dans le cas d’un vice apparent, d’un défaut de conformité ou encore d’un vice caché de l’article une expertise aura lieu. Elle sera suivie, si le défaut ou le vice est avéré, d’un échange ou d’une réparation. En cas d’impossibilité, Handpan-ederod.com se réserve le droit de rembourser le Client à ses frais.<br />
            Handpan-ederod.com ne saurait être tenu pour responsable de la mauvaise utilisation et/ou d’un usage anormal des articles que pourrait en faire le Client. De même, Handpan-ederod.com ne saurait être tenu pour responsable du retour d’un produit concurrent et/ou non vendu sur le Site par le Client. Il incombe au Client de renvoyer le bon article.<br />
            Handpan-ederod.com ne propose pas de garantie commerciale.</p>
            <h3>Responsabilité</h3>
            <p>Handpan-ederod.com est responsable de la bonne exécution du contrat conclu avec le Client.<br />
            En cas de force majeure toutefois, nous ne saurions être tenu responsable de l’inexécution du contrat ou d’un défaut dans son exécution.<br />
            Nous ne sommes pas responsables des liens hypertextes qui pourraient être affichés sur notre site et créer un préjudice pour le Client.</p>
            <h3>Réserve de propriété</h3>
            <p>Handpan-ederod.com reste propriétaire des produits jusqu’à paiement complet.</p>
            <h3>Propriété intellectuelle</h3>
            <p>Tous les textes, commentaires, ouvrages, illustrations et images reproduits sur Handpan-ederod.com sont réservés au titre du droit d’auteur ainsi qu’au titre de la propriété intellectuelle et pour le monde entier. Toute reproduction totale ou partielle du site de Handpan-ederod.com est strictement interdite sans accord donné stipulant le contraire.</p>
            <h3>Droit applicable</h3>
            <p>Les présentes conditions générales d’utilisation et de vente sont soumises à la loi française. En cas de désaccord persistant sur l’application, l’interprétation et l’exécution des présentes, et à défaut d’accord amiable, tout litige relèvera des tribunaux compétents français</p>
            <h2>Politique de confidentialité</h2>
            <h4>Qui sommes-nous ?</h4>
            <p>L’adresse de notre site est : <a href="../index.html">https://handpan-ederod.com/</a>.</p>
            <h4>Cookies</h4>
            <p>Si vous vous rendez sur la page de connexion, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.<br />
            Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.<br />
            En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.</p>
            <h4>Contenu embarqué depuis d’autres sites</h4>
            <p>Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.<br />
            Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.</p>
            <h4>Utilisation et transmission de vos données personnelles</h4>
            <p>Si vous demandez une réinitialisation de votre mot de passe, votre adresse IP sera incluse dans l’e-mail de réinitialisation.</p>
            <h4>Durées de stockage de vos données</h4>
            <p>Pour les comptes qui s’inscrivent sur Handpan-ederod.com, nous stockons également les données personnelles indiquées dans leur profil. Tous les comptes peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur identifiant). Les gestionnaires du site peuvent aussi voir et modifier ces informations.</p>
            <h4>Les droits que vous avez sur vos données</h4>
            <p>Si vous avez un compte, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.<br />
            Nous collectons des informations lors de la validation de commande sur notre boutique.</p>
            <h4>Ce que nous collectons et stockons</h4>
            <p>Pendant votre visite du site, nous suivons :</p>
            <ul>
              <li>Produits que vous avez vus : permet par exemple d’afficher des produits que vous avez récemment consultés</li>
              <li>Localisation, adresse IP et type de navigateur : nous les utilisons pour l‘estimation des taxes et frais de port</li>
              <li>Adresse de livraison : nous vous demanderons de la saisir pour estimer les frais d’expédition avant que vous passiez commande, et pour vous envoyer la commande !</li>
            </ul>
            <p>Nous utilisons des cookies pour suivre les contenus du panier pendant que vous naviguez sur notre site.</p>
            <p>Quand vous achetez sur notre site web, nous vous demanderons de fournir des informations incluant votre nom, adresse de facturation, adresse de livraison, e-mail, numéro de téléphone, données de paiement / carte bancaire et éventuellement les données du compte tel que l’identifiant et le mot de passe. Ces informations seront utilisées pour :</p>
            <ul>
              <li>Envoie de l’information à propos de votre compte et commande</li>
              <li>Répondre aux demandes, incluant les remboursements et plaintes</li>
              <li>Traitement des paiements et prévention de la fraude</li>
              <li>Configurez votre compte pour notre boutique</li>
              <li>Se conformer avec toute obligation légale, telle que le calcul des taxes</li>
              <li>Améliorer les offres de notre boutique</li>
              <li>Vous envoyer des newsletters dont vous pouvez vous désabonner en suivant le lien dans ces dernières</li>
            </ul>
            <p>Si vous créez un compte, nous stockons votre nom, adresse, e-mail, et numéro de téléphone, qui sera utilisé pour préremplir la validation de commande pour les prochaines commandes.</p>
            <p>Nous stockons généralement vos informations aussi longtemps que nous en avons besoin pour l’usage pour lequel nous les collectons et utilisons, et nous ne sommes pas obligés légalement de continuer à les conserver. Par exemple, nous stockons les informations de commande pour 10 années pour les taxes et la comptabilité. Ceci inclut votre nom, e-mail et adresses de facturation et livraison.</p>
            <h4>Qui de notre équipe a accès aux données</h4>
            <p>Les membres de notre équipe ont accès aux informations que vous nous fournissez. Par exemple, les administrateurs et gérants de boutique ont accès :</p>
            <ul>
              <li>Information de commande tel que ce qui a été acheté, quand et où cela doit être envoyé,</li>
              <li>Information client tel que votre nom, e-mail et informations de facturation et livraison.</li>
            </ul>
            <p>Notre équipe a accès à ces informations pour traîter les commandes, effectuer les remboursements et vous aider.</p>
            <h4>Ce que nous partageons avec d’autres</h4>
            <p>Nous partageons vos coordonnées avec DPD pour pouvoir envoyer vos commandes.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
