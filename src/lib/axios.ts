import axios from 'axios';
import authHeader from 'helper/getAuthHeader';

export default axios.create({
  baseURL: 'https://awannn-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
    ...authHeader(),
  },
});
