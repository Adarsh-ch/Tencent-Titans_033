import { Box, ChakraProvider, Flex, Spinner } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import PropertyAnalytics from './PropertyAnalytics'
import { ThemeProvider } from './Theme/ThemeContext'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import UserProfiles from './UserProfiles'
import { SupportDisputes } from './SupportDisputes'

export const AdminPage = () => {
  const [properties, setProperties] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5001/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    const fetchUserProfiles = async () => {
      try {
        const response = await fetch('http://localhost:5001/userProfiles');
        const data = await response.json();
        setUserProfiles(data);
      } catch (error) {
        console.error('Error fetching user profiles:', error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchProperties(), fetchUserProfiles()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <ChakraProvider>
        <ThemeProvider>
          <Topbar />
          <Flex justifyContent="center" alignItems="center" height="100vh">
            <Spinner size="xl" />
          </Flex>
        </ThemeProvider>
      </ChakraProvider>
    );
  }

  return (
    <div style={{maxWidth:"1520px",margin:"auto",padding:"30px"}} >
    <ChakraProvider>
      <ThemeProvider>
        <Topbar />
        <Flex>
          <Box w="20%">
            <Sidebar />
          </Box>
          <Box w="80%">
            <Routes>
              <Route path="/" element={<Dashboard properties={properties} userProfiles={userProfiles} />} />
              <Route path="/property-analytics" element={<PropertyAnalytics properties={properties}/>} />
              <Route path="/user-profiles" element={<UserProfiles userProfiles={userProfiles} />} />
              <Route path="/support-disputes" element={<SupportDisputes />} />
            </Routes>
          </Box>
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
    </div>
  );
}
