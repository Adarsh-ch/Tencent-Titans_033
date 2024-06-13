import React from 'react';
import PropertyList from '../components/Property/PropertyList';
import '../styles/Properties.css'

const Properties: React.FC = () => {
  
  return (
    <div className='property-container'>
          <PropertyList />;
    </div>

  )

};

export default Properties;
