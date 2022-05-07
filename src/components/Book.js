import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './book.module.css';
import { removeBooks } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const {
    book,
  } = props;
  const {
    id, author, title, category,
  } = book;

  Book.propTypes = {
    book:
      PropTypes.objectOf(
        {
          id: PropTypes.string,
          title: PropTypes.string,
          author: PropTypes.string,
          category: PropTypes.string,
        },
      ),

  };

  Book.defaultProps = {
    book: {
      id: '', title: '', author: '', category: '',
    },
  };

  return (
    <li key={id} className={style.book}>
      <div className={style.left}>
        <span>{category}</span>
        <h4>{title}</h4>
        <p>{author}</p>
        <div className={style.actions}>
          <button type="button" className={style.action}>Comments </button>
          <button type="button" className={style.action} onClick={() => { dispatch(removeBooks(book)); }}>Remove </button>
          <button type="button" className={style.action}>Edit </button>
        </div>
      </div>

      <div className={style.progress}>
        <div className={style.prog}>
          <div className={style.progout}>
            <div className={style.progin} />
          </div>
          <p>
            100%
            <br />
            <h6>Completed</h6>
          </p>
        </div>

        <div className={style.right}>
          <h5>Current Chapter</h5>
          <h6>Chapter 17</h6>
          <button type="button">Update Progress</button>
        </div>
      </div>

    </li>
  );
}

export default Book;
