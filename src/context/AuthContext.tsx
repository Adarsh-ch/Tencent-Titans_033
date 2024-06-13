import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { User } from 'firebase/auth';

interface AuthContextProps {
  currentUser: User | null;
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const logout = () => {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
