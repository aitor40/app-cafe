import { createContext } from 'react';

export interface AuthContextValues {
    logged: boolean
    login: (name: string) => void
    logout: () => void
    user?: {
        name: string
    }
}

export const AuthContext: any = createContext({});