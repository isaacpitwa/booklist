import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './book.module.css';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
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
        <button type="button" onClick={() => { dispatch(removeBook(book)); }}>Remove</button>
      </span>
    </li>
  );
}

export default Book;
