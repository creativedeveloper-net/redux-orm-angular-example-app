export class Todo {
  id: number;
  text: string;
}

export const TODO_STATE_NAME = 'todos';

export interface TodoList {
  items: {};
  loading: boolean;
  error: any;
}
