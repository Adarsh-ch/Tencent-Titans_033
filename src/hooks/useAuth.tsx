import { useAuth as useContextAuth } from '../context/AuthContext';

const useAuth = () => {
  return useContextAuth();
};

export default useAuth;
