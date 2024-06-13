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
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
