import React from 'react';
import PropTypes from 'prop-types';
import style from './book.module.css';

function Book(props) {
  const {
    book,
  } = props;
  const { id, author, title } = book;

  Book.propTypes = {
    book:
      PropTypes.objectOf(
        { id: PropTypes.string, title: PropTypes.string, author: PropTypes.string },
      ),

  };

  Book.defaultProps = {
    book: { id: '', title: '', author: '' },
  };

  return (
    <li key={id} className={style.book}>
      {title}
      {' '}
      <br />
      {author}
      <span>
        <button type="button">Remove</button>
      </span>
    </li>
  );
}

export default Book;
