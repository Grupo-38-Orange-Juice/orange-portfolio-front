import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  getTokenStorage, clearTokenLocalStorage, clearTokenSessionStorage,
} from './util';
import { meRequest } from '../../service/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = getTokenStorage();
    if (!token) navigate('/login');

    const { data } = await meRequest(token);
    if (status !== 200) navigate('/login');
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  function logout() {
    clearTokenLocalStorage();
    clearTokenSessionStorage();
  }

  const authContextValue = useMemo(() => ({
    user,
    logout,
  }), [user]);

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
