import { Grid, Card, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextValues } from '../context';

export const LoginPage = () => {
    
    const { login } = useContext<AuthContextValues>( AuthContext );
    const navigate: NavigateFunction = useNavigate();

    // Función que controla el inicio de sesión del botón
    const onLogin = () => {

        // Comprobamos si hubo un último enlace
        const lastPath: string = localStorage.getItem('lasthPath') || '/';

        // Funciones para iniciar sesión
        login('Aitor Subarroca');
        
        // Redireccionamos a la pantalla principal
        navigate(lastPath, { replace: true });

    }

    return (
        <Grid container justifyContent='center' alignItems='center' mt={15} style={{ backgroundColor: '#e8eaf6' }}>
            <Grid item xs={4}>
                <Card sx={{ p: 4 }}>
                    <Typography variant='h6' sx={{ mb: 3 }}>Iniciar sesión</Typography>
                    <Button variant='contained' color='primary' onClick={ onLogin }>Iniciar sesión</Button>
                </Card>
            </Grid>
        </Grid>
    )
}