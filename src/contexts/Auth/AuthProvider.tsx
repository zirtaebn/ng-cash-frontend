import { useEffect, useState } from 'react';

// utilities
import { AuthContext } from './AuthContext';
import { UserRequest } from '../../@types/UserRequest';
import { api, useApi } from '../../hooks/useApi';

export const AuthProvider = ({ children } : { children:JSX.Element }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const apiHook = useApi();

    useEffect(() => {

        const token = localStorage.getItem('token');        

        if (token) {

            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;  
            setAuthenticated(true);
        }
        
    }, []);

    const handleSignup = async ({ username, password } : UserRequest) => {        

        const data = await apiHook.signup({username, password});  

        return data;
    };

    const handleLogin = async ({ username, password } : UserRequest) => {

        const data = await apiHook.login({username, password});

        if(data.username && data.token) {

            localStorage.setItem('token', JSON.stringify(data.token));
            api.defaults.headers.Authorization = `Bearer ${data.token}`;
            setAuthenticated(true);
        }

        return data;
      
    };

    const handleLogout = () => {

        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = '';
    }



    return(

        <AuthContext.Provider value={{ authenticated, handleSignup, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}