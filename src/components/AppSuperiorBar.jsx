import { AppBar, Box, Button, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const AppSuperiorBar = ({ drawerWidth }) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                color='primary'
                position='fixed'
                sx={{
                    width: { sm: `calc(100% - ${ drawerWidth }px)` },
                    ml: { sm: `${ drawerWidth }px` },
                  }}
            >
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        //onClick={ handleDrawerToggle }
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Página principal
                    </Typography>
                    <Button variant='outlined' color='inherit' >Cerrar sesión</Button> {/* onClick={ onLogout } */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
