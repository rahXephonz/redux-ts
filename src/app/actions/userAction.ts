import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from 'app/constant/userConstant';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from 'app/store';
import axios from 'lib/axios';

// reference from react redux documentations
export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const response = await axios.post('/api/v1/auth/signin', {
        email,
        password,
      });

      const data = await response.data;
      const userData = {
        token: data.access_token,
      };

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      });

      sessionStorage.setItem('jwt', data.access_token);
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response,
      });
    }
  };

export const logout =
  () =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    dispatch({
      type: USER_LOGOUT,
    });
  };
