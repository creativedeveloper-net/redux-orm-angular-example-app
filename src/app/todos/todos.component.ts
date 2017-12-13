import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { selectData } from 'redux-orm-angular';
import { Observable } from 'rxjs/Observable';

import { Todo } from './shared/todo.model';
import { TodoOrm, TodoMeta } from './shared/todo.orm';
import { TodoActions } from './shared/todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @select(selectData(TodoOrm).all())
  readonly todos$: Observable<Array<Todo>>;

  @select(selectData(TodoMeta).all().filter(item => item.id === 'loading').first())
  readonly loading$: Observable<any>;

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
