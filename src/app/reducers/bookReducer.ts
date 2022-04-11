import {
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
} from 'app/constant/bookConstant';
import { Action, BookState } from 'types';

export const bookReducer = (
  state: BookState = {
    books: [],
  },
  action: Action
) => {
  switch (action.type) {
    case FETCH_BOOK_REQUEST:
      return {
        loading: true,
      };
    case FETCH_BOOK_SUCCESS:
      return {
        loading: false,
        books: action.payload,
      };
    case FETCH_BOOK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELETE_BOOK_REQUEST:
      return {
        loading: true,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        loading: false,
        books: action.payload,
      };
    case DELETE_BOOK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
