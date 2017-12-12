import { Injectable } from '@angular/core';
import { Epic, combineEpics, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { AppState } from '../../store/store.model';
import { TODO_STATE_NAME } from '../shared/todo.model';
import { TodoAction, TodoActions } from '../shared/todo.actions';
import { TodoService } from '../shared/todo.service';

const todosNotAlreadyFetched = (state: AppState): boolean => !(
  state[TODO_STATE_NAME] &&
  state[TODO_STATE_NAME].items &&
  Object.keys(state[TODO_STATE_NAME].items).length
);

@Injectable()
export class TodoEpics {
  constructor(
    private todoService: TodoService,
    private todoActions: TodoActions,
  ) {}

  public createEpic() {
    return createEpicMiddleware(
      combineEpics(
        this.createLoadTodosEpic(),
        this.createAddTodoEpic()
      )
    );
  }

  private createLoadTodosEpic(): Epic<TodoAction, AppState> {
    return (action$, store) => action$
      .ofType(TodoActions.LOAD_TODOS)
      .filter(() => todosNotAlreadyFetched(store.getState()))
      .switchMap(() => this.todoService.getTodos()
        .map(data => this.todoActions.loadTodosSucceeded(data))
        .catch(response => of(this.todoActions.loadTodosFailed({
          status: '' + response.status,
        })))
        .startWith(this.todoActions.loadTodosStarted()));
  }

  private createAddTodoEpic(): Epic<TodoAction, AppState> {
    return (action$, store) => action$
      .ofType(TodoActions.ADD_TODO)
      .filter(() => todosNotAlreadyFetched(store.getState()))
      .switchMap(action => this.todoService.addTodo(action.payload)
        .map(data => this.todoActions.addTodoSucceeded(data))
        .catch(response => of(this.todoActions.loadTodosFailed({
          status: '' + response.status,
        })))
        .startWith(this.todoActions.addTodoStarted()));
  }
}
