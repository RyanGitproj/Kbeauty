/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from '../models/Course';

dotenv.config();

const seedCourses = [
  {
    title: 'Prothésiste Ongulaire',
    description: 'Formation complète pour maîtriser l\'art de la prothèse ongulaire',
    price: 300,
    originalPrice: 500,
    duration: '3 jours',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=nail%20art%20training%20beauty%20school&image_size=landscape_4_3',
    category: 'Ongles',
    features: ['Kit professionnel inclus', 'Certification', 'Accompagnement post-formation'],
    rating: 4.9,
    reviews: 248,
    available: true
  },
  {
    title: 'Cils - Pose Cils à Cils',
    description: 'Apprenez la technique de pose de cils à cils professionnelle',
    price: 350,
    duration: '2 jours',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=eyelash%20extension%20training%20beauty%20salon&image_size=landscape_4_3',
    category: 'Cils',
    features: ['Kit professionnel inclus', 'Certification', 'Accompagnement post-formation'],
    rating: 4.8,
    reviews: 187,
    available: true
  },
  {
    title: 'Cils - Volume Russe',
    description: 'Maîtrisez la technique du volume russe pour un look intense',
    price: 450,
    originalPrice: 600,
    duration: '3 jours',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=russian%20volume%20eyelashes%20beauty%20treatment&image_size=landscape_4_3',
    category: 'Cils',
    features: ['Kit professionnel inclus', 'Certification', 'Accompagnement post-formation'],
    rating: 4.9,
    reviews: 156,
    available: true
  },
  {
    title: 'Nail Art & Décorations',
    description: 'Découvrez toutes les techniques de nail art créatif',
    price: 250,
    duration: '1 jour',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=creative%20nail%20art%20designs%20colorful&image_size=landscape_4_3',
    category: 'Ongles',
    features: ['Kit professionnel inclus', 'Certification', 'Accompagnement post-formation'],
    rating: 4.7,
    reviews: 134,
    available: true
  },
  {
    title: 'Business & Branding',
    description: 'Apprenez à créer et développer votre activité beauté',
    price: 200,
    duration: '1 jour',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beauty%20salon%20business%20entrepreneur%20laptop&image_size=landscape_4_3',
    category: 'Business',
    features: ['Modèles de documents', 'Accompagnement', 'Réseau professionnel'],
    rating: 4.8,
    reviews: 98,
    available: true
  },
  {
    title: 'Lifting des Cils & Brow Lamination',
    description: 'Formation complète sur le lifting des cils et la lamination des sourcils',
    price: 380,
    originalPrice: 520,
    duration: '2 jours',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=eyelash%20lift%20and%20brow%20lamination%20beauty%20treatment&image_size=landscape_4_3',
    category: 'Cils & Sourcils',
    features: ['Kit professionnel inclus', 'Certification', 'Accompagnement post-formation'],
    rating: 4.9,
    reviews: 167,
    available: true
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kbeauty');
    console.log('MongoDB connecté');

    await Course.deleteMany({});
    console.log('Anciennes formations supprimées');

    const createdCourses = await Course.create(seedCourses);
    console.log(`${createdCourses.length} formations créées`);

    process.exit(0);
  } catch (error) {
    console.error('Erreur lors du seeding:', error);
    process.exit(1);
  }
};

seedDatabase();
