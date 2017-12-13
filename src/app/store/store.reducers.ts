import { combineReducers } from 'redux';

import { orm } from './store.orm'

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers({
  orm: orm.reducer(),
});
