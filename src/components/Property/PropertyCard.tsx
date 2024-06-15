import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Property } from '../../types';
import '../../styles/Properties.css';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../hooks/useWishList';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const { wishlist,fetchWishlist, addToWishlist, removeFromWishlist } = useWishlist(
    currentUser?.email
  );
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    if (isAdded) {
      removeFromWishlist(property.id);
    } else {
      addToWishlist(property);
    }
    setIsAdded(prev=>!prev);
  };

  useEffect(() => {
    const fetchAndCheckWishlist = async () => {
      await fetchWishlist();
      if (currentUser) {
        const isPropertyInWishlist = wishlist.some(
          (item: Property) => item.id == property.id
        );
        console.log(isPropertyInWishlist,property)
        setIsAdded(isPropertyInWishlist);
      }
    };

    fetchAndCheckWishlist();
  }, [ fetchWishlist,currentUser,property.id,isAdded]);


  return (
    <div className="property-card">
      <div className="image-container">
        <img src={property.image} alt={property.title} />
      </div>
      <p
        className="text-success fs-6"
        style={{ paddingLeft: '20px', margin: '0' }}
      >
        FOR {property.property_type.toLocaleUpperCase()}
      </p>
      <h3 className="product-title ">{property.title}</h3>
      <p className="product-location">
        <i className="fa-solid fa-location-dot" style={{ color: 'green' }}></i>{' '}
        {property.location}
      </p>
      <div className="type">
        <p> {property.flat_type}</p>
        <p> {property.area} sqft</p>
        <p> {property.prefer_category}</p>
      </div>
      <div className="icons-type">
        <button
          onClick={() => navigate(`/properties/${property.id}`)}
          title="Details"
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
        <button onClick={handleClick} title="wishlist">
          {isAdded ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
