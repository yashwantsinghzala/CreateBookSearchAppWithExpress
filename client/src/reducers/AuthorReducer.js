import {
    REQUEST_AUTH_DETAILS,
    STORE_AUTHOR_DETAIL, LOG_ERROR_AUTHOR_DETAILS
} from '../types'

export const authorDetailsInitialState = {
    isFetching: false,
    authorDetailsError: null,
    author: null
}

const AuthorReducer = function (state = authorDetailsInitialState, action) {
    switch (action.type) {
        case REQUEST_AUTH_DETAILS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case STORE_AUTHOR_DETAIL:
            return Object.assign({}, state, {
                author: action.authDetails,
                isFetching: false
            })
        case LOG_ERROR_AUTHOR_DETAILS:
            return Object.assign({}, state, {
                isFetching: false,
                authorDetailsError: action.error,
            })
        default:
            return state
    }
}

export default AuthorReducer;