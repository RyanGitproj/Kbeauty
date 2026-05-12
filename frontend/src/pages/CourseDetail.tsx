/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Course } from '../types/Course';
import { courseApi } from '../services/api';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await courseApi.getCourseById(id);
        setCourse(data);
      } catch (err) {
        setError('Formation non trouvée');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center gap-2 text-primary mb-4">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span>Chargement...</span>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8 inline-block">
          <p className="text-red-600 font-semibold text-xl mb-2">{error || 'Formation non trouvée'}</p>
          <Link to="/" className="text-primary hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link to="/" className="text-gray-500 hover:text-primary transition">
            ← Retour aux formations
          </Link>
        </nav>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">
                  {course.category}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-yellow-500">
                    {'★'.repeat(Math.floor(course.rating))}
                  </div>
                  <span className="text-gray-500">({course.reviews} avis)</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-600">{course.duration}</span>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{course.description}</p>

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ce que vous allez apprendre</h2>
                  <ul className="space-y-4">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  {course.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{course.originalPrice}€</span>
                  )}
                  <span className="text-4xl font-bold text-primary">{course.price}€</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-opacity-90 transition mb-4">
                Réserver maintenant
              </button>

              <button className="w-full border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition">
                Contacter l'académie
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certification incluse
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kit professionnel fourni
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accompagnement post-formation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetail;
