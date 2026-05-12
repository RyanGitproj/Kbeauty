/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import request from 'supertest';
import app from './server';

describe('API Health Check', () => {
  it('should return health check', async () => {
    const response = await request(app).get('/api/health');
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('API K Beauty Academy fonctionnelle');
  });
});
