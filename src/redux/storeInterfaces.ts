import { Property } from "../types";

export interface FilterState {
    location: string;
    rent?: number; 
    area?: number; 
    furnitureType: string;
    propertyType:string;
    flatType: string;
    category: string;
    page:number;
    limit:number;
    order:string;
    prev:number;
  }
  
  export interface Action {
    type: string;
    payload?: any;
  }
  
  export interface UserState {
      user_id: string;
      user_listing: Property[];
      user_wishlist: Property[];
      id?: string;
  }