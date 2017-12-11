import { Component, OnInit } from '@angular/core';

import { Todo } from './shared/todo.model';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  addTodo(text: string): void {
    text = text.trim();
    if (!text) {
      return;
    }
    this.todoService.addTodo({ text } as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
