import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    book,
  } = props;
  const { author, title } = book;

  Book.propTypes = {
    book:
      PropTypes.objectOf(
        { id: PropTypes.string, title: PropTypes.string, author: PropTypes.string },
      ),

  };

  Book.defaultProps = {
    book: { id: '', title: '', author: '' },
  };

  useEffect(() => () => {
  }, []);

  return (
    <li>
      {title}
      {' '}
      <br />
      {author}
    </li>
  );
}

export default Book;
