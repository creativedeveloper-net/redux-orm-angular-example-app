import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Todo } from './todo.model';

export interface TodoAction {
  type: string;
  payload?: any;
  error?: boolean;
}

@Injectable()
export class TodoActions {
  static readonly LOAD_TODOS = 'LOAD_TODOS';
  static readonly LOAD_TODOS_STARTED = 'LOAD_TODOS_STARTED';
  static readonly LOAD_TODOS_SUCCEEDED = 'LOAD_TODOS_SUCCEEDED';
  static readonly LOAD_TODOS_FAILED = 'LOAD_TODOS_FAILED';

  static readonly ADD_TODO = 'ADD_TODO';
  static readonly ADD_TODO_STARTED = 'ADD_TODO_STARTED';
  static readonly ADD_TODO_SUCCEEDED = 'ADD_TODO_SUCCEEDED';
  static readonly ADD_TODO_FAILED = 'ADD_TODO_FAILED';

  static readonly DELETE_TODO = 'DELETE_TODO';
  static readonly DELETE_TODO_STARTED = 'DELETE_TODO_STARTED';
  static readonly DELETE_TODO_SUCCEEDED = 'DELETE_TODO_SUCCEEDED';
  static readonly DELETE_TODO_FAILED = 'DELETE_TODO_FAILED';

  @dispatch()
  loadTodos = (): TodoAction => ({
    type: TodoActions.LOAD_TODOS
  });

  @dispatch()
  loadTodosStarted = (): TodoAction => ({
    type: TodoActions.LOAD_TODOS_STARTED
  });

  @dispatch()
  loadTodosSucceeded = (payload: Todo[]): TodoAction => ({
    type: TodoActions.LOAD_TODOS_SUCCEEDED,
    payload
  });

  @dispatch()
  loadTodosFailed = (error): TodoAction => ({
    type: TodoActions.LOAD_TODOS_FAILED,
    error
  });

  @dispatch()
  addTodo = (payload: Todo): TodoAction => ({
    type: TodoActions.ADD_TODO,
    payload
  });

  @dispatch()
  addTodoStarted = (): TodoAction => ({
    type: TodoActions.ADD_TODO_STARTED
  });

  @dispatch()
  addTodoSucceeded = (payload: Todo): TodoAction => ({
    type: TodoActions.ADD_TODO_SUCCEEDED,
    payload
  });

  @dispatch()
  addTodoFailed = (error): TodoAction => ({
    type: TodoActions.ADD_TODO_FAILED,
    error
  });

  @dispatch()
  deleteTodo = (payload: Todo): TodoAction => ({
    type: TodoActions.DELETE_TODO,
    payload
  });

  @dispatch()
  deleteTodoStarted = (): TodoAction => ({
    type: TodoActions.DELETE_TODO_STARTED
  });

  @dispatch()
  deleteTodoSucceeded = (payload: Todo): TodoAction => ({
    type: TodoActions.DELETE_TODO_SUCCEEDED,
    payload
  });

  @dispatch()
  deleteTodoFailed = (error): TodoAction => ({
    type: TodoActions.DELETE_TODO_FAILED,
    error
  });
}
