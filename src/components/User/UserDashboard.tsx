import React from 'react';
import { useAuth } from '../../context/AuthContext';

const UserDashboard: React.FC = () => {
  const {logout} = useAuth();

  return <div>User Dashboard
    <button onClick={logout}>Sign Out</button>
  </div>;
};

export default UserDashboard;
