/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Request, Response } from 'express';
import Course, { ICourse } from '../models/Course';

export const getAllCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await Course.find({ available: true }).sort({ createdAt: -1 });
    res.json({
      success: true,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des formations'
    });
  }
};

export const getCourseById = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Formation non trouvée'
      });
      return;
    }
    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération de la formation'
    });
  }
};

export const createCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course: ICourse = new Course(req.body);
    const savedCourse = await course.save();
    res.status(201).json({
      success: true,
      data: savedCourse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création de la formation'
    });
  }
};
