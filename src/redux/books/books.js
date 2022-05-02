const ADD_NEW_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addNewBook(newBook) {
  return {
    type: ADD_NEW_BOOK,
    newBook,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}

export default function reducer(state = [{
  id: '1',
  title: 'Test book one',
  author: 'Test Author',
}], action = {}) {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [
        ...state,
        action.newBook,
      ];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.book.id)];
    default:
      return state;
  }
}
