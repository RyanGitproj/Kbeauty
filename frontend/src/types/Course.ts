/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  image: string;
  category: string;
  features: string[];
  rating: number;
  reviews: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}
