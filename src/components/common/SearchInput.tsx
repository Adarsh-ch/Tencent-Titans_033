import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 
import { SET_LOCATION } from '../../redux/actionTypes';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/properties');

    dispatch({ type: SET_LOCATION, payload: location }); 
    setLocation('');

    useEffect(() => {
        dispatch({ type: SET_LOCATION, payload: location }); 
      }, [location, dispatch]);
  };

  return (
    <form onSubmit={handleSearch} className="shadow m-auto p-3" style={{ maxWidth:'1440px', translate: '0px 10px', backgroundColor: 'white' }}>
      <div className="input-group">
        <input
          type="text"
          className="form-control py-2 p-4 border-secondary-subtle"
          placeholder="Enter Location Here!"
          style={{ width: '200px', height: '50px', }}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="submit"
          style={{ height: '50px', border: 'none', padding: '8px 20px', backgroundColor: 'green', color: 'white', alignItems: 'center', borderRadius: '0 6px 6px 0' }}
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

