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
        Authorization: `Bearer ${token}`,
      },
    };
  },
  (error) => Promise.reject(error),
);

export async function loginResquest({ email, password }) {
  try {
    const request = await Api.post('login', { email, password });
    return request.data;
  } catch (error) {
    return error;
  }
}

export async function createUser({
  fullName, email, password,
}) {
  try {
    const request = await Api.post('users', {
      fullName, email, password,
    })
      .then((res) => ({ data: { ...res.data }, status: res.status }))
      .catch((err) => err.response.data);
    return request.data;
  } catch (error) {
    return error;
  }
}

export default Api;
