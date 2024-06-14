import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css'
import logo from '../../assets/Images/logo.png'
const Navbar: React.FC = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <Link to="/">Home</Link>
      <Link to="/properties">Properties</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Sign Up</Link>
      <Link to='/user/dashboard'>User</Link>
      <Link to={"/postyourproperty"}>Post Your Property</Link>
    </nav>
  );
};

export default Navbar;
