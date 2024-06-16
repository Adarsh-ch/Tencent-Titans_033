import { Property } from '../types';
import { fetchData, updateData } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../redux/store';
import { ADD_TO_WISHLIST, FETCH_WISHLIST, REMOVE_FROM_WISHLIST } from '../redux/actionTypes';

export const useWishlist = (currentUserEmail: string | null | undefined) => {
 const currentUser = useSelector((store:RootState) => store.user);
 const dispatch = useDispatch();

  const fetchWishlist = async () => {
    try {
      if (currentUserEmail) {
        const users = await fetchData('/userProfiles');
        const user = users.find((user: any) => user.user_id == currentUserEmail);
        if (user) {
          dispatch({type:FETCH_WISHLIST,payload:user.user_wishlist})
        }
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const addToWishlist = async (property: Property) => {
    try {
      // console.log(wishlist,property)
      const updatedWishlist = [...currentUser.user_wishlist, property];
      const users = await fetchData('/userProfiles');
      const user = users.find((user: any) => user.user_id == currentUserEmail);
      if (user) {
        user.user_wishlist = updatedWishlist;
        await updateData(`/userProfiles/${user.id}`, user);
        dispatch({type:ADD_TO_WISHLIST,payload:property})
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const removeFromWishlist = async (propertyId: string | number) => {
    try {
      const updatedWishlist = currentUser.user_wishlist.filter(item => item.id != propertyId);
      const users = await fetchData('/userProfiles');
      const user = users.find((user: any) => user.user_id == currentUserEmail);
      if (user) {
        console.log('anything')
        user.user_wishlist = updatedWishlist;
        await updateData(`/userProfiles/${user.id}`, user);
        dispatch({type:REMOVE_FROM_WISHLIST,payload:propertyId});
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

 
    return {
      fetchWishlist,
      addToWishlist,
      removeFromWishlist,
    }

};
