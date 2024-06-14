import { RESET_FILTERS, SET_AREA, SET_CATEGORY, SET_FLAT_TYPE, SET_FURNITURE_TYPE, SET_LOCATION, SET_RENT } from "./actionTypes";
import { Action, FilterState } from "./storeInterfaces";

const initialState :FilterState= {
    location: "",
    rent:18000000,
    area: 6500000,
    propertyType:"",
    furnitureType: "",
    flatType: "",
    category: "",
}

const filterReducer = (state=initialState,{type,payload}:Action):FilterState => {
  switch(type){
    case SET_LOCATION:
        return { ...state, location: payload };
      case SET_RENT:
        return { ...state, rent: payload };
      case SET_AREA:
        return { ...state, area: payload };
      case SET_FURNITURE_TYPE:
        return { ...state, furnitureType: payload };
      case SET_FLAT_TYPE:
        return { ...state, flatType: payload };
      case SET_CATEGORY:
        return { ...state, category: payload };
      case RESET_FILTERS:
        return initialState;
      default:
        return state;
  }
}

export default filterReducer
