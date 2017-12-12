import { combineReducers } from 'redux';
// import { composeReducers } from '@angular-redux/form';

import { createTodoReducer } from '../todos/shared/todo.reducer';

// Define the global store shape by combining our application's
// reducers together into a given structure.
// export const rootReducer = composeReducers(
//   combineReducers({
//     todos: createTodoReducer()
//   }));
export const rootReducer = combineReducers({
    todos: createTodoReducer()
  });
