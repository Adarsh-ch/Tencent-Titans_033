import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SET_USER_ID } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';

const UserDashboard: React.FC = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    logout();
    navigate('/');
  }

  return <div style={{minHeight:'100vh'}}>User Dashboard
    <button onClick={handleSignOut}>Sign Out</button>
  </div>;
};

export default UserDashboard;
