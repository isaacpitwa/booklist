/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import Categories from './pages/Categories';
import NotMatch from './pages/NotFound';

class App extends Component {
  render() {
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
                  <BooksList />
                  <hr />
                  <AddBook />

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

export default App;
