import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <Link to={`/properties/${property.id}`}>View Details</Link>
    </div>
  );
};

export default PropertyCard;
