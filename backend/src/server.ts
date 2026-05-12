/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import connectDB from './config/database';
import courseRoutes from './routes/courseRoutes';
import authRoutes from './routes/authRoutes';
import docusignRoutes from './routes/docusignRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'K Beauty Academy API',
      version: '1.0.0',
      description: 'API pour la plateforme K Beauty Academy',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Serveur de développement',
      },
    ],
    components: {
      schemas: {
        Course: {
          type: 'object',
          required: ['title', 'description', 'price', 'duration', 'image', 'category', 'features'],
          properties: {
            _id: {
              type: 'string',
              description: 'ID auto-généré du cours',
            },
            title: {
              type: 'string',
              description: 'Titre du cours',
            },
            description: {
              type: 'string',
              description: 'Description du cours',
            },
            price: {
              type: 'number',
              description: 'Prix du cours',
            },
            originalPrice: {
              type: 'number',
              description: 'Prix original du cours (avant réduction)',
            },
            duration: {
              type: 'string',
              description: 'Durée du cours',
            },
            image: {
              type: 'string',
              description: 'URL de l\'image du cours',
            },
            category: {
              type: 'string',
              description: 'Catégorie du cours',
            },
            features: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Caractéristiques du cours',
            },
            rating: {
              type: 'number',
              description: 'Note moyenne du cours (0-5)',
            },
            reviews: {
              type: 'number',
              description: 'Nombre d\'avis',
            },
            available: {
              type: 'boolean',
              description: 'Disponibilité du cours',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date de création',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date de modification',
            },
          },
        },
        User: {
          type: 'object',
          required: ['email', 'password', 'firstName', 'lastName'],
          properties: {
            _id: {
              type: 'string',
              description: 'ID auto-généré de l\'utilisateur',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Email de l\'utilisateur',
            },
            firstName: {
              type: 'string',
              description: 'Prénom de l\'utilisateur',
            },
            lastName: {
              type: 'string',
              description: 'Nom de l\'utilisateur',
            },
            role: {
              type: 'string',
              enum: ['user', 'admin'],
              description: 'Rôle de l\'utilisateur',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date de création',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date de modification',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/server.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/docusign', docusignRoutes);

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Vérifie l'état de santé de l'API
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API fonctionnelle
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: API K Beauty Academy fonctionnelle
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API K Beauty Academy fonctionnelle',
    timestamp: new Date().toISOString()
  });
});

const isMainModule = require.main === module;

if (isMainModule) {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
      console.log(`Documentation API disponible sur http://localhost:${PORT}/api-docs`);
    });
  });
}

export default app;
