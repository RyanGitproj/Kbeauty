/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4" onClick={scrollToTop}>
              <span className="text-2xl font-bold">K</span>
              <span className="text-2xl font-light">BEAUTY</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Académie de beauté professionnelle, formant les experts de demain.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Formations</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" onClick={() => { scrollToTop(); setTimeout(() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-primary transition">
                  Prothésiste Ongulaire
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => { scrollToTop(); setTimeout(() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-primary transition">
                  Pose Cils
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => { scrollToTop(); setTimeout(() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-primary transition">
                  Volume Russe
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => { scrollToTop(); setTimeout(() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-primary transition">
                  Nail Art
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/a-propos" onClick={scrollToTop} className="hover:text-primary transition">À propos</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-primary transition">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition">CGV</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: tsioritianaryan@gmail.com</li>
              <li>Tél: +261 34 71 967 67</li>
            </ul>
            <div className="mt-4 space-y-2">
              <Link to="/contact" onClick={scrollToTop} className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition text-sm">
                Nous contacter
              </Link>
              <a
                href="https://portfolio-eight-ivory-65.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-gray-600 text-gray-300 px-6 py-2 rounded-full hover:border-primary hover:text-primary transition text-sm"
              >
                Voir portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 K Beauty Academy. Tous droits réservés.</p>
          <p className="mt-2 text-gray-500">Développé par RAKOTOAHIJOHN Tsioritiana Ryan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
