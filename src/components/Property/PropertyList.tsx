import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../../services/api';
import PropertyCard from './PropertyCard';
import { Property } from '../../types';
import '../../styles/Properties.css'

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const loadProperties = async () => {
      const response = await fetchProperties();
      setProperties(response.data);
    };
    loadProperties();
  }, []);

  return (
    <>
      <div className='filter-section'>
        <div className='property-type'>
          <p className='type-heading'>Property-Type</p>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Buy</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Sell</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Rent</p>
          </div>
        </div>
        <div className='funiture-type'>
          <p className='type-heading'>Funiture-Type</p>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Fully Furnished</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Semi Furnished</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Unfurnished</p>
          </div>

        </div>

        <div className='flat_type'>
          <p className='type-heading'>Flat-Type</p>
          <div className='input-box'>
            <input type="checkbox" />
            <p>1 BHK</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>2 BHk</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>3 BHK</p>
          </div>

        </div>
        <div className='prefer_category'>
          <p className='type-heading'>Prefer-Category</p>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Family</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Female</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Bachelor</p>
          </div>
        </div>
        <div className='price'>
          <p className='type-heading'>Price</p>
          <div className='input-box'>
            <input type="checkbox" />

            <p>Low To High</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>High To Low</p>
          </div>
          <div className='input-box'>
            <input type="checkbox" />
            <p>Any</p>
          </div>

        </div>
      </div>
      <hr></hr>



      <div className="property-list">


        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}

      </div>
    </>
  );
};

export default PropertyList;
