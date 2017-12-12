import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Todo } from './todo.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoService {

  private todosUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      catchError(this.handleError('getTodos', []))
    );
  }

  addTodo (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions).pipe(
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  deleteTodo (todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.delete<Todo>(url, httpOptions).pipe(
      catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('TodoService: ' + message);
  }

}
