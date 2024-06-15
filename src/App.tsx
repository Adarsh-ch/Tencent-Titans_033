import React from 'react';
import  Navbar  from '../src/components/common/Navbar';
import Allroutes from './components/common/Allroutes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const App: React.FC = () => {

    return (
      <Router>
        <Navbar />
        <Allroutes />
       
      </Router>
    );

};

export default App;
