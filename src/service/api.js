import axios from 'axios';
import { getTokenStorage } from '../context/AuthProvider/util';

const Api = axios.create({
  baseURL: 'http://localhost:8080/',
});

Api.interceptors.request.use(
  (config) => {
    const token = getTokenStorage();
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token,
      },
    };
  },
  (error) => Promise.reject(error),
);

export async function loginResquest({ email, password }) {
  try {
    const request = await Api.post('login', { email, password });
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function createUser({
  fullName, email, password,
}) {
  try {
    const request = await Api.post('users', {
      fullName, email, password,
    });
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function meRequest() {
  try {
    const request = await Api.get('me');
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export default Api;
