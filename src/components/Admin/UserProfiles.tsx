import {
    Box,
    SimpleGrid,
    VStack,
    Stat,
    StatLabel,
    StatNumber,
    Card,
    CardHeader,
  } from '@chakra-ui/react';
  import { useTheme } from './Theme/ThemeContext';
  import { memo, useMemo } from 'react';
  import './admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
 
  
  const UserProfiles = ({ userProfiles }: any) => {
    const { theme } = useTheme();
  
    const totalUsers = useMemo(() => userProfiles.length, [userProfiles]);
 
    return (
      <Box bgColor={theme.colors.background} color={theme.colors.primary} p={5}>
        <VStack spacing={5} align="stretch">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <Card className='custom-card' color={theme.colors.primary}  bg={theme.colors.background}>
              <CardHeader>
                <Stat>
                    <StatLabel><FontAwesomeIcon icon={faUser} /><span className='card-title'>Total Users</span></StatLabel>
                    <StatNumber color={theme.colors.secondary}>{totalUsers}</StatNumber>
                </Stat>
              </CardHeader>
            </Card>
          </SimpleGrid>
          </VStack>
      </Box>
    );
  };
  
  export default memo(UserProfiles);
  
  