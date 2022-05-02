import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import categories from './categories/categories';
import books from './books/books';

const loggerMiddleware = createLogger();
export default configureStore({
  reducer: combineReducers({
    categories,
    books,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),

});
