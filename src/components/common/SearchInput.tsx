import React from 'react';
import '../../styles/SeachInput.css'
const SearchInput: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ value, onChange }) => {
  return (
    <div className='input-container'>
      <input
        className="location-input"
        type="text"
        placeholder="Enter Your Location"
        value={value}
        onChange={onChange}
      />
      <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
};

export default SearchInput;

