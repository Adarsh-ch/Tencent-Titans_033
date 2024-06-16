import { Property } from '../types';
import { ADD_TO_WISHLIST, FETCH_WISHLIST, REMOVE_FROM_WISHLIST, SET_USER, SET_USER_ID } from './actionTypes';
import { Action } from './storeInterfaces';

const initialState = {
    user_id:'',
    user_wishlist:[],
    user_listing:[],
}

export const userReducer = (state=initialState,{type,payload}:Action) => {
    switch(type){
        case ADD_TO_WISHLIST: 
          return {...state,user_wishlist:[...state.user_wishlist,payload]};
        case REMOVE_FROM_WISHLIST:{
          console.log('dispatched',state.user_wishlist.filter((item :Property) => item.id!=payload),payload)
          return {...state,user_wishlist:state.user_wishlist.filter((item :Property) => item.id!=payload)};
        }
        case FETCH_WISHLIST:
            return {...state,user_wishlist:payload};
        case SET_USER:
            return {...state,...payload};
        case SET_USER_ID:
            return {...state,user_id:payload}
        default:
            return state;
    }
}