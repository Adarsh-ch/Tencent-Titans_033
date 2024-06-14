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
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
