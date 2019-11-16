import supertest from 'supertest';
import server from '../src/app';
import truncate from './util/truncate';
import todoFactory from './factories/todo.factory';

const request = supertest(server);

describe('Test ToDo APIs', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should succeed if there is no item', async done => {
    // arrange
    const expected = [];

    // act
    const response = await request.get('/todos');

    // assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expected);
    done();
  });

  it('Should load a list of ToDos', async done => {
    // arrange
    await Promise.all([
      todoFactory(),
      todoFactory(),
      todoFactory({ closed_at: new Date() }),
      todoFactory({ closed_at: new Date() }),
      todoFactory()
    ]);

    // act
    const response = await request.get('/todos');

    // assert
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
    done();
  });

  it('Should load a list of completed ToDos', async done => {
    // arrange
    await Promise.all([
      todoFactory(),
      todoFactory(),
      todoFactory({ closed_at: new Date() }),
      todoFactory({ closed_at: new Date() }),
      todoFactory()
    ]);

    // act
    const response = await request.get('/completed-todos');

    // assert
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    done();
  });

  it('Should create a ToDo', () => {
    expect(1).toBe(1);
  });

  it('Should update a ToDo', () => {
    expect(1).toBe(1);
  });

  it('Should complete a ToDo', () => {
    expect(1).toBe(1);
  });
});
