import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetail from '../components/Property/PropertyDetail';
import { Property } from '../types';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = React.useState<Property | null>(null);

  React.useEffect(() => {
    const fetchProperty = async () => {
      const response = await fetch(`http://localhost:5001/properties/${id}`);
      // console.log(response)
      const data = await response.json();
     
      setProperty(data);
      
    };
    fetchProperty();
  }, [id]);
    console.log(property)
  return property ? <PropertyDetail property={property} /> : <div>Loading...</div>;
};

export default PropertyDetailPage;
