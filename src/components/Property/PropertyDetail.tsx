import React from 'react';
import { Property } from '../../types';

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="property-detail">
      <img src={property.image} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      {/* <ul>
        {property.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul> */}
      <p>Rent per month: ${property.rent_per_month}</p>
    </div>
  );
};

export default PropertyDetail;
