import supertest from 'supertest';
import server from '../src/app';

const request = supertest(server);

describe('Test Home Api', () => {
  it('Should return a message Funcionando!', async done => {
    const expectedMessage = { msg: 'Funcionando!' };
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedMessage);
    done();
  });
});
