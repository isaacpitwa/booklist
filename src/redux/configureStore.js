import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import categories from './categories/categories';
import books from './books/books';

export default configureStore({
  reducer: combineReducers({
    categories,
    books,
  }),
});
