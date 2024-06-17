import React, { useMemo, useState } from 'react';
import { Property } from '../../types';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingCircleExclamation, faChartArea, faHeart, faHouseChimneyCrack, faLocationDot, faMessage, faPaintRoller, faPersonCircleQuestion, faR, faTreeCity, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Box,useToast, ChakraProvider, Flex, Text, VStack, Button, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Textarea, HStack, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useWishlist } from '../../hooks/useWishList';
import {  store } from '../../hooks/store';
import { userReducer } from '../../redux/userReducer';
import { useSelector, useDispatch } from'react-redux';
import { RootState } from '../../redux/store';
import { FETCH_WISHLIST ,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from '../../redux/actionTypes';

interface PropertyDetailProps {
  property: Property;
}
interface Review {
  rating: number;
  comment: string;
}



const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const toast = useToast();

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749179518!2d77.30126246150184!3d12.954459536902307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangaluru!5e0!3m2!1sen!2sin!4v1718613888867!5m2!1sen!2sin`;
  const currentUser = useSelector((store:RootState) => store.user);
  const { fetchWishlist,addToWishlist,removeFromWishlist} = useWishlist();

  const dispatch = useDispatch();
  console.log(currentUser);
  const [wishlist, setWishlist] = useState(()=>{
    if(currentUser.wishlist){
      if(currentUser.wishlist.filter((wishlist: { id: number|string; }) => wishlist.id === property.id)[0]){
        return true;
      }
      return false;
    }
    return false;
  });
  // console.log(wishlist);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({ rating: 0, comment: '' });
  const { isOpen: isOwnerModalOpen, onOpen: onOwnerModalOpen, onClose: onOwnerModalClose } = useDisclosure();
  const { isOpen: isChatModalOpen, onOpen: onChatModalOpen, onClose: onChatModalClose } = useDisclosure();

  const handleWishlistToggle = () => {
    setWishlist(!wishlist);
    if(wishlist){
      removeFromWishlist(property.id);
      toast({
        title: 'Property Removed From Wishlist.',
        // description: "We've created your account for you.",
        status: 'success',
        duration: 1000,
        isClosable: false,
      })
    }
    else{
      addToWishlist(property);
      toast({
        title: 'Property Added To Wishlist.',
        // description: "We've created your account for you.",
        status: 'success',
        duration: 1000,
        isClosable: false,
      })
    }
  };

  const handleReviewSubmit = () => {
    setReviews([...reviews, newReview]);
    setNewReview({ rating: 0, comment: '' });
  };

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const propertyDetails = [
    { icon: <FontAwesomeIcon icon={faLocationDot} />, label: 'Location', text: property.location },
    { icon: <FontAwesomeIcon icon={faR} />, label: 'Rent', text: property.rent },
    { icon: <FontAwesomeIcon icon={faPaintRoller} />, label: 'Maintenance', text: property.maintenance },
    { icon: <FontAwesomeIcon icon={faChartArea} />, label: 'Area', text: property.area },
    { icon: <FontAwesomeIcon icon={faHouseChimneyCrack} />, label: 'Furniture Type', text: property.furniture_type },
    { icon: <FontAwesomeIcon icon={faTreeCity} />, label: 'Flat Type', text: property.flat_type },
    { icon: <FontAwesomeIcon icon={faPersonCircleQuestion} />, label: 'Preferred Category', text: property.prefer_category },
    { icon: <FontAwesomeIcon icon={faBuildingCircleExclamation} />, label: 'Property Type', text: property.property_type },
  ];

  return (
    <>
      <ChakraProvider>
        <Box as="div" maxWidth={"1440px"} m="auto" fontFamily="sans-serif;" boxSizing='border-box' px={10}>
          <Box textAlign="center"p={5} mb={2} >
            <Text color="green" as="h3" fontSize="2xl" fontWeight="bold">{property.title}</Text>
          </Box>
          <Flex flexDir={['column','column','row']} justifyContent="center" alignItems="center" gap={10}>
            <Box flexBasis="50%" border="1px ridge" padding={5} borderRadius={5} boxShadow="md">
              <Image width="100%" src={property.image} alt={property.title} />
              <Text as="h5" fontSize="lg" p={3} mt={2}>{property.description}</Text>
            </Box>
            <VStack flexBasis="50%" spacing={3} textAlign="center">
              {propertyDetails.map((detail, index) => (
                <Box key={index} width="100%" p={2.5} boxShadow="md" borderRadius="md">
                  <Flex alignItems="center">
                    <Box as="span" mr={3}>{detail.icon}</Box>
                    <Box as="span" fontWeight="bold" mr={3}>{detail.label}:</Box>
                    <Box as="span">{detail.text}</Box>
                  </Flex>
                </Box>
              ))}
              <Flex width="100%" justifyContent="space-between">
                <Button colorScheme="green" onClick={onOwnerModalOpen}>Contact Owner</Button>
                <Button colorScheme="green" onClick={handleWishlistToggle}>
                  <FontAwesomeIcon icon={faHeart} color={wishlist ? 'red' : 'white'} />
                </Button>
                <Button colorScheme="green" onClick={onChatModalOpen}><FontAwesomeIcon icon={faMessage} color='white' /></Button>
              </Flex>
            </VStack>
          </Flex>

          <Box mt={10} p={5} boxShadow="lg" borderRadius="md">
            <Heading as="h4" size="md" mb={4}>Reviews</Heading>
            {reviews.map((review, index) => (
              <Box key={index} p={3} mb={3} border="1px" borderColor="gray.200" borderRadius="md">
                <Flex justifyContent="space-between">
                  <Text><strong>Username:</strong> User {index + 1}</Text>
                  <HStack spacing={1}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={i < review.rating ? faStarSolid : faStarRegular} color="yellow" />
                    ))}
                  </HStack>
                </Flex>
                <Text mt={2}><strong>Comment:</strong> {review.comment}</Text>
              </Box>
            ))}
            <Box mt={5}>
              <Heading as="h4" size="md" mb={3}>Add a Review</Heading>
              <HStack spacing={1}>
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={i < newReview.rating ? faStarSolid : faStarRegular}
                    color="yellow"
                    onClick={() => handleRatingChange(i + 1)}
                    cursor="pointer"
                  />
                ))}
              </HStack>
              <Textarea
                mt={3}
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Add your comment"
              />
              <Button mt={3} colorScheme="blue" onClick={handleReviewSubmit}>Submit</Button>
            </Box>
          </Box>
        </Box>

        {/* Contact Owner Modal */}
        <Modal isOpen={isOwnerModalOpen} onClose={onOwnerModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Owner</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Owner Phone Number: 78XXXXXXXX</Text>
              <Text>Owner Email: owner@gmail.com</Text>
              <Button mt={3} colorScheme="blue" onClick={onOwnerModalClose}>Close</Button>
            </ModalBody>
          </ModalContent>
        </Modal>

         {/* Map and Enquiry Section */}
         <Flex direction={['column', 'column', 'row']} mt={10} gap={10}>
            <Box flexBasis="50%" boxShadow="lg" borderRadius="md" p={5}>
              <Heading as="h4" size="md" mb={3}>Property Location</Heading>
              <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749179518!2d77.30126246150184!3d12.954459536902307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718613888867!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
            </Box>
            <Box flexBasis="50%" boxShadow="lg" borderRadius="md" p={5}>
              <Heading as="h4" size="md" mb={3}>Send Enquiry Mail</Heading>
              <FormControl id="email" mb={3}>
                <FormLabel>Your Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl id="subject" mb={3}>
                <FormLabel>Subject</FormLabel>
                <Input type="text" placeholder="Enter subject" />
              </FormControl>
              <FormControl id="message" mb={3}>
                <FormLabel>Message</FormLabel>
                <Textarea rows={10} placeholder="Enter your message" />
              </FormControl>
              <Button
                colorScheme="blue"
                onClick={() => {
                  toast({
                    title: 'Enquiry Sent.',
                    description: "We've received your enquiry and will get back to you soon.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Send
              </Button>
            </Box>
          </Flex>


        {/* Chat Box Modal */}
        <Modal isOpen={isChatModalOpen} onClose={onChatModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Message Your Query To Owner</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea placeholder="Type your message here..." />
              <Button mt={3} colorScheme="blue" onClick={()=> { onChatModalClose();toast({
                    title: 'Message Sent To The Owner.',
                    // description: "We've created your account for you.",
                    status: 'success',
                    duration: 1000,
                    isClosable: false,
                  })}}>Send</Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
      <Footer />
    </>
  );
};

export default PropertyDetail;
