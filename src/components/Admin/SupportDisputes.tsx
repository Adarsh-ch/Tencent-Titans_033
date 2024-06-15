import { Topbar } from './Topbar'
import { Box, SimpleGrid, Stat, StatLabel, StatNumber, VStack ,Card,CardHeader} from '@chakra-ui/react'
import { useTheme } from './Theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faComment, faEnvelope, faHandshakeSlash, faMessage } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

export const SupportDisputes = () => {
  const { theme } = useTheme();

  return (
    <>
        <Topbar />
      <Box bgColor={theme.colors.background} color={theme.colors.primary} p={5}>
          <VStack spacing={5} align="stretch">
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={7}>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faEnvelope} /> <span className='card-title'>Emails</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>10</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faMessage} /> <span className='card-title'>Messages</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>150</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faHandshakeSlash} /> <span className='card-title'>Disputes Raised</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>16</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faBug} /> <span className='card-title'>Reports</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>5</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faComment} /> <span className='card-title'>Feedbacks</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>2</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  {/* <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faGauge} /> <span className='card-title'>Average Rent</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}><FontAwesomeIcon icon={faIndianRupeeSign} /> {averageRent}</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faCity} /> <span className='card-title'>Top City by Property Count</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>{topCity.name} ({topCity.count})</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faLandmark} /> <span className='card-title'>Most Expensive Property</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>{mostExpensiveProperty?.title} ( <FontAwesomeIcon icon={faIndianRupeeSign} /> {mostExpensiveProperty?.rent})</StatNumber>
                          </Stat>
                      </CardHeader> 
                  </Card>*/}
              </SimpleGrid>
          </VStack>
      </Box>
      </>
  )
}

export default memo(SupportDisputes);