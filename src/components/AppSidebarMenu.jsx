import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';


export const AppSidebarMenu = ( props ) => {

    // Obtenemos los parámetros de las propiedades
    const { drawerWidth, mobileOpen, handleDrawerToggle, window } = props;

    // Declaramos los hooks necesarios
    //const { user } = useContext<AuthContextValues>( AuthContext );

    // Preparamos la referencia del contenedor para el menu
    const container = window !== undefined ? () => window().document.body : undefined;

    // Contenido del menú
    const drawer = (
        <>
            <Toolbar>
                <Typography component="div" sx={{ textTransform: 'uppercase' }}>
                    Usuario
                    {/* { user?.name } */}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {/* {sidebarData.map((data, index) => (
                    <NavLink to={ data.link } className='link' style={{ textDecoration: 'none', color: '#000000' }}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <data.icon />
                                </ListItemIcon>
                                    <ListItemText primary={ data.label } />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))} */}
            </List>
        </>
    );

    return (
        <>
            <Box
                component='nav'
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 }
                }}
            >
                {/* Menu para teléfonos */}
                {/* <Drawer
                    container={ container }
                    variant='temporary'
                    open={ mobileOpen }
                    onClose={ handleDrawerToggle }
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    { drawer }
                </Drawer> */}

                {/* Menu para ordenadores */}
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    { drawer }
                </Drawer>
            </Box>
        </>
    )
}