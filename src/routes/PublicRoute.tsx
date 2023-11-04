import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext, AuthContextValues } from '../context';

interface Props {
    children: JSX.Element
}

export const PublicRoute = ({ children }: Props) => {

    // Comprobamos si el usuario está autenticado
    const { logged } = useContext<AuthContextValues>( AuthContext );

    // Si lo está, devolvemos las rutas privadas; en caso contrario, redirigimos a la pagina login
    return (!logged)
        ? children
        : <Navigate to='/home' />

}