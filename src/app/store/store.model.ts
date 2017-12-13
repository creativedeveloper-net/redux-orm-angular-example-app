import { TodoList } from '../todos/shared/todo.model';
import { TODO_STATE_NAME } from '../todos/shared/todo.model';

export interface AppState {
  TODO_STATE_NAME?: TodoList;
}
