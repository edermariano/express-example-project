import Sequelize, { Model } from 'sequelize';

class Todo extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        closed_at: Sequelize.DATE
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Todo;
