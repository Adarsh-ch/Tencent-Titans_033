import {Flex,Text} from '@chakra-ui/react'
import { useTheme } from './Theme/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear, faInfoCircle, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion';

export const Topbar = () => {
    const { theme, toggleTheme, themeMode } = useTheme();

  return (
    <Flex justifyContent="space-between" bgColor={theme.colors.background}>
        <Text color={theme.colors.primary}>Estate</Text>
        <Text color={theme.colors.primary}>Admin</Text>
        <Flex width={150} justifyContent="space-evenly" gap={5}>
            {
                themeMode === 'light' 
                ? 
                <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} /> 
                : 
                <FontAwesomeIcon icon={faSun} onClick={toggleTheme} />
            }
            <FontAwesomeIcon icon={faInfoCircle} />
            <FontAwesomeIcon icon={faBell}/>
            <FontAwesomeIcon icon={faCircleQuestion}/>
            <FontAwesomeIcon icon={faGear} />
        </Flex>
    </Flex>
  )
}
