/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, To } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

type NavLink =
  | { to: To; label: string; action?: never }
  | { to?: never; label: string; action: () => void };

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const scrollToCourses = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#formations');
    } else {
      const element = document.getElementById('formations');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && (location.hash === '#formations' || searchQuery)) {
      const tryScroll = () => {
        const element = document.getElementById('formations');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          requestAnimationFrame(tryScroll);
        }
      };
      tryScroll();
    }
  }, [location, searchQuery]);

  const navLinks: NavLink[] = [
    { to: '/', label: 'Accueil' },
    { label: 'Formations', action: scrollToCourses },
    { to: '/boutique', label: 'Boutique' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">K</span>
            <span className="text-2xl font-light text-gray-600">BEAUTY</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              'to' in link ? (
                <Link
                  key={index}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition ${typeof link.to === 'string' && location.pathname === link.to ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary'}`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={link.action}
                  className="text-gray-700 hover:text-primary transition text-left"
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Rechercher une formation..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (location.pathname !== '/') {
                        navigate('/');
                      }
                    }}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button onClick={() => setSearchOpen(true)} className="text-gray-600 hover:text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>
            {isLoggedIn ? (
              <>
                <span className="text-gray-700">
                  Bonjour, {user?.firstName || 'Utilisateur'}
                </span>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary transition">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary transition">
                  Connexion
                </Link>
                <Link to="/register" className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
                  Inscription
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <div className="px-4">
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (location.pathname !== '/') {
                    navigate('/');
                  }
                }}
                className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            
            {navLinks.map((link, index) => (
              'to' in link ? (
                <Link
                  key={index}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition ${typeof link.to === 'string' && location.pathname === link.to ? 'bg-primary bg-opacity-10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={link.action}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  {link.label}
                </button>
              )
            ))}
            
            <div className="border-t border-gray-100 pt-4 px-4 space-y-3">
              {isLoggedIn ? (
                <>
                  <p className="text-center text-gray-700 font-medium">
                    Bonjour, {user?.firstName || 'Utilisateur'}
                  </p>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
                  >
                    Inscription
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
