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

export async function getProjects() {
  try {
    const request = await Api.get('projects');
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function getProjectsByUserId(userId) {
  try {
    const request = await Api.get(`projects/users/${userId}`);
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function getAllTags() {
  try {
    const request = await Api.get('tags');
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function postProject({
  description, image, link, name, tags,
}) {
  try {
    const request = await Api.post('projects', {
      description, image, link, name, tags,
    });
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function deleteProject(projectId) {
  try {
    const request = await Api.delete(`projects/${projectId}`);
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export async function updateProjectById(projectId, data) {
  try {
    const response = await Api.put(`projects/${projectId}`, data);
    return { data: response.data, status: response.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

export default Api;
