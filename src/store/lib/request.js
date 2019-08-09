import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 1500
});

export default instance;
