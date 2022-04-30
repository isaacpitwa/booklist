/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

function AddBook() {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        />
        <input
          type="text"
          className="input-text"
          placeholder="Author"
          value={inputText.author}
          name="title"
          onChange={onChange}
        />
        <button type="submit"> Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
