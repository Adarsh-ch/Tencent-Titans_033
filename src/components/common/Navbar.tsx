import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/properties">Properties</Link>
      <Link to='/user/dashboard'>User</Link>
    </nav>
  );
};

export default Navbar;
