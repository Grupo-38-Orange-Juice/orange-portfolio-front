import PropTypes from 'prop-types';
import Api from '../../service/api';

export function setUserLocalStorage({ user }) {
  localStorage.setItem('user', JSON.stringify(user));
}

setUserLocalStorage.propTypes = {
  user: PropTypes.object.isRequired,
};

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');
  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user;
}

export async function LoginResquest({ email, password }) {
  try {
    const request = await Api.post('authenticate', { email, password });
    return request.data;
  } catch (error) {
    return error;
  }
}

LoginResquest.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export async function CreateUser({
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

CreateUser.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
