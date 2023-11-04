import { useReducer } from 'react';
import { types } from '../../types/types';
import { AuthContext } from './AuthContext';
import { AuthAction, authReducer, AuthState, AuthStateUser } from './authReducer';

interface Props {
    children: JSX.Element
}

const init = (): AuthState => {

    // Obtenemos los datos del usuario del almacenamiento local del navegador
    const user: AuthStateUser = JSON.parse( localStorage.getItem('user')! );

    // Según si obtenemos datos o no, dejamos la sesión iniciada o no
    if( user === null ) {
        return { logged: false }
    } else {
        return { logged: true, user }
    }

}

export const AuthProvider = ({ children }: Props) => {
    
    // Inicializamos el reducer que controla la información del contexto del login
    const [ authState, authDispatch ] = useReducer( authReducer, {}, init );

    // Función del contexto que gestiona el inicio de sesión del usuario
    const login = ( name: string ): void => {

        // Preparamos los datos del usuario
        const user: AuthStateUser = {
            name
        }

        // Preparamos la accion
        const action: AuthAction = {
            type: types.login,
            payload: user
        }

        // Guardamos la sesión en el almacenamiento local del navegador
        localStorage.setItem( 'user', JSON.stringify(user) );

        // Realizamos el inicio de sesión
        authDispatch( action );

    }

    // Función del contexto que gestiona el cierre de sesión del usuario
    const logout = () => {

        // Eliminamos los datos del usuario del almacenamiento local del navegador
        localStorage.removeItem('user');

        // Preparamos la accion
        const action: AuthAction = {
            type: types.logout
        }

        // Realizamos el cierre de sesión
        authDispatch( action );

    }

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}