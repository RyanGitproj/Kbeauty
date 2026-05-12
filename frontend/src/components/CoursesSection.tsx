/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { useCourses } from '../hooks/useCourses';
import CourseCard from './CourseCard';

interface CoursesSectionProps {
  searchQuery: string;
}

const CoursesSection = ({ searchQuery }: CoursesSectionProps) => {
  const { courses, loading, error } = useCourses();

  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span>Chargement depuis l'API...</span>
          </div>
          <p className="text-gray-500">Veuillez patienter...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <p className="text-red-600 font-semibold mb-2">Erreur de connexion au backend</p>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Connecté au backend
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Des formations concrètes pour un métier rentable
          </h2>
          <p className="text-gray-500">
            {searchQuery 
              ? `${filteredCourses.length} résultat${filteredCourses.length > 1 ? 's' : ''} pour "${searchQuery}"`
              : `${courses.length} formations chargées depuis la base de données MongoDB`
            }
          </p>
        </div>
        
        {filteredCourses.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune formation trouvée pour "{searchQuery}"</p>
          </div>
        )}
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
