import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Property } from '../../types';
import '../../styles/Properties.css';
import { useWishlist } from '../../hooks/useWishList';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [propertyId,setPropertyId] = useState<number|string>('');
  const user = useSelector((store:RootState) => store.user);
  const { fetchWishlist, addToWishlist, removeFromWishlist } = useWishlist(
    user.user_id
  );
  const navigate = useNavigate();
  console.log(user)

  const handleClick = async (id : (string|number)) => {
    setPropertyId(id);
    if (!user.user_id) {
      navigate('/login');
      return;
    }
    console.log(isAdded);
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
      if (user.user_id) {
        const isPropertyInWishlist = user.user_wishlist.some(
          (item: Property) => item.id == property.id
        );
        //console.log(isPropertyInWishlist,property)
        setIsAdded(isPropertyInWishlist);
      }
    };

    fetchAndCheckWishlist();
  }, [user.user_id]);

  useEffect(()=> {
    if (user.user_id) {
      const isPropertyInWishlist = user.user_wishlist.some(
        (item: Property) => item.id == property.id
      );
      //console.log(isPropertyInWishlist,property)
      setIsAdded(isPropertyInWishlist);
    }
  },[user])

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
        <button onClick={()=>handleClick(property.id)} title="wishlist">
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
