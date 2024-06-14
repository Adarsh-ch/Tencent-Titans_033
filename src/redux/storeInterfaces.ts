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
    prev:number;
  }
  
  export interface Action {
    type: string;
    payload?: any;
  }
  