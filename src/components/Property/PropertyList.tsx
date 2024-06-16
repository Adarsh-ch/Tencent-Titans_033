import React, { useEffect, useState } from 'react';
import { fetchData} from '../../services/api';
import PropertyCard from './PropertyCard';
import { Property } from '../../types';
import '../../styles/Properties.css';
import Filter from './Filter';
import useQuery from '../../hooks/useQuery';
import PaginationComponent from './PaginationComponent';


const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const {queryString} = useQuery()
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData(queryString).then(res => setProperties(res))
  }, [queryString]);

  // if (error) {
  //   return <div className="property-list-error">{error}</div>;
  // }

  return (
    <>
      <div className="main-container">
        <Filter/>
        <div>
        <div className="property-list">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <PaginationComponent />
        </div>
      </div>
    </>
  );
};

export default PropertyList;
