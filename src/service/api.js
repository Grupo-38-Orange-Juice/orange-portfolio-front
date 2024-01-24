/* eslint-disable import/no-cycle */
import axios from 'axios';
import { getUserLocalStorage } from '../context/AuthProvider/util';

const Api = axios.create({
  baseURL: 'https://url/',
});

Api.interceptors.request.use(

  (config) => {
    const user = getUserLocalStorage();
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${user.token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export default Api;
