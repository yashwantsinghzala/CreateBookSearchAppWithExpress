import Axios from "axios";
import { parseXMLResponseForSearch, parseXMLResponseForBookInfo, parseXMLResponseForAuthorInfo } from '../utills'
import {
    REQUEST_BOOKS_LIST, RECEIVE_BOOKS_LIST, REQUEST_BOOK_DETAILS,
    STORE_EXPANDED_BOOK, LOG_ERROR_BOOKDETAILS, LOG_ERROR_BOOK, REQUEST_AUTH_DETAILS,
    STORE_AUTHOR_DETAIL,LOG_ERROR_AUTHOR_DETAILS
} from '../types'


export const requestBooks = () => {
    return {
        type: REQUEST_BOOKS_LIST
    }
}

export const receiveBooks = (data) => {
    return {
        type: RECEIVE_BOOKS_LIST,
        books: data,
    }
}

export const logErrorforBook = (error) => {
    return {
        type: LOG_ERROR_BOOK,
        error
    }
}

export const logErrorforAuthDetails = (error) => {
    return {
        type: LOG_ERROR_AUTHOR_DETAILS,
        error
    }
}

export const logErrorforBookDetails = (error) => {
    return {
        type: LOG_ERROR_BOOKDETAILS,
        error
    }
}

export const requestBookDetails = () => {
    return {
        type: REQUEST_BOOK_DETAILS
    }
}

export const requestAuthDetails = () => {
    return {
        type: REQUEST_AUTH_DETAILS
    }
}

export const resetExpandedBook = (book) => {
    return {
        type: STORE_EXPANDED_BOOK,
        expandedBook: false
    }
}

export const storeAuthorDetails = (details) => {
    return {
        type: STORE_AUTHOR_DETAIL,
        authDetails: details
    }
}

export const storeExpandedBook = (book) => {
    return {
        type: STORE_EXPANDED_BOOK,
        expandedBook: book
    }
}

export const fetchBooks = (searchText) => {
    const requestUri = `/api/getBooks/?searchText=${searchText}`;

    return dispatch => {
        dispatch(requestBooks())
        return Axios.get(requestUri)
            .then(res =>
                parseXMLResponseForSearch(res.data))
            .then(json => dispatch(receiveBooks(json)))
            .catch(error => dispatch(logErrorforBook(error.toString()))
            );
    }
}

export const fetchBookDetails = (bookId) => {
    const requestUri = `/api/getBookDetails/${bookId}`;

    return dispatch => {
        dispatch(requestBookDetails())
        return Axios.get(requestUri)
            .then(res =>
                parseXMLResponseForBookInfo(res.data))
            .then(json => dispatch(storeExpandedBook(json)))
            .catch(error => dispatch(logErrorforBookDetails(error.toString()))
            );
    }
}

export const fetchAuthorDetails = (authId) => {
    const requestUri = `/api/getAuthor/${authId}`;

    return dispatch => {
        dispatch(requestAuthDetails())
        return Axios.get(requestUri)
            .then(res =>
                parseXMLResponseForAuthorInfo(res.data))
            .then(json => dispatch(storeAuthorDetails(json)))
            .catch(error => dispatch(logErrorforAuthDetails(error.toString()))
            );
    }
}
