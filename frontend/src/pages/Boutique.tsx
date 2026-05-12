/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Link } from 'react-router-dom';

const Boutique = () => {
  return (
    <main className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm mb-6">
          Bientôt disponible
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Notre Boutique</h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez bientôt notre sélection de produits professionnels pour les prothésistes ongulaires et experts cils.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
};

export default Boutique;
