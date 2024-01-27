import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getTokenStorage, setTokenLocalStorage, clearTokenLocalStorage, clearTokenSessionStorage,
} from './util';
import { createUser, loginResquest } from '../../service/api';

export const AuthContext = createContext({});

function authProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = getTokenStorage();

    if (token) {
      setToken(localToken);
    }
  }, []);

  async function authenticate(email, password) {
    const response = await loginResquest(email, password);
    if (response.token !== undefined) {
      const payload = { token: response.token };
      setToken(payload);
      setTokenLocalStorage(payload);
    } else {
      throw new Error('Usuário não autenticado');
    }
  }
  authenticate.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  };

  function logout() {
    setToken(null);
    clearTokenLocalStorage();
    clearTokenSessionStorage();
  }

  async function accountCreate(name, email, password, role) {
    const response = await createUser(name, email, password, role);

    if (response.status === 400) {
      throw new Error(response.message);
    }

    setToken(response.data);
    setTokenLocalStorage(response.data.token);

    return response.data;
  }

  accountCreate.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  };

  return (
    <AuthContext.Provider value={{
      ...token, authenticate, logout, accountCreate,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

authProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default authProvider;
