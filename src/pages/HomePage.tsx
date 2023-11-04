import { useContext } from 'react';
import { AuthContext, AuthContextValues } from '../context';
import { peticionBase } from '../api';

export const HomePage = () => {
    
    const { user } = useContext<AuthContextValues>( AuthContext );

    return (
        <>
            <h1>HomePage</h1>
            <hr />
            <p>{ user?.name }</p>
        </>
    )
}