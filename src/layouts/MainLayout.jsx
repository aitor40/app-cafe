import { Box, Toolbar } from '@mui/material';
import { AppSidebarMenu, AppSuperiorBar } from '../components';

export const MainLayout = ({ children }) => {

    // Preparamos variables estáticas
    const drawerWidth = 300;

    return (
        <>
            <AppSuperiorBar drawerWidth={ drawerWidth } />
            <AppSidebarMenu drawerWidth={ drawerWidth } />
            <Box sx={{
                width: { sm: 'calc( 100% - '+drawerWidth+'px)' },
                marginLeft: { sm: drawerWidth+'px' },
                padding: '0 25px'
            }}>
                <Toolbar />
                { children }
            </Box>
        </>
    )
}
