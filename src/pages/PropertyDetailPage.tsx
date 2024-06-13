import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetail from '../components/Property/PropertyDetail';
import { Property } from '../types';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id,typeof id);
  const [property, setProperty] = React.useState<Property | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProperty = async () => {
      // if (!id) {
      //   setError('Invalid property ID');
      //   return;
      // }

      // const propertyId = parseInt(id, 10);
      // if (isNaN(propertyId)) {
      //   setError('Property ID is not a valid number');
      //   return;
      // }

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
  }, [id]);

  console.log(property);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return property ? <PropertyDetail property={property} /> : <div>Loading...</div>;
};

export default PropertyDetailPage;
