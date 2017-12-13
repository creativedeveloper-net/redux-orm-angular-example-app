import { ORM, Schema } from 'redux-orm';
import { TodoOrm, TodoMeta } from '../todos/shared/todo.orm';

export const orm = new ORM();
orm.register(TodoOrm, TodoMeta);

ORM.angularConfig = {
  instance: orm,
  stateKey: 'orm',
};
