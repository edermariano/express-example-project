import { Router } from 'express';
import TodoController from './app/controllers/TodoController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ msg: 'Funcionando!' }));
routes.get('/todos', TodoController.list);
routes.get('/completed-todos', TodoController.completed);

export default routes;
