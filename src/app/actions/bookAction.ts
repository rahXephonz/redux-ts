import {
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
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
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {};
