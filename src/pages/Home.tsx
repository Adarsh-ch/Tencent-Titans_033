import React from 'react';
import SearchBar from '../components/common/SearchBar';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const {currentUser} = useAuth();

  return <div>
    Welcome to Real Estate App
    <p>{currentUser?.email}</p>
    <SearchBar />
  </div>;
};

export default Home;
