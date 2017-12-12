import { Injectable } from '@angular/core';

import { TodoEpics } from '../todos/shared/todo.epics';

@Injectable()
export class RootEpics {
  constructor(private todoEpics: TodoEpics) {}

  public createEpics() {
    return [
      this.todoEpics.createEpic(),
    ];
  }
}
