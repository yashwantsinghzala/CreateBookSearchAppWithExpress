import React, { Component } from "react";
import { resetExpandedBook } from '../actions';
import BookInfo from '../components/BookInfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAuthorDetails, fetchBookDetails } from '../actions';
import loaderImg from '../assets/loading.gif';

class BookInfoContainer extends Component {

  componentDidMount() {
    const { match } = this.props;
    this.props.fetchBookDetails(match.params.id);
  }
  render() {
    const { bookData, resetExpandedBook, bookDetailsError, fetchAuthorDetails, fetchingBookDetails } = this.props;

    if (fetchingBookDetails) {
      return (
        <div className="lead text-center">
          <img src={loaderImg} alt="loading" />
        </div>
      );
    }
    return (
      !fetchingBookDetails && bookData && <BookInfo fetchAuthorDetails={fetchAuthorDetails} error={bookDetailsError} bookData={bookData} resetExpandedBook={resetExpandedBook} />
    );
  }
}

function mapStateToProps(state) {
  return {
    bookData: state.bookDetail.expandedBook,
    fetchingBookDetails: state.bookDetail.isFetching,
    bookDetailsError: state.bookDetail.bookDetailsError
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({resetExpandedBook, fetchAuthorDetails, fetchBookDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfoContainer);