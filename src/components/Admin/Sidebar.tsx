import { Box, Text, VStack,} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useTheme } from './Theme/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBuilding, faUser, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/react';

export const Sidebar = () => {4
    const {theme} = useTheme();

    const styles = {
        link: {
          textDecoration: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          color:theme.colors.primary,
          backgroundColor: theme.colors.background,
        },
        activeLink: {
          color:theme.colors.secondary,
          backgroundColor:theme.colors.background,
        },
      };

  return (
    <Box p={4} bg={theme.colors.background} color={theme.colors.primary} height="100%" textAlign="center" position="fixed">
      <Box as="div" bg="#9DC183" style={{borderRadius:"5px"}}>
        <Text fontSize="2xl" p={10} mb={4}>Hello, Admin</Text>
      </Box>
      <VStack align="stretch" spacing={2}>
        <NavLink 
          to='/admin' 
          style={styles.link}
        >
         <Button colorScheme='teal' size='md' width="100%" style={{
          display: 'flex',
          justifyContent: 'center',
          gap:'10px',
          alignItems: 'center',
         }}><FontAwesomeIcon icon={faHouse} /> Dashboard</Button>
        </NavLink>
        <NavLink 
          to='/admin/property-analytics' 
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          <Button colorScheme='teal' size='md' width="100%" style={{
          display: 'flex',
          justifyContent: 'center',
          gap:'10px',
          alignItems: 'center',
         }}><FontAwesomeIcon icon={faBuilding} /> Property Analytics</Button>
        </NavLink>
        <NavLink 
          to='/admin/user-profiles' 
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          <Button colorScheme='teal' size='md' width="100%" style={{
          display: 'flex',
          justifyContent: 'center',
          gap:'10px',
          alignItems: 'center',
         }}><FontAwesomeIcon icon={faUser} />  Users Profile</Button>
        </NavLink>
        <NavLink 
          to='/admin/support-disputes' 
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          <Button colorScheme='teal' size='md' width="100%" style={{
          display: 'flex',
          justifyContent: 'center',
          gap:'10px',
          alignItems: 'center',
         }}><FontAwesomeIcon icon={faHeadset} />  Support & Dispute</Button>
        </NavLink>
      </VStack>
    </Box>
  )
}
