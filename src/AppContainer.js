import { connect } from 'react-redux';
import App from './App';
import { addNewBook, removeBook } from './redux/books/books';

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp, // gives our component access to state through props.toDoApp
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
