# K Beauty Academy - Plateforme de Formation

Projet full stack développé pour une académie de beauté, avec un frontend React/TypeScript/Vite et un backend Node.js/Express/TypeScript/MongoDB.

## À propos du développeur

- **Nom** : RAKOTOAHIJOHN Tsioritiana Ryan
- **Poste** : Développeur Full Stack
- **Email** : tsioritianaryan@gmail.com
- **Portfolio** :  https://portfolio-eight-ivory-65.vercel.app/

## Fonctionnalités implémentées

### Backend
- **API REST** avec Express et TypeScript
- **Authentification JWT** : Inscription et connexion sécurisées
- **Gestion des formations** : CRUD pour les cours
- **Documentation Swagger** : Accessible sur `/api-docs`
- **Structure DocuSign** : Prête pour l'intégration complète
- **Tests** : 18 tests unitaires et d'intégration avec 100% de couverture sur les fichiers critiques

### Frontend
- **Interface responsive** avec Tailwind CSS
- **Pages** : Accueil, Formations, À propos, Contact, Dashboard, Login, Register
- **Context d'authentification** : Gère l'état de connexion dans toute l'application
- **Tests E2E** : Configuration Playwright prête

## Technologies utilisées

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Testing Library + Jest
- Playwright

### Backend
- Node.js
- Express
- TypeScript
- MongoDB avec Mongoose
- Jest + Supertest
- Swagger UI Express + Swagger JSDoc
- bcrypt (hashage de mots de passe)
- jsonwebtoken (authentification)

## Installation et lancement

### Prérequis
- Node.js (version 18+)
- npm ou yarn
- MongoDB (local ou Atlas)

### Backend
1. Aller dans le dossier backend :
   ```bash
   cd backend
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Copier le fichier `.env.example` en `.env` et remplir les variables :
   ```bash
   cp .env.example .env
   ```
4. Lancer les tests :
   ```bash
   npm test
   ```
5. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

Le backend est accessible sur `http://localhost:5000` et la documentation Swagger sur `http://localhost:5000/api-docs`.

### Frontend
1. Aller dans le dossier frontend :
   ```bash
   cd frontend
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer l'application de développement :
   ```bash
   npm run dev
   ```

Le frontend est accessible sur `http://localhost:5173` (ou le port indiqué dans le terminal).

## Structure du projet

```
kbeauty2/
├── backend/
│   ├── src/
│   │   ├── config/         # Configuration (base de données)
│   │   ├── controllers/    # Logique métier
│   │   ├── data/           # Données de seed
│   │   ├── models/         # Modèles MongoDB
│   │   ├── routes/         # Routes API
│   │   ├── services/       # Services externes (DocuSign)
│   │   ├── server.ts       # Point d'entrée du serveur
│   │   └── *.test.ts       # Tests
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Composants réutilisables
│   │   ├── contexts/       # Context React
│   │   ├── hooks/          # Hooks personnalisés
│   │   ├── pages/          # Pages de l'application
│   │   ├── services/       # Services API
│   │   ├── types/          # Types TypeScript
│   │   ├── App.tsx         # Composant principal
│   │   └── main.tsx        # Point d'entrée
│   ├── tests/              # Tests E2E Playwright
│   ├── package.json
│   └── vite.config.ts
└── README.md
```
