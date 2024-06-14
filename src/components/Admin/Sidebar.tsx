import { Box, Text, VStack,} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useTheme } from './Theme/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBuilding, faUser, faHeadset } from '@fortawesome/free-solid-svg-icons'

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
    <Box p={4} bg={theme.colors.background} color={theme.colors.primary} height="100%" textAlign="center">
      <Text fontSize="2xl" mb={4}>Hello, Admin</Text>
      <VStack align="stretch" spacing={2}>
        <NavLink 
          to='/admin' 
          style={styles.link}
        >
        <FontAwesomeIcon icon={faHouse} />  Dashboard
        </NavLink>
        <NavLink 
          to='/admin/property-analytics' 
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
        <FontAwesomeIcon icon={faBuilding} /> Property Analytics
        </NavLink>
        <NavLink 
          to='/admin/user-profiles' 
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
        <FontAwesomeIcon icon={faUser} />  Users Profile
        </NavLink>
        <NavLink 
          to='/admin/support-disputes' 
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
        <FontAwesomeIcon icon={faHeadset} />  Support & Dispute
        </NavLink>
      </VStack>
    </Box>
  )
}
