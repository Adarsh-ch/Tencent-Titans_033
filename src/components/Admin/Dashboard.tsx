import { Box } from '@chakra-ui/react';
import { useTheme } from './Theme/ThemeContext';

export const Dashboard = () => {
    const { theme} = useTheme();
    // const {totalUsers,setTotalUsers} = useState<any>([]);
    // const {totalProperties,setTotalProperties} = useState<any>([]);
    // const {totalRevenue,setTotalRevenue} = useState<any>([]);
    // const {totalSellProperty,setTotalSellProperty} = useState<any>([]);
    // const {totalBuyProperty,setTotalBuyProperty} = useState<any>([]);

  return (
    <Box bgColor={theme.colors.background} color={theme.colors.primary}>
        dashboad
    </Box>
  )
}
