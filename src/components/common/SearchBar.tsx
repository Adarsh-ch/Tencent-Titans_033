import React from 'react';
import { useDispatch} from 'react-redux';

import { SET_CATEGORY, SET_LOCATION, SET_PROPERTY_TYPE } from '../../redux/actionTypes';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSearch} className='shadow m-auto p-3' style={{width:'70%',translate:'0px -40px',backgroundColor:'white'}}>
      <select className="form-select d-inline m-4 py-2 p-4 border-secondary-subtle"  aria-label="Default select example" style={{width:'200px',height:'50px'}} onChange={(e) => dispatch({type:SET_LOCATION,payload:e.target.value})}>
        <option value="">Choose area</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Gurgaon">Gurgaon</option>
        <option value="Jaipur">Jaipur</option>
      </select>
      <select className="form-select d-inline me-4 py-2 p-4 border-secondary-subtle"  aria-label="Default select example" style={{width:'200px',height:'50px'}} onChange={(e) => dispatch({type:SET_PROPERTY_TYPE,payload:e.target.value})}>
        <option value="" >Property Type</option>
        <option value="Rent">Rent</option>
        <option value="Sell">Sell</option>
      </select>
      <select className="form-select d-inline me-4 py-2 p-4 border-secondary-subtle"  aria-label="Default select example" style={{width:'200px',height:'50px'}} onChange={(e) => dispatch({type:SET_CATEGORY,payload:e.target.value})}>
        <option value="">Choose Category</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Family">Family</option>
        <option value="Couple">Couple</option>
        <option value="Female">Female</option>
      </select>
      <button type="submit" style={{height:'50px',border:'none',padding:'8px 32px',backgroundColor:'green',color:'white',alignItems:'center',borderRadius:'6px'}}onClick={()=>navigate('/properties')}>FIND NOW</button>
    </form>
  );
};

export default SearchBar;
