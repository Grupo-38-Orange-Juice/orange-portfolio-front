import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  getTokenStorage, clearTokenLocalStorage, clearTokenSessionStorage,
} from './util';
import { meRequest } from '../../service/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(async () => {
    setToken(getTokenStorage());
    const response = await meRequest(token);
    if (response.status === 200) {
      setUser(response.data);
    } else {
      console.log('Usuário não autenticado');
    }
  }, []);

  function logout() {
    setToken(null);
    clearTokenLocalStorage();
    clearTokenSessionStorage();
  }

  const authContextValue = useMemo(() => ({
    token,
    user,
    logout,
  }), [token, user]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
