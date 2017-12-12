export class Todo {
  id: number;
  text: string;
}

export const TODO_STATE_NAME = 'Todos';

export interface TodoList {
  items: {};
  loading: boolean;
  error: any;
}
