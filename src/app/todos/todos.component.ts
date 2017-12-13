import { Component, OnInit } from '@angular/core';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { pipe, values, sortBy, prop } from 'ramda';

import { Todo } from './shared/todo.model';
import { TodoActions } from './shared/todo.actions';

export const sortTodos = (todos$: Observable<{}>) =>
  todos$.map(
    pipe(
      values,
      sortBy(prop('text'))));

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @select$(['todos', 'items'], sortTodos)
  readonly todos$: Observable<Todo[]>;

  @select(['todos', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['todos', 'error'])
  readonly error$: Observable<any>;

  constructor(private todoActions: TodoActions) { }

  ngOnInit() {
    this.todoActions.loadTodos();
  }

  addTodo(text: string): void {
    text = text.trim();
    if (!text) {
      return;
    }
    this.todoActions.addTodo({ text } as Todo);
  }

  deleteTodo(todo: Todo): void {
    this.todoActions.deleteTodo(todo);
  }

}
