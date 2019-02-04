import React, { Component } from "react";
import { resetExpandedBook } from '../actions';
import BookInfo from '../components/BookInfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAuthorDetails } from '../actions'

class BookInfoContainer extends Component {
  render() {
    const { bookData, resetExpandedBook, bookDetailsError, fetchAuthorDetails } = this.props;

    return (
      <BookInfo fetchAuthorDetails={fetchAuthorDetails} error={bookDetailsError} bookData={bookData} resetExpandedBook={resetExpandedBook} />
    );
  }
}

function mapStateToProps(state) {
  return {
    bookDetailsError: state.bookDetail.bookDetailsError
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetExpandedBook: resetExpandedBook, fetchAuthorDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfoContainer);