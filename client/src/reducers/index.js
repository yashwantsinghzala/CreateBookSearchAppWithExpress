import { combineReducers } from 'redux';

import BookReducer from './BookReducer';
import BookDetailsReducers from './BookDetailsReducer';
import AuthorReducer from './AuthorReducer';

const rootReducer = combineReducers({
    book: BookReducer,
    bookDetail: BookDetailsReducers,
    authorDetail: AuthorReducer
});

export default rootReducer;