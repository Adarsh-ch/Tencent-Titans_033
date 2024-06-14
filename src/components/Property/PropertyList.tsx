import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../../services/api';
import PropertyCard from './PropertyCard';
import { Property } from '../../types';
import '../../styles/Properties.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const filter = useSelector((store: RootState) => store.filter);

  const queryParams: string[] = [];
  if (filter.location) queryParams.push(`location=${filter.location}`);
  if (filter.propertyType) queryParams.push(`property_type=${filter.propertyType}`);
  if (filter.category) queryParams.push(`prefer_category_like=${filter.category}`);

  const queryString = queryParams.length > 0 ? `?rent_lt=${filter.rent}&area_lt=${filter.area}&${queryParams.join('&')}` : `?rent_lt=${filter.rent}&area_lt=${filter.area}`;
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      const response = await fetchProperties(queryString);
      setProperties(response);
  };
    loadProperties();
  }, []);

  // if (error) {
  //   return <div className="property-list-error">{error}</div>; 
  // }

  return (
    <>
  <div className='main-container'>
    <div className='filter-section'>
      <div className='property-type'>
        <p className='type-heading'>Property-Type</p>
        <div className='input-box'>
          <input type="checkbox" id="buy" />
          <label htmlFor="buy">Buy</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="sell" />
          <label htmlFor="sell">Sell</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="rent" />
          <label htmlFor="rent">Rent</label>
        </div>
      </div>

      <div className='funiture-type'>
        <p className='type-heading'>Funiture-Type</p>
        <div className='input-box'>
          <input type="checkbox" id="fully-furnished" />
          <label htmlFor="fully-furnished">Fully Furnished</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="semi-furnished" />
          <label htmlFor="semi-furnished">Semi Furnished</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="unfurnished" />
          <label htmlFor="unfurnished">Unfurnished</label>
        </div>
      </div>

      <div className='flat_type'>
        <p className='type-heading'>Flat-Type</p>
        <div className='input-box'>
          <input type="checkbox" id="1bhk" />
          <label htmlFor="1bhk">1 BHK</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="2bhk" />
          <label htmlFor="2bhk">2 BHK</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="3bhk" />
          <label htmlFor="3bhk">3 BHK</label>
        </div>
      </div>

      <div className='prefer_category'>
        <p className='type-heading'>Prefer-Category</p>
        <div className='input-box'>
          <input type="checkbox" id="family" />
          <label htmlFor="family">Family</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="female" />
          <label htmlFor="female">Female</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="bachelor" />
          <label htmlFor="bachelor">Bachelor</label>
        </div>
      </div>

      <div className='price'>
        <p className='type-heading'>Price</p>
        <div className='input-box'>
          <input type="checkbox" id="low-to-high" />
          <label htmlFor="low-to-high">Low To High</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="high-to-low" />
          <label htmlFor="high-to-low">High To Low</label>
        </div>
        <div className='input-box'>
          <input type="checkbox" id="any" />
          <label htmlFor="any">Any</label>
        </div>
      </div>
    </div>

    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  </div>
</>

  );
};

export default PropertyList;
