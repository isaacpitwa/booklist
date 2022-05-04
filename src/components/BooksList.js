import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';

function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <ul>
      { books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}
export default BooksList;
