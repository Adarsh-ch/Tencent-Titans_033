import React from 'react';
import { useAuth } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';
import  Navbar  from '../src/components/common/Navbar';
import Allroutes from './components/common/Allroutes';

const App: React.FC = () => {
  const { currentUser } = useAuth();

  if (currentUser)
    return (
      <>
        <Navbar />
        <Allroutes />
      </>
    );

  return <RegisterPage />;
};

export default App;
