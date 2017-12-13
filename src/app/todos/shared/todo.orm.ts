import { attr, Model } from 'redux-orm';
import { Todo } from './todo.model';
import { TodoActions } from './todo.actions';

export class TodoOrm extends Model {
  static reducer(action, TodoOrm, session) {
    switch (action.type) {
      case TodoActions.LOAD_TODOS_SUCCEEDED: {
        const todos: Todo[] = action.payload;
        TodoOrm.all().delete();
        todos.map((todo) => TodoOrm.create(todo));
        break;
      }
      case TodoActions.ADD_TODO_SUCCEEDED: {
        const todo: Todo = action.payload;
        TodoOrm.create(todo);
        break;
      }
      case TodoActions.DELETE_TODO_SUCCEEDED: {
        const todo: Todo = action.payload;
        TodoOrm.withId(todo.id).delete();
        break;
      }
    }
    // Return value is ignored.
    return;
  }
}

TodoOrm['modelName'] = 'Todo';
// Declare your related fields.
TodoOrm['fields'] = {
  id: attr(),
  text: attr()
};

export class TodoMeta extends Model {
  static reducer(action, TodoMeta, session) {
    switch (action.type) {
      case TodoActions.LOAD_TODOS_STARTED:
      case TodoActions.ADD_TODO_STARTED:
      case TodoActions.DELETE_TODO_STARTED:{
        TodoMeta.upsert({
          id: 'loading',
          data: true
        });
        break;
      }
      case TodoActions.LOAD_TODOS_SUCCEEDED:
      case TodoActions.LOAD_TODOS_FAILED:
      case TodoActions.ADD_TODO_SUCCEEDED:
      case TodoActions.ADD_TODO_FAILED:
      case TodoActions.DELETE_TODO_SUCCEEDED:
      case TodoActions.DELETE_TODO_FAILED: {
        TodoMeta.upsert({
          id: 'loading',
          data: false
        });
        break;
      }
    }
    return;
  }
}

TodoMeta['modelName'] = 'TodoMeta';
TodoMeta['fields'] = {
  id: attr(),
  data: attr()
};
