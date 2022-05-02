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

const initialState = {
  books: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return {
        ...state,
        books: [...state.books, action.newBook],
      };
    case REMOVE_BOOK:
      return {

        ...state,
        books: state.books.filter((book) => book.id !== action.book.id),
      };
    default:
      return state;
  }
}
