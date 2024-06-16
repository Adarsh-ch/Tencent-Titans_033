import {
  Box,
  SimpleGrid,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  Card,
  CardHeader
} from '@chakra-ui/react';
import { useTheme } from './Theme/ThemeContext';
import { memo, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faHouseFlag, faGauge, faCity, faLandmark, faMagnifyingGlassChart, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import './admin.css'
import { Topbar } from './Topbar';

const Dashboard = ({ properties, userProfiles }: any) => {
  const { theme } = useTheme();

  const totalUsers = useMemo(() => userProfiles?.length, [userProfiles]);
  const totalProperties = useMemo(() => properties?.length, [properties]);
  const totalRevenue = useMemo(() => properties.reduce((total: number, element: any) => total + element.rent, 0), [properties]);
  const totalSellProperty = useMemo(() => properties.filter((element: any) => element.property_type === 'Sell').length, [properties]);
  const totalBuyProperty = useMemo(() => properties.filter((element: any) => element.property_type === 'Buy').length, [properties]);

  const averageRent = useMemo(() => {
      const totalRent = properties.reduce((total: number, element: any) => total + element.rent, 0);
      return (totalRent / totalProperties).toFixed(2);
  }, [properties, totalProperties]);

  const mostExpensiveProperty = useMemo(() => {
      const maxRent = Math.max(...properties.map((property: any) => property.rent));
      return properties.find((property: any) => property.rent === maxRent);
  }, [properties]);
  

  const topCity = useMemo(() => {
      const cityCounts: { [key: string]: number } = {};
      properties.forEach((property: any) => {
          cityCounts[property.location] = (cityCounts[property.location] || 0) + 1;
      });
      const topCity = Object.keys(cityCounts).reduce((a, b) => cityCounts[a] > cityCounts[b] ? a : b, '');
      return { name: topCity, count: cityCounts[topCity] };
  }, [properties]);

  return (
        <>
        <Topbar />
      <Box bgColor={theme.colors.background} color={theme.colors.primary} p={5}>
          <VStack spacing={5} align="stretch">
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={7}>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faUser} /> <span className='card-title'>Total Users</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>{totalUsers}</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faBuilding} /> <span className='card-title'>Total Properties</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>{totalProperties}</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faMagnifyingGlassChart} /> <span className='card-title'>Total Revenue</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}><FontAwesomeIcon icon={faIndianRupeeSign}/> {totalRevenue}</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faHouseFlag} /> <span className='card-title'>Total Sell Property</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>{totalSellProperty}</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
                      <CardHeader>
                          <Stat>
                              <StatLabel><FontAwesomeIcon icon={faHouseFlag} /> <span className='card-title'>Total Buy Property</span></StatLabel>
                              <StatNumber color={theme.colors.secondary}>{totalBuyProperty}</StatNumber>
                          </Stat>
                      </CardHeader>
                  </Card>
                  <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
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
                  </Card>
              </SimpleGrid>
          </VStack>
      </Box>
      </>
  );
};

export default memo(Dashboard);
