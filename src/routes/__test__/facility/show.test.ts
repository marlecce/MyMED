import request from 'supertest';
import { app } from '../../../app';

it('responds with details about the facility', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .get('/api/facility/1')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  // expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .get('/api/facility/1')
    .send()
    .expect(200);

  // expect(response.body.currentUser).toEqual(null);
});
