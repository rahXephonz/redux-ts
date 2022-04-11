import {
  ADD_BOOK_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_SINGLE_BOOK_FAIL,
  FETCH_SINGLE_BOOK_REQUEST,
  FETCH_SINGLE_BOOK_SUCCESS,
  UPDATE_BOOK_FAIL,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
} from 'app/constant/bookConstant';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from 'app/store';
import axios from 'lib/axios';

export const loadBooks =
  () =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
      dispatch({
        type: FETCH_BOOK_REQUEST,
      });

      const response = await axios.get('/api/v1/book?take=10&skip=0');
      const data = await response.data;

      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        payload: error.response,
      });
    }
  };

export const deleteBook =
  (id: number) =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
      });

      const response = await axios.delete(`/api/v1/book/${id}`).then((res) => {
        console.log(res.status);
        loadBooks()(dispatch);
      });

      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: response,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        payload: error.response,
      });
    }
  };

export const addBook =
  (title: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch({
        type: ADD_BOOK_REQUEST,
      });

      const response = await axios
        .post('/api/v1/book', {
          title,
        })
        .then((res) => {
          console.log(res.status);
          loadBooks()(dispatch);
        });

      dispatch({
        type: ADD_BOOK_SUCCESS,
        payload: response,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_BOOK_FAIL,
        payload: error.response,
      });
    }
  };

export const getBookById =
  (id: number) => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch({
        type: FETCH_SINGLE_BOOK_REQUEST,
      });

      const response = await axios.get(`/api/v1/book/${id}`);
      const data = await response.data;

      dispatch({
        type: FETCH_SINGLE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_SINGLE_BOOK_FAIL,
        payload: error.response,
      });
    }
  };

export const editBook =
  (
    title: string,
    id: number
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch({
        type: UPDATE_BOOK_REQUEST,
      });

      const response = await axios
        .put(`/api/v1/book/${id}`, {
          title,
        })
        .then((res) => {
          console.log(res.status);
          getBookById(id)(dispatch);
        });

      dispatch({
        type: UPDATE_BOOK_SUCCESS,
        payload: response,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_BOOK_FAIL,
        payload: error.response,
      });
    }
  };
