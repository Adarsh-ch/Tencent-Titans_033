import { Property } from '../types';
import { fetchData, updateData } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../redux/store';
import { ADD_TO_LISTING, FETCH_LISTING,} from '../redux/actionTypes';

export const useListing = (currentUserEmail: string | null | undefined) => {
 const currentUser = useSelector((store:RootState) => store.user);
 const dispatch = useDispatch();

  const fetchListing = async () => {
    try {
      if (currentUserEmail) {
        const users = await fetchData('/userProfiles');
        const user = users.find((user: any) => user.user_id == currentUserEmail);
        if (user) {
          dispatch({type:FETCH_LISTING,payload:user.user_listing})
        }
      }
    } catch (error) {
      console.error('Error fetching listing:', error);
    }
  };

  const addTolisting = async (property: Property) => {
    try {
      console.log(currentUser,property);
      const updatedlisting = [...currentUser.user_listing, property];
      const users = await fetchData('/userProfiles');
      const user = users.find((user: any) => user.user_id == currentUserEmail);
      if (user) {
        user.user_listing = updatedlisting;
       const res= await updateData(`/userProfiles/${user.id}`, user);
        console.log(res.data);
        dispatch({type:ADD_TO_LISTING,payload:property})
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

//   const removeFromWishlist = async (propertyId: string | number) => {
//     try {
//       const updatedWishlist = currentUser.user_wishlist.filter(item => item.id != propertyId);
//       const users = await fetchData('/userProfiles');
//       const user = users.find((user: any) => user.user_id == currentUserEmail);
//       if (user) {
//         console.log('anything')
//         user.user_wishlist = updatedWishlist;
//         await updateData(`/userProfiles/${user.id}`, user);
//         dispatch({type:REMOVE_FROM_WISHLIST,payload:propertyId});
//       }
//     } catch (error) {
//       console.error('Error removing from wishlist:', error);
//     }
//   };

 
    return {
        fetchListing,
        addTolisting
     }

};
