import { combineReducers } from 'redux';

import { createTodoReducer } from '../todos/shared/todo.reducer';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers({
    todos: createTodoReducer()
  });
