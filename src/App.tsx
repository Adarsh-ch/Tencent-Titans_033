import React from 'react';
import { useAuth } from './context/AuthContext';
import  Navbar  from '../src/components/common/Navbar';
import Allroutes from './components/common/Allroutes';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router,Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import './App.css'

const App: React.FC = () => {
  const { currentUser } = useAuth();

  if (currentUser)
    return (
      <Router>
        <Navbar />
        <Allroutes />
      </Router>
    );

  return <Router>
    <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
  </Router>
};

export default App;
