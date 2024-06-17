import React, { useEffect, useState, useCallback } from 'react';
import { fetchData } from '../../services/api';
import PropertyCard from './PropertyCard';
import { Property } from '../../types';
import '../../styles/Properties.css';
import Filter from './Filter';
import useQuery from '../../hooks/useQuery';
import PaginationComponent from './PaginationComponent';
import SearchInput from '../common/SearchInput';



// function debounce(func:void, delay:number){
//   let timeout:any;
//   return function(...args) {
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { queryString } = useQuery();
  
  useEffect(() => {
    fetchData(queryString).then(res => {
      setProperties(res);
      setFilteredProperties(res);
    });
  }, [queryString]);

  const handleSearch = useCallback(debounce((term: string) => {
    if (term) {
      const filtered = properties.filter(property =>
        property.location.toLowerCase().includes(term.toLowerCase()) ||
        property.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(properties);
    }
  }, 300), [properties]);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  return (
    <>
      <SearchInput value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <div className="main-container">
        <Filter />
        <div>
          <div className="property-list">
            {filteredProperties.map((property) => (
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
