import axios from 'axios';
import { getTokenStorage } from '../context/AuthProvider/util';

const Api = axios.create({
  baseURL: 'https://url/',
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
    const request = await Api.post('authenticate', { email, password });
    return request.data;
  } catch (error) {
    return error;
  }
}

export async function createUser({
  name, lastname, email, password,
}) {
  try {
    const request = await Api.post('users', {
      name, lastname, email, password,
    })
      .then((res) => ({ data: { ...res.data }, status: res.status }))
      .catch((err) => err.response.data);
    return request.data;
  } catch (error) {
    return error;
  }
}

export default Api;
