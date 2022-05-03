import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BooksList() {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}
export default BooksList;
