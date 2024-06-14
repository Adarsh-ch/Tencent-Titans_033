import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { Routes,Route } from 'react-router-dom'
import  { Dashboard }  from './Dashboard'
import { PropertyAnalytics } from './PropertyAnalytics'
import { ThemeProvider } from './Theme/ThemeContext'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import { UserProfiles } from './UserProfiles'
import { SupportDisputes } from './SupportDisputes'

const Admin = () => {
  return (
    <ChakraProvider>
      <ThemeProvider>
          <Topbar/>
          <Flex>
            <Box w="20%">
              <Sidebar/>
            </Box>

            <Box w="80%">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/property-analytics" element={<PropertyAnalytics />} />
              <Route path="/user-profiles" element={<UserProfiles />} />
              <Route path="/support-disputes" element={<SupportDisputes />} />
            </Routes>
            </Box>
          </Flex>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default Admin;
