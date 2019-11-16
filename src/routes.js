import { Router } from 'express';
import TodoController from './app/controllers/TodoController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ msg: 'Funcionando!' }));

routes.get('/todos', TodoController.list);
routes.get('/completed-todos', TodoController.completed);
routes.post('/todos', TodoController.create);
routes.patch('/todos/:id', TodoController.close);

export default routes;
