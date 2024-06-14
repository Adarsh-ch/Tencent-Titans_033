import { Box,Flex,Text} from '@chakra-ui/react'
import { MoonIcon,SettingsIcon,SunIcon } from '@chakra-ui/icons'
import { useTheme } from './Theme/ThemeContext'

export const Topbar = () => {
    const { theme, toggleTheme, themeMode } = useTheme();

  return (
    <Flex justifyContent="space-around" bgColor={theme.colors.background}>
        <Text color={theme.colors.primary}>Estate</Text>
        <Text color={theme.colors.primary}>Admin</Text>
        <Box>
            {
                themeMode === 'light' 
                ? 
                <MoonIcon boxSize={6} onClick={toggleTheme} /> 
                : 
                <SunIcon boxSize={6} onClick={toggleTheme} />
            }
            <SettingsIcon mx={20} boxSize={6}/>
        </Box>
    </Flex>
  )
}
