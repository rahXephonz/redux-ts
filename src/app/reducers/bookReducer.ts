import {
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
  FETCH_SINGLE_BOOK_REQUEST,
  FETCH_SINGLE_BOOK_SUCCESS,
  FETCH_SINGLE_BOOK_FAIL,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAIL,
} from 'app/constant/bookConstant';
import { USER_LOGOUT } from 'app/constant/userConstant';
import { Action, BookState } from 'types';

export const bookReducer = (
  state: BookState = {
    books: [],
    book: {},
  },
  action: Action
) => {
  switch (action.type) {
    case FETCH_SINGLE_BOOK_REQUEST:
      return {
        loading: true,
      };

    case FETCH_SINGLE_BOOK_SUCCESS:
      return {
        loading: false,
        book: action.payload,
      };

    case FETCH_SINGLE_BOOK_FAIL:
      return {
        error: action.payload,
      };

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

    case ADD_BOOK_REQUEST:
      return {
        loading: true,
      };

    case ADD_BOOK_SUCCESS:
      return {
        loading: false,
        books: [...(state.books as any), action.payload],
      };

    case ADD_BOOK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case UPDATE_BOOK_REQUEST:
      return {
        loading: true,
      };

    case UPDATE_BOOK_SUCCESS:
      return {
        loading: false,
        book: action.payload,
      };

    case UPDATE_BOOK_FAIL:
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

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
