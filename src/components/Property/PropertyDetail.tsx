
import React from 'react';
import { Property } from '../../types';
// import '../../styles/PropertyDetail.css';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingCircleExclamation, faChartArea, faHouseChimneyCrack, faLocationDot, faPaintRoller, faPersonCircleQuestion, faR, faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { Box, ChakraProvider, Flex, Heading, Image, Text, VStack,Button } from '@chakra-ui/react';

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  // Mapping property fields to icons
  const propertyDetails = [
    { icon:<FontAwesomeIcon icon={faLocationDot} />, label: 'Location', text: property.location },
    { icon:<FontAwesomeIcon icon={faR}/>, label: 'Rent', text: property.rent },
    { icon: <FontAwesomeIcon icon={faPaintRoller}/>, label: 'Maintenance', text: property.maintenance },
    { icon: <FontAwesomeIcon icon={faChartArea} />, label: 'Area', text: property.area },
    { icon:<FontAwesomeIcon icon={faHouseChimneyCrack} />, label: 'Furniture Type', text: property.furniture_type },
    { icon:<FontAwesomeIcon icon={faTreeCity} />, label: 'Flat Type', text: property.flat_type },
    { icon:<FontAwesomeIcon icon={faPersonCircleQuestion} />, label: 'Preferred Category', text: property.prefer_category },
    { icon: <FontAwesomeIcon icon={faBuildingCircleExclamation} />, label: 'Property Type', text: property.property_type },
  ];

  return (
    <>
    <ChakraProvider>
      <Box as="div" maxWidth={"1440px"} m="auto">
        <Box textAlign="center">
          <Text as="h3">{property.title}</Text>
          <Text as="h5">{property.description}</Text>
        </Box>
        <Flex flexDir={['column','column','row']} justifyContent="center" alignItems="center" gap={50}>
          <Box>
            <Image src={property.image} alt={property.title} />
          </Box>
          <VStack spacing={3} textAlign="center">
            {propertyDetails.map((detail, index) => (
              <Box width="100%" key={index} className="table-row" textAlign="left">
                <Text as="span" className="icon">{detail.icon}</Text>
                <Text as="span" className="label">{detail.label}</Text>
                <Text as="span" className="text">{detail.text}</Text>
              </Box>
            ))}
            <Flex width="100%" >
                <Button>Contact Owner</Button>
                <Button>Add to Wishlist</Button>
                <Button>Report</Button>
            </Flex>
          </VStack>
        </Flex>

      </Box>
    </ChakraProvider>
    <Footer/>
    </>
  );
};

export default PropertyDetail;

