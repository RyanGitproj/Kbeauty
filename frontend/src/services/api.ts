/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import axios from 'axios';
import { Course } from '../types/Course';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const courseApi = {
  getAllCourses: async (): Promise<Course[]> => {
    const response = await api.get('/courses');
    return response.data.data;
  },

  getCourseById: async (id: string): Promise<Course> => {
    const response = await api.get(`/courses/${id}`);
    return response.data.data;
  },
};

export default api;
