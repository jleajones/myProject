import axios from 'axios';
import { API_PATH } from '@store/constants';

const instance = axios.create({
  baseURL: API_PATH,
  timeout: 1500
});

export default instance;
