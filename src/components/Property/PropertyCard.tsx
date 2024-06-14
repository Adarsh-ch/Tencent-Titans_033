import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';
import '../../styles/Properties.css'


interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
  <div >
     <div className="property-card">
        <img src={property.image} alt={property.title}/>
        <p className='product-title'>{property.title}</p>
        <p className='product-rent' ><b>Rent</b>${property.rent}/month</p>
        <Link to={`/properties/${property.id}`} className='view-btn'>View Details</Link>
      </div>
  </div>
     








  );
};

export default PropertyCard;
