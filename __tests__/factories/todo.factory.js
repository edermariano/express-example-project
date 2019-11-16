import faker from 'faker';
import Todo from '../../src/app/models/Todo';

const data = async (props = {}) => {
  const defaultProps = {
    title: faker.lorem.words(3)
  };
  return { ...defaultProps, ...props };
};

export default async (props = {}) => Todo.create(await data(props));
