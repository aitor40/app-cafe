import { types } from '../../types/types';

export interface AuthAction {
    type: string,
    payload?: any
}

export interface AuthState {
    logged: boolean
    user?: AuthStateUser
}

export interface AuthStateUser {
    name: string
}

// Creamos un reducer para definir las acciones del dispatch del Login
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch( action.type ) {

        case types.login:
            return {
                logged: true,
                user: action.payload
            };
            break;

        case types.logout:
            return {
                logged: false
            };
            break;

        default:
            return state;
            break;

    }

}