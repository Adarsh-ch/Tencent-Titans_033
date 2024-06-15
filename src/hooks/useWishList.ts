import { useState, useCallback, useMemo } from 'react';
import { Property } from '../types';
import { fetchData, updateData } from '../services/api';

export const useWishlist = (currentUserEmail: string | null | undefined) => {
  const [wishlist, setWishlist] = useState<Property[]>([]);

  const fetchWishlist = useCallback(async () => {
    try {
      if (currentUserEmail) {
        const users = await fetchData('/userProfiles');
        const user = users.find((user: any) => user.user_id == currentUserEmail);
        if (user) {
          setWishlist(user.user_wishlist);
        }
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  }, [currentUserEmail]);

  const addToWishlist = useCallback(async (property: Property) => {
    try {
      const updatedWishlist = [...wishlist, property];
      const users = await fetchData('/userProfiles');
      const user = users.find((user: any) => user.user_id == currentUserEmail);
      if (user) {
        user.user_wishlist = updatedWishlist;
        await updateData(`/userProfiles/${user.id}`, user);
        setWishlist(updatedWishlist);
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  }, [wishlist, currentUserEmail]);

  const removeFromWishlist = useCallback(async (propertyId: string | number) => {
    try {
      const updatedWishlist = wishlist.filter(item => item.id != propertyId);
      const users = await fetchData('/userProfiles');
      const user = users.find((user: any) => user.user_id == currentUserEmail);
      if (user) {
        user.user_wishlist = updatedWishlist;
        await updateData(`/userProfiles/${user.id}`, user);
        setWishlist(updatedWishlist);
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  }, [wishlist, currentUserEmail]);

 
    return {
      wishlist,
      fetchWishlist,
      addToWishlist,
      removeFromWishlist,
    }

};
