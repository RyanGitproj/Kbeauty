/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import express from 'express';
import { createSignatureRequest, getSignatureStatus } from '../controllers/docusignController';

const router = express.Router();

/**
 * @swagger
 * /api/docusign/sign:
 *   post:
 *     summary: Crée une demande de signature DocuSign
 *     tags: [DocuSign]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: ['documentPath', 'signerEmail', 'signerName']
 *             properties:
 *               documentPath:
 *                 type: string
 *                 example: /documents/contrat.pdf
 *               signerEmail:
 *                 type: string
 *                 format: email
 *                 example: client@example.com
 *               signerName:
 *                 type: string
 *                 example: Jean Client
 *     responses:
 *       200:
 *         description: Demande de signature créée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         description: Champs manquants
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
router.post('/sign', createSignatureRequest);

/**
 * @swagger
 * /api/docusign/status/{envelopeId}:
 *   get:
 *     summary: Récupère le statut d'une demande de signature
 *     tags: [DocuSign]
 *     parameters:
 *       - in: path
 *         name: envelopeId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'enveloppe DocuSign
 *     responses:
 *       200:
 *         description: Statut récupéré
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/status/:envelopeId', getSignatureStatus);

export default router;
