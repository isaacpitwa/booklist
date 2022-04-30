import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import Categories from './pages/Categories';
import NotMatch from './pages/NotFound';

function App() {
  const books = [
    {
      id: '1',
      title: 'Test book one',
      author: 'Test Author',
    },
  ];
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
                />
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

export default App;
