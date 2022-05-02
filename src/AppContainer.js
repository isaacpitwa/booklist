import { connect } from 'react-redux';
import App from './App';
import { addNewBook, removeBook } from './redux/books/books';

// gives our App component access to state through props
function mapStateToProps(state) {
  return {
    books: state.books,
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewBook: (book) => dispatch(addNewBook(book)),
    removeBook: (book) => dispatch(removeBook(book)),
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
