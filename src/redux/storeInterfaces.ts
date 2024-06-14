export interface FilterState {
    location: string;
    rent?: number; 
    area?: number; 
    furnitureType: string;
    propertyType:string;
    flatType: string;
    category: string;
  }
  
  export interface Action {
    type: string;
    payload?: any;
  }
  