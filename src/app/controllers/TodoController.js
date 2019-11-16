import { Op } from 'sequelize';
import * as Yup from 'yup';
import Todo from '../models/Todo';

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

  async create(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .trim()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const todo = await Todo.create(req.body);

    return res.json({ msg: `Todo ${todo.title} created.` });
  }

  async close(req, res) {
    const todo = await Todo.findByPk(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: 'ToDo not found!' });
    }

    todo.closed_at = new Date();
    todo.save();

    return res.json(todo);
  }
}

export default new TodoController();
