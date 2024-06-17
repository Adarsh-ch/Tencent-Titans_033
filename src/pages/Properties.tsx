import React from 'react';
import PropertyList from '../components/Property/PropertyList';
import '../styles/Properties.css'
import Footer from '../components/common/Footer';

 
const Properties: React.FC = () => {
  
  return (
    <>
   
    <div className='property-container'>
          <PropertyList />
    </div>
    <Footer />
    </>
  )

};

export default Properties;
