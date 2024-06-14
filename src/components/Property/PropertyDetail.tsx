


import React from 'react';
import { Property } from '../../types';
import '../../styles/PropertyDetail.css';

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  // Mapping property fields to icons
  const propertyDetails = [
    { icon: '📍', label: 'Location', text: property.location },
    { icon: '💵', label: 'Rent', text: property.rent },
    { icon: '🛠️', label: 'Maintenance', text: property.maintenance },
    { icon: '📐', label: 'Area', text: property.area },
    { icon: '🛋️', label: 'Furniture Type', text: property.furniture_type },
    { icon: '🏢', label: 'Flat Type', text: property.flat_type },
    { icon: '👥', label: 'Preferred Category', text: property.prefer_category },
    { icon: '🏠', label: 'Property Type', text: property.property_type },
  ];

  return (
    <div className="property-detail">
      <img src={property.image} alt={property.title} />
      <div>
        <h1 className='title'>{property.title}</h1>
        <h4 className='description'>{property.description}</h4>
        <div className="table">
          {propertyDetails.map((detail, index) => (
            <div key={index} className="table-row">
              <span className="icon">{detail.icon}</span>
              <span className="label">{detail.label}</span>
              <span className="text">{detail.text}</span>
            </div>
            
          ))}
             <button className='btn-owner'>Add to Wishlist</button>
        </div>
     
      </div>
    </div>
  );
};

export default PropertyDetail;

