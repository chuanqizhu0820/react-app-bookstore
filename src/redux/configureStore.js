import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger froßm 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
