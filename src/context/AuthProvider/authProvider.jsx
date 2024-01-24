import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUser, loginResquest, getUserLocalStorage, setUserLocalStorage,
} from './util';

export const AuthContext = createContext({});

function authProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email, password) {
    const response = await loginResquest(email, password);
    if (response.token !== undefined) {
      const payload = { id: response.id, token: response.token };
      setUser(payload);
      setUserLocalStorage(payload);
    } else {
      throw new Error('Usuário não autenticado');
    }
  }
  authenticate.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  };

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  async function accountCreate(name, email, password, role) {
    const response = await createUser(name, email, password, role);

    if (response.status === 400) {
      throw new Error(response.message);
    }

    setUser(response.data);
    setUserLocalStorage(response.data);

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
      ...user, authenticate, logout, accountCreate,
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
