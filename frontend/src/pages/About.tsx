/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="mb-8">
          <Link to="/" className="text-gray-500 hover:text-primary transition">
            ← Retour à l'accueil
          </Link>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">À propos de K Beauty Academy</h1>
          <p className="text-xl text-gray-600">
            Formons les experts beauté de demain depuis 2018
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="bg-gradient-to-br from-secondary to-white rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre mission</h2>
            <p className="text-gray-600 mb-6">
              Rendre les formations professionnelles en beauté accessibles à toutes, avec un enseignement 100% pratique et un accompagnement personnalisé.
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Développé par <span className="font-semibold text-gray-900">RAKOTOAHIJOHN Tsioritiana Ryan</span>
            </p>
            <a href="https://portfolio-eight-ivory-65.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
              Voir le portfolio →
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos chiffres</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">5+</p>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">1200+</p>
                <p className="text-gray-600">Étudiantes formées</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
                <p className="text-gray-600">Note moyenne</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">95%</p>
                <p className="text-gray-600">Taux de satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
