import React, { useEffect } from 'react'
import { useWishlist } from '../../hooks/useWishList'
import { useAuth } from '../../context/AuthContext';
import PropertyCard from './PropertyCard';

const WishList = () => {
    const {currentUser} = useAuth();
    const {wishlist,fetchWishlist} = useWishlist(currentUser?.email);

    useEffect(() => {
      fetchWishlist();
    },[fetchWishlist])

  return (
    <div>
      <div className="property-list">
          {wishlist.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
    </div>
  )
}

export default WishList
