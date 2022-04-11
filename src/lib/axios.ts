import axios from 'axios';

export default axios.create({
  baseURL: 'https://awannn-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
