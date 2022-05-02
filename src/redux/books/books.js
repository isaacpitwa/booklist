const ADD_NEW_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export function addNewBook(index) {
  return {
    type: ADD_NEW_BOOK,
    index,
  };
}

export function removeBook(index) {
  return {
    type: REMOVE_BOOK,
    index,
  };
}

export default function reducer(state = [], action = {}) {
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
