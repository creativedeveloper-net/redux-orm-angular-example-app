import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Todo } from './todo.model';

export interface TodoAction {
  type: string;
  payload?: Todo[];
  error?: boolean;
}
//interface MetaData { metaData: string; } // TODO not needed?
//type Payload = Todo[];
//export type TodoAction = FluxdStandarAction<Payload, MetaData>;

@Injectable()
export class TodoActions {
  static readonly LOAD_TODOS = 'LOAD_TODOS';
  static readonly LOAD_TODOS_STARTED = 'LOAD_TODOS_STARTED';
  static readonly LOAD_TODOS_SUCCEEDED = 'LOAD_TODOS_SUCCEEDED';
  static readonly LOAD_TODOS_FAILED = 'LOAD_TODOS_FAILED';

  @dispatch()
  loadTodos = (): TodoAction => ({
    type: TodoActions.LOAD_TODOS
  })

  loadTodosStarted = (): TodoAction => ({
    type: TodoActions.LOAD_TODOS_STARTED
  })

  loadTodosSucceeded = (payload: Todo[]): TodoAction => ({
    type: TodoActions.LOAD_TODOS_SUCCEEDED,
    payload
  })

  loadTodosFailed = (error): TodoAction => ({
    type: TodoActions.LOAD_TODOS_FAILED,
    error
  })
}
