/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Request, Response } from 'express';
import { register, login } from './authController';
import User from '../models/User';
import jwt from 'jsonwebtoken';

jest.mock('../models/User');
jest.mock('jsonwebtoken');

describe('Auth Controller - Unit Tests', () => {
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

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User'
      };

      const savedUser = {
        _id: '1',
        ...userData,
        role: 'user'
      };

      mockRequest = { body: userData };
      (User.findOne as jest.Mock).mockResolvedValue(null);
      (User.prototype.save as jest.Mock).mockResolvedValue(savedUser);
      (jwt.sign as jest.Mock).mockReturnValue('mock-token');

      await register(mockRequest as Request, mockResponse as Response);

      expect(User.findOne).toHaveBeenCalledWith({ email: userData.email });
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        message: 'Inscription réussie',
        data: {
          token: 'mock-token',
          user: {
            _id: savedUser._id,
            email: savedUser.email,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            role: savedUser.role
          }
        }
      });
    });

    it('should return 400 if required fields are missing', async () => {
      mockRequest = { body: { email: 'test@example.com' } };

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Tous les champs sont requis'
      });
    });

    it('should return 400 if email is already used', async () => {
      const userData = {
        email: 'existing@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User'
      };

      mockRequest = { body: userData };
      (User.findOne as jest.Mock).mockResolvedValue({ _id: '1' });

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Cet email est déjà utilisé'
      });
    });

    it('should handle validation errors', async () => {
      const userData = {
        email: 'invalid-email',
        password: '123',
        firstName: 'Test',
        lastName: 'User'
      };

      const validationError = {
        name: 'ValidationError',
        errors: {
          email: { message: 'Veuillez entrer un email valide' },
          password: { message: 'Le mot de passe doit contenir au moins 6 caractères' }
        }
      };

      mockRequest = { body: userData };
      (User.findOne as jest.Mock).mockResolvedValue(null);
      (User.prototype.save as jest.Mock).mockRejectedValue(validationError);

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Erreur de validation',
        errors: [
          'Veuillez entrer un email valide',
          'Le mot de passe doit contenir au moins 6 caractères'
        ]
      });
    });

    it('should handle server errors', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User'
      };

      mockRequest = { body: userData };
      (User.findOne as jest.Mock).mockResolvedValue(null);
      (User.prototype.save as jest.Mock).mockRejectedValue(new Error('Database error'));

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Erreur lors de l\'inscription'
      });
    });
  });

  describe('login', () => {
    it('should login a user successfully', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123'
      };

      const user = {
        _id: '1',
        email: userData.email,
        firstName: 'Test',
        lastName: 'User',
        role: 'user',
        comparePassword: jest.fn().mockResolvedValue(true)
      };

      mockRequest = { body: userData };
      (User.findOne as jest.Mock).mockResolvedValue(user);
      (jwt.sign as jest.Mock).mockReturnValue('mock-token');

      await login(mockRequest as Request, mockResponse as Response);

      expect(User.findOne).toHaveBeenCalledWith({ email: userData.email });
      expect(user.comparePassword).toHaveBeenCalledWith(userData.password);
      expect(jsonMock).toHaveBeenCalledWith({
        success: true,
        message: 'Connexion réussie',
        data: {
          token: 'mock-token',
          user: {
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
          }
        }
      });
    });

    it('should return 400 if required fields are missing', async () => {
      mockRequest = { body: { email: 'test@example.com' } };

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Email et mot de passe sont requis'
      });
    });

    it('should return 401 if user not found', async () => {
      mockRequest = { body: { email: 'nonexistent@example.com', password: 'password123' } };
      (User.findOne as jest.Mock).mockResolvedValue(null);

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(401);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Identifiants incorrects'
      });
    });

    it('should return 401 if password is invalid', async () => {
      const user = {
        _id: '1',
        email: 'test@example.com',
        comparePassword: jest.fn().mockResolvedValue(false)
      };

      mockRequest = { body: { email: 'test@example.com', password: 'wrongpassword' } };
      (User.findOne as jest.Mock).mockResolvedValue(user);

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(401);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Identifiants incorrects'
      });
    });

    it('should handle server errors', async () => {
      mockRequest = { body: { email: 'test@example.com', password: 'password123' } };
      (User.findOne as jest.Mock).mockRejectedValue(new Error('Database error'));

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({
        success: false,
        message: 'Erreur lors de la connexion'
      });
    });
  });
});
