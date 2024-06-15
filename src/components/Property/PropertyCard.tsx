// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Property } from '../../types';
// import '../../styles/Properties.css'


// interface PropertyCardProps {
//   property: Property;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
//   return (
//     <>


// <div className="property-card">

// <div className="image-container">
//   <img src={property.image} alt={property.title} />
//   <span className="property-type-tag">{property.property_type}</span>
// </div>
// <p className='product-title'>{property.title}</p>
// <p className='product-location'><i class="fa-solid fa-location-dot"></i> {property.location}</p>
// <div className='type'>
//   <p><i class="fa-solid fa-house"></i> {property.flat_type}</p>
//   <p><i class="fa-solid fa-chart-area"></i> {property.area}sqft</p>
//   <p><i class="fa-solid fa-people-roof"></i>{property.prefer_category}</p>

// </div>
// <div className='icons-type'>
// <i class="fa-solid fa-arrow-up-right-from-square"></i>
// <i class="fa-regular fa-heart"></i>
// <i class="fa-solid fa-link"></i>

// </div>
// <Link to={`/properties/${property.id}`} className='view-btn'>View Details</Link>
// </div>





      

// </>










//   );
// };

// export default PropertyCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';
import '../../styles/Properties.css'

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card">
      <div className="image-container">
        <img src={property.image} alt={property.title} />
        <span className="property-type-tag">{property.property_type}</span>
      </div>
      <p className='product-title'>{property.title}</p>
      <p className='product-location'><i className="fa-solid fa-location-dot"></i> {property.location}</p>
      <div className='type'>
        <p><i className="fa-solid fa-house"></i> {property.flat_type}</p>
        <p><i className="fa-solid fa-chart-area"></i> {property.area} sqft</p>
        <p><i className="fa-solid fa-people-roof"></i> {property.prefer_category}</p>
      </div>
      <div className='icons-type'>
        <Link to={`/properties/${property.id}`}>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
        <Link to={`/wishlist`}>
          <i className="fa-regular fa-heart"></i>
        </Link>
        <Link to={`/properties/${property.id}`}>
          <i className="fa-solid fa-link"></i>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
