import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
     logout();
     navigate('/');
  }

  return <div>User Dashboard
    <button onClick={handleSignOut}>Sign Out</button>
  </div>;
};

export default UserDashboard;
