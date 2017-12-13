import { Injectable } from '@angular/core';
import { Epic, combineEpics, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { AppState } from '../../store/store.model';
import { TodoAction, TodoActions } from '../shared/todo.actions';
import { TodoService } from '../shared/todo.service';

@Injectable()
export class TodoEpics {
  constructor(
    private todoService: TodoService,
    private todoActions: TodoActions,
  ) {}

  public createEpic() {
    return createEpicMiddleware(
      combineEpics(
        this.loadTodosEpic(),
        this.addTodoEpic(),
        this.deleteTodoEpic()
      )
    );
  }

  private loadTodosEpic(): Epic<TodoAction, AppState> {
    return (action$, store) => action$
      .ofType(TodoActions.LOAD_TODOS)
      .switchMap(() => this.todoService.getTodos()
        .map(data => this.todoActions.loadTodosSucceeded(data))
        .catch(response => of(this.todoActions.loadTodosFailed({
          status: '' + response.status,
        })))
        .startWith(this.todoActions.loadTodosStarted()));
  }

  private addTodoEpic(): Epic<TodoAction, AppState> {
    return (action$, store) => action$
      .ofType(TodoActions.ADD_TODO)
      .switchMap(action => this.todoService.addTodo(action.payload)
        .map(data => this.todoActions.addTodoSucceeded(data))
        .catch(response => of(this.todoActions.addTodoFailed({
          status: '' + response.status,
        })))
        .startWith(this.todoActions.addTodoStarted()));
  }

  private deleteTodoEpic(): Epic<TodoAction, AppState> {
    return (action$, store) => action$
      .ofType(TodoActions.DELETE_TODO)
      .switchMap(action => this.todoService.deleteTodo(action.payload)
        .map(() => this.todoActions.deleteTodoSucceeded(action.payload))
        .catch(response => of(this.todoActions.deleteTodoFailed({
          status: '' + response.status,
        })))
        .startWith(this.todoActions.deleteTodoStarted()));
  }
}
