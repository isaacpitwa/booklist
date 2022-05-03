import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/books';

function AddBook() {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBook({
      id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
    }));
    setInputText({
      title: '',
      author: '',
    });
  };

  return (
    <>
      <h4>Add New Book</h4>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Book"
          value={inputText.title}
          name="title"
          onChange={onChange}
          required
        />
        <input
          type="text"
          className="input-text"
          placeholder="Author"
          value={inputText.author}
          name="author"
          onChange={onChange}
          required
        />
        <button type="submit"> Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
