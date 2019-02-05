import React, { Component } from "react";
import AuthorInfo from '../components/AuthorInfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAuthorDetails } from '../actions';
import loaderImg from '../assets/loading.gif';

class AuthorInfoContainer extends Component {

  componentDidMount() {
    const { match } = this.props;
    this.props.fetchAuthorDetails(match.params.id);
  }
  render() {
    const { author,  authorDetailsError, fetchingAuthorDetails } = this.props;

    if (fetchingAuthorDetails) {
      return (
        <div className="lead text-center">
          <img src={loaderImg} alt="loading" />
        </div>
      );
    }
    return (
      !fetchingAuthorDetails && author && 
      <AuthorInfo  error={authorDetailsError} author={author} />
    );
  }
}

function mapStateToProps(state) {
  return {
    author: state.authorDetail.author,
    fetchingAuthorDetails: state.authorDetail.isFetching,
    authorDetailsError: state.authorDetail.authorDetailsError
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAuthorDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorInfoContainer);