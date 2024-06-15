import {
    Box,
    SimpleGrid,
    VStack,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    Card,
    CardHeader,
    CardBody,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure
  } from '@chakra-ui/react';
  import { useTheme } from './Theme/ThemeContext';
  import { memo, useMemo, useCallback, useState } from 'react';
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
  } from 'recharts';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBuilding, faHouseFlag, faPieChart, faBarChart } from '@fortawesome/free-solid-svg-icons';
  import './admin.css';
  
  const PropertyAnalytics = ({ properties }: any) => {
    const { theme } = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(null);
  
    const totalProperties = useMemo(() => properties?.length, [properties]);
    const totalSellProperty = useMemo(() => properties.filter((element: any) => element.property_type === 'Sell').length, [properties]);
    const totalBuyProperty = useMemo(() => properties.filter((element: any) => element.property_type === 'Buy').length, [properties]);
  
    const propertyTypeData = useMemo(() => [
        { name: 'Sell', value: totalSellProperty },
        { name: 'Buy', value: totalBuyProperty }
    ], [totalSellProperty, totalBuyProperty]);
  
    const cityData = useMemo(() => {
        const cityCounts: { [key: string]: number } = {};
        properties.forEach((property: any) => {
            cityCounts[property.location] = (cityCounts[property.location] || 0) + 1;
        });
        return Object.keys(cityCounts).map(city => ({
            name: city,
            value: cityCounts[city]
        }));
    }, [properties]);
  
    const furnitureTypeData = useMemo(() => {
        const furnitureCounts: { [key: string]: number } = {};
        properties.forEach((property: any) => {
            furnitureCounts[property.furniture_type] = (furnitureCounts[property.furniture_type] || 0) + 1;
        });
        return Object.keys(furnitureCounts).map(type => ({
            name: type,
            value: furnitureCounts[type]
        }));
    }, [properties]);
  
    const flatTypeData = useMemo(() => {
        const flatTypeCounts: { [key: string]: number } = {};
        properties.forEach((property: any) => {
            flatTypeCounts[property.flat_type] = (flatTypeCounts[property.flat_type] || 0) + 1;
        });
        return Object.keys(flatTypeCounts).map(type => ({
            name: type,
            value: flatTypeCounts[type]
        }));
    }, [properties]);
  
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#3336AA', '#36AA88', '#AA8836'];
  
    const renderLabel = useCallback(({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`, []);
  
    const openLargeChart = (chart: JSX.Element) => {
      setSelectedChart(chart);
      onOpen();
    };
  
    return (
        <Box bgColor={theme.colors.background} color={theme.colors.primary} p={5}>
            <VStack spacing={5} align="stretch">
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={7}>
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Stat>
                                <StatLabel><FontAwesomeIcon icon={faBuilding} /><span className='card-title'>Total Properties</span></StatLabel>
                                <StatNumber color={theme.colors.secondary}>{totalProperties}</StatNumber>
                            </Stat>
                        </CardHeader>
                    </Card>
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Stat>
                                <StatLabel><FontAwesomeIcon icon={faHouseFlag} /><span className='card-title'>Total Sell Property</span></StatLabel>
                                <StatNumber color={theme.colors.secondary}>{totalSellProperty}</StatNumber>
                            </Stat>
                        </CardHeader>
                    </Card>
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Stat>
                                <StatLabel><FontAwesomeIcon icon={faHouseFlag} /><span className='card-title'>Total Buy Property</span></StatLabel>
                                <StatNumber color={theme.colors.secondary}>{totalBuyProperty}</StatNumber>
                            </Stat>
                        </CardHeader>
                    </Card>
                </SimpleGrid>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Text fontSize="xl" fontWeight="bold"><FontAwesomeIcon icon={faPieChart}/> Property Type Distribution</Text>
                        </CardHeader>
                        <CardBody>
                            <Box height={250} width={500}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={propertyTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={renderLabel}>
                                            {propertyTypeData.map((_entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                            <Box textAlign="center">
                            <Button textAlign="center" mt={4} onClick={() => openLargeChart(
                              <PieChart>
                                  <Pie data={propertyTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label={renderLabel}>
                                      {propertyTypeData.map((_entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                      ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend />
                              </PieChart>
                            )}>View Large</Button>
                            </Box>
                        </CardBody>
                    </Card>
  
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Text fontSize="xl" fontWeight="bold"><FontAwesomeIcon icon={faBarChart}/> Revenue by Property Type</Text>
                        </CardHeader>
                        <CardBody>
                            <Box height={250} width={500}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={properties}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="title" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="rent" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>
                            <Box textAlign="center">
                                <Button mt={4} onClick={() => openLargeChart(
                                <BarChart data={properties}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="title" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="rent" fill="#8884d8" />
                                </BarChart>
                                )}>View Large</Button>
                            </Box>
                        </CardBody>
                    </Card>
  
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Text fontSize="xl" fontWeight="bold"><FontAwesomeIcon icon={faPieChart}/> Properties by City</Text>
                        </CardHeader>
                        <CardBody>
                            <Box height={250} width={500}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={cityData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={renderLabel}>
                                            {cityData.map((_entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                            <Box textAlign="center">
                            <Button mt={4} onClick={() => openLargeChart(
                              <PieChart>
                                  <Pie data={cityData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label={renderLabel}>
                                      {cityData.map((_entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                      ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend />
                              </PieChart>
                            )}>View Large</Button>
                            </Box>
                        </CardBody>
                    </Card>
  
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Text fontSize="xl" fontWeight="bold"><FontAwesomeIcon icon={faPieChart}/> Properties by Furniture Type</Text>
                        </CardHeader>
                        <CardBody>
                            <Box height={250} width={500}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={furnitureTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={renderLabel}>
                                            {furnitureTypeData.map((_entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                            <Box textAlign="center">
                            <Button mt={4} onClick={() => openLargeChart(
                              <PieChart>
                                  <Pie data={furnitureTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label={renderLabel}>
                                      {furnitureTypeData.map((_entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                      ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend />
                              </PieChart>
                            )}>View Large</Button>
                            </Box>
                        </CardBody>
                    </Card>
  
                    <Card className='custom-card' color={theme.colors.primary} bg={theme.colors.background}>
                        <CardHeader>
                            <Text fontSize="xl" fontWeight="bold"><FontAwesomeIcon icon={faPieChart}/> Properties by Flat Type</Text>
                        </CardHeader>
                        <CardBody>
                            <Box height={250} width={500}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={flatTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={renderLabel}>
                                            {flatTypeData.map((_entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                            <Box textAlign="center">
                            <Button mt={4} onClick={() => openLargeChart(
                               <PieChart>
                                   <Pie data={flatTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={renderLabel}>
                                       {flatTypeData.map((_entry, index) => (
                                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                       ))}
                                   </Pie>
                                   <Tooltip />
                                   <Legend />
                               </PieChart>
                            )}>View Large</Button>
                            </Box>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </VStack>
  
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Chart Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    { selectedChart 
                        ? 
                            (<ResponsiveContainer width="100%" height={480}>
                                {selectedChart}
                            </ResponsiveContainer>)
                        : null
                    }

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
  };
  
  export default memo(PropertyAnalytics);
  