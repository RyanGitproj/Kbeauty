/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Request, Response } from 'express';
import { getAllCourses, getCourseById, createCourse } from './courseController';
import Course from '../models/Course';

jest.mock('../models/Course');

describe('Course Controller - Unit Tests', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnThis();
    mockRequest = {};
    mockResponse = {
      json: jsonMock,
      status: statusMock
    };
    jest.clearAllMocks();
  });

  describe('getAllCourses', () => {
    it('should return all available courses', async () => {
      const mockCourses = [
        {
          _id: '1',
          title: 'Prothésiste Ongulaire',
          price: 300,
          available: true
        }
      ];

      (Course.find as jest.Mock).mockReturnValue({
        sort: jest.fn().mockResolvedValue(mockCourses)
      });

      await getAllCourses(mockRequest as Request, mockResponse as Response);

      expect(Course.find).toHaveBeenCalledWith({ available: true });
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockCourses
      });
    });

    it('should handle errors when fetching courses', async () => {
      (Course.find as jest.Mock).mockReturnValue({
        sort: jest.fn().mockRejectedValue(new Error('Database error'))
      });

      await getAllCourses(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Erreur lors de la récupération des formations'
      });
    });
  });

  describe('getCourseById', () => {
    it('should return a course by id', async () => {
      const mockCourse = {
        _id: '1',
        title: 'Prothésiste Ongulaire',
        price: 300,
        available: true
      };

      mockRequest = { params: { id: '1' } };
      (Course.findById as jest.Mock).mockResolvedValue(mockCourse);

      await getCourseById(mockRequest as Request, mockResponse as Response);

      expect(Course.findById).toHaveBeenCalledWith('1');
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: mockCourse
      });
    });

    it('should return 404 if course not found', async () => {
      mockRequest = { params: { id: 'nonexistent' } };
      (Course.findById as jest.Mock).mockResolvedValue(null);

      await getCourseById(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(404);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Formation non trouvée'
      });
    });

    it('should handle errors when fetching course by id', async () => {
      mockRequest = { params: { id: '1' } };
      (Course.findById as jest.Mock).mockRejectedValue(new Error('Database error'));

      await getCourseById(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Erreur lors de la récupération de la formation'
      });
    });
  });

  describe('createCourse', () => {
    it('should create a new course', async () => {
      const courseData = {
        title: 'Nouvelle Formation',
        description: 'Description de la formation',
        price: 500,
        duration: '2 jours',
        image: 'https://example.com/image.jpg',
        category: 'Ongles',
        features: ['Feature 1']
      };

      const savedCourse = {
        _id: '1',
        ...courseData,
        available: true,
        rating: 0,
        reviews: 0
      };

      mockRequest = { body: courseData };
      (Course.prototype.save as jest.Mock).mockResolvedValue(savedCourse);

      await createCourse(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        data: savedCourse
      });
    });

    it('should handle errors when creating course', async () => {
      mockRequest = { body: {} };
      (Course.prototype.save as jest.Mock).mockRejectedValue(new Error('Database error'));

      await createCourse(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Erreur lors de la création de la formation'
      });
    });
  });
});
