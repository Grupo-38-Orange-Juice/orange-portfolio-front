import { useContext } from 'react';
import { AuthContext } from './authProvider';

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
