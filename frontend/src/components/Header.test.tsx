/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the logo correctly', () => {
    render(<Header />);
    expect(screen.getByText('K')).toBeInTheDocument();
    expect(screen.getByText('BEAUTY')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('Formations')).toBeInTheDocument();
    expect(screen.getByText('Réserver')).toBeInTheDocument();
  });
});
