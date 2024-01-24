import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CreateUser, LoginResquest, getUserLocalStorage, setUserLocalStorage,
} from './util';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email, password) {
    const response = await LoginResquest(email, password);
    if (response.token !== undefined) {
      const payload = { id: response.id, token: response.token };
      setUser(payload);
      setUserLocalStorage(payload);
    } else {
      throw new Error('Usuário não autenticado');
    }
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  async function createUser(name, email, password, role) {
    const response = await CreateUser(name, email, password, role);

    if (response.status === 400) {
      throw new Error(response.message);
    }

    setUser(response.data);
    setUserLocalStorage(response.data);

    return response.data;
  }

  return (
    <AuthContext.Provider value={{
      ...user, authenticate, logout, createUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
