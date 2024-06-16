import React from 'react';
import PropertyList from '../components/Property/PropertyList';
import '../styles/Properties.css'
import Footer from '../components/common/Footer';
import SearchBar from '../components/common/SearchBar';

const Properties: React.FC = () => {
  
  return (
    <>
    {/* <SearchBar/> */}
    <div className='property-container'>
          <PropertyList />;
    </div>
    <Footer />
    </>
  )

};

export default Properties;
