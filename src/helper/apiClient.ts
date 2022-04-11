import axios from 'axios';
import authHeader from 'helper/getAuthHeader';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  ...authHeader(),
});
