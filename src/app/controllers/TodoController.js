import { Op } from 'sequelize';
import Todo from '../models/todo';

class TodoController {
  async list(req, res) {
    const todos = await Todo.findAll({
      attributes: ['id', 'title', 'createdAt', 'updatedAt'],
      where: { closed_at: null }
    });

    return res.json(todos);
  }

  async completed(req, res) {
    const todos = await Todo.findAll({
      attributes: ['id', 'title', 'createdAt', 'updatedAt'],
      where: {
        closed_at: {
          [Op.ne]: null
        }
      }
    });

    return res.json(todos);
  }

  // save(req, res) {}

  // finish(req, res) {}
}

export default new TodoController();
