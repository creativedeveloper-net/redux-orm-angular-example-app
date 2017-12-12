import { TodoAction, TodoActions } from './todo.actions';
import { TodoList } from './todo.model';
import { indexBy, prop } from 'ramda';
import { Action } from 'redux';

const TODO_INITIAL_STATE: TodoList = {
  items: {},
  loading: false,
  error: null,
};

export function createTodoReducer() {
  return function todoReducer(state:TodoList = TODO_INITIAL_STATE, a: Action): TodoList {

    const action = a as TodoAction;

    switch (action.type) {
      case TodoActions.LOAD_TODOS_STARTED:
        return {
          ...state,
          items: {},
          loading: true,
          error: null,
        };
      case TodoActions.LOAD_TODOS_SUCCEEDED:
        return {
          ...state,
          items: indexBy(prop('id'), action.payload),
          loading: false,
          error: null,
        };
      case TodoActions.LOAD_TODOS_FAILED:
        return {
          ...state,
          items: {},
          loading: false,
          error: action.error,
        };
    }

    return state;
  };
}
