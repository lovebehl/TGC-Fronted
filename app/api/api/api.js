import axios from 'axios';

const accessToken = localStorage.getItem('tgc-qxzsewa-access-token');

const API = axios.create({
  baseURL: 'https://texas-gold-card-backend-g4oyr.ondigitalocean.app/api/',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'x-access-token': accessToken ? accessToken : 'Bearer ',
    'Content-Type': 'application/json',
  },
});

export default API;
