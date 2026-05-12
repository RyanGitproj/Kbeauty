/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import express from 'express';
import { getAllCourses, getCourseById, createCourse } from '../controllers/courseController';

const router = express.Router();

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Récupère tous les cours disponibles
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Liste des cours récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Course'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getAllCourses);

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Récupère un cours par son ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du cours
 *     responses:
 *       200:
 *         description: Cours récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Course'
 *       404:
 *         description: Cours non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', getCourseById);

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Crée un nouveau cours
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: ['title', 'description', 'price', 'duration', 'image', 'category', 'features']
 *             properties:
 *               title:
 *                 type: string
 *                 example: Formation Microblading
 *               description:
 *                 type: string
 *                 example: Formation complète au microblading
 *               price:
 *                 type: number
 *                 example: 1200
 *               originalPrice:
 *                 type: number
 *                 example: 1500
 *               duration:
 *                 type: string
 *                 example: 3 jours
 *               image:
 *                 type: string
 *                 example: https://example.com/image.jpg
 *               category:
 *                 type: string
 *                 example: Sourcils
 *               features:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Certification incluse", "Matériel fourni"]
 *               available:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Cours créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Course'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', createCourse);

export default router;
