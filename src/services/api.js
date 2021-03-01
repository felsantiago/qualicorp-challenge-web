import axios from 'axios';

const api = axios.create({
  baseURL: 'https://qualicorp-challenge-api.herokuapp.com/api',
});

export default api;
