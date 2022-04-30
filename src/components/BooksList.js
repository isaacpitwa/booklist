import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BooksList(props) {
  const {
    books,
  } = props;

  BooksList.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.objectOf(
        { id: PropTypes.string, title: PropTypes.string, author: PropTypes.string },
      ),
    ),

  };

  BooksList.defaultProps = {
    books: [],
  };

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
