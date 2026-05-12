/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Link } from 'react-router-dom';
import { Course } from '../types/Course';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
          {course.category}
        </span>
        {course.originalPrice && (
          <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            -{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">{'★'.repeat(Math.floor(course.rating))}</span>
          <span className="text-gray-500 text-sm ml-2">({course.reviews})</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.duration}
        </div>
        <ul className="space-y-2 mb-6">
          {course.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <div>
            {course.originalPrice && (
              <span className="text-gray-400 line-through text-sm">{course.originalPrice}€</span>
            )}
            <span className="text-2xl font-bold text-primary ml-2">{course.price}€</span>
          </div>
          <Link
            to={`/courses/${course._id}`}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition text-sm"
          >
            Plus d'infos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
