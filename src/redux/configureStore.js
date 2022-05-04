import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import categories from './categories/categories';
import books from './books/books';

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  categories,
  books,
});
export default configureStore({
  reducer: rootReducer,
  middleware:
  (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(thunkMiddleware),

});
