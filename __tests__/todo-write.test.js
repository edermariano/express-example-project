import supertest from 'supertest';
import server from '../src/app';
import truncate from './util/truncate';
import todoFactory from './factories/todo.factory';
import Todo from '../src/app/models/Todo';

const request = supertest(server);

describe('Test ToDo Write APIs', () => {
  beforeEach(async done => {
    await truncate();
    done();
  });

  it('Should create a ToDo', async done => {
    // arrange
    const expected = 'My super todo';

    // act
    const response = await request.post('/todos').send({ title: expected });

    // assert
    const todos = await Todo.findAll();

    expect(response.status).toBe(200);
    expect(todos[0].title).toBe(expected);
    done();
  });

  it('Should complete a ToDo', async done => {
    // arrange
    const toDoToBeCompleted = await todoFactory();

    // act
    const response = await request.patch(`/todos/${toDoToBeCompleted.id}`);

    // assert
    const todo = await Todo.findAll();

    expect(response.status).toBe(200);
    expect(todo[0].closed_at).not.toBeNull();
    done();
  });

  it('Should fail if the ToDo title is empty', async done => {
    // act
    const response = await request.post('/todos').send({ title: ' ' });

    // assert
    expect(response.status).toBe(400);
    done();
  });

  it('Should fail to complete if the ToDo does not exists', async done => {
    // act
    const response = await request.patch(`/todos/1234`);

    // assert
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('ToDo not found!');
    done();
  });
});
