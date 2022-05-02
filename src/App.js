/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import Categories from './pages/Categories';
import NotMatch from './pages/NotFound';

class App extends Component {
  render() {
    const { books, addNewBook, removeBook } = this.props;
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={(
              <div className="container">
                <div className="inner">
                  <BooksList
                    books={books}
                    removeBookProp={removeBook}
                  />
                  <hr />
                  <AddBook addNewBookProp={addNewBook} />

                </div>
              </div>
            )}
          />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </>
    );
  }
}

App.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.objectOf(
      { id: PropTypes.string, title: PropTypes.string, author: PropTypes.string },
    ),
  ),
  addNewBook: PropTypes.func,
  removeBook: PropTypes.func,

};

App.defaultProps = {
  books: PropTypes.arrayOf(
    PropTypes.objectOf(
      { id: PropTypes.string, title: PropTypes.string, author: PropTypes.string },
    ),
  ),
  addNewBook: () => {},
  removeBook: () => {},
};

export default App;
