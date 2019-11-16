import map from 'lodash/map';
import Todo from '../../src/app/models/Todo';

const modelsToTruncate = [Todo];

export default async function truncate() {
  return Promise.all(
    map(modelsToTruncate, model => model.destroy({ where: {}, force: true }))
  );
}
