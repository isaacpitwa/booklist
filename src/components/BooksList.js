import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BooksList(props) {
  const {
    books, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;

  BooksList.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.objectOf(
        { id: PropTypes.string, title: PropTypes.string },
      ),
    ),
    handleChangeProps: PropTypes.func,
    deleteTodoProps: PropTypes.func,
    setUpdate: PropTypes.func,

  };

  BooksList.defaultProps = {
    books: [],
    handleChangeProps: () => {},
    deleteTodoProps: () => {},
    setUpdate: () => {},
  };

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          books={book}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}
export default BooksList;
