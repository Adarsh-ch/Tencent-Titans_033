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

    return (
      <Router>
        <Navbar />
        <Allroutes />
      </Router>
    );

};

export default App;
