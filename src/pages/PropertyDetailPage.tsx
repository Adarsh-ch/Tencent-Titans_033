import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetail from '../components/Property/PropertyDetail';
import { Property } from '../types';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = React.useState<Property | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5001/properties/${id}`);
        console.log(`http://localhost:5001/properties/`+id);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        setError(`Failed to fetch property: ${(error as Error).message}`);
      }
    };

    fetchProperty();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return property ? <PropertyDetail property={property} /> : <div>Loading...</div>;
};

export default PropertyDetailPage;
