export interface Property {
    id:string | number;
    image: string;
    title: string;
    description: string;
    location: string;
    rent: number;
    maintenance: string | number;
    area: string;
    furniture_type: string;
    flat_type: string;
    property_type: string;
    prefer_category: string;
  }
  
  export interface UserProfile{
    id:string;
    user_id:string;
    user_listing: Property[];
    user_wishlist: Property[];
  }