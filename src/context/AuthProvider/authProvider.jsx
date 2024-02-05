import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  getTokenStorage, clearTokenLocalStorage, clearTokenSessionStorage,
} from './util';
import { meRequest } from '../../service/orangeApi';
import getIpInfo from '../../service/ipdata';
import contryCodeToPortuguese from '../../helpers/contryCodeToPortuguese';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = getTokenStorage();
    if (!token) navigate('/login');

    const { data, status } = await meRequest(token);
    if (status !== 200) navigate('/login');
    setUser(data);
  };

  const fetchUserCountry = async () => {
    const { data, status } = await getIpInfo();
    if (status === 200) setLocation(contryCodeToPortuguese(data.country_code));
  };

  useEffect(() => {
    fetchUser();
    fetchUserCountry();
  }, []);

  function logout() {
    clearTokenLocalStorage();
    clearTokenSessionStorage();
  }

  const authContextValue = useMemo(() => ({
    user,
    location,
    logout,
  }), [user, location]);

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
