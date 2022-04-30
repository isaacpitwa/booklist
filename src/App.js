import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import Categories from './pages/Categories';
import NotMatch from './pages/NotFound';

function App() {
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
                <AddBook addBookProps={() => {}} />
                <BooksList
                  books={[]}
                  handleChangeProps={() => {}}
                  deleteTodoProps={() => {}}
                  setUpdate={() => {}}
                />
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
