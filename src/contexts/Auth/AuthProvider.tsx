import { useEffect } from 'react';

// utilities
import { AuthContext } from './AuthContext';
import { UserRequest } from '../../@types/UserRequest';
import { api, useApi } from '../../hooks/useApi';

export const AuthProvider = ({ children } : { children:JSX.Element }) => {

    const apiHook = useApi();

    useEffect(() => {

        const token = localStorage.getItem('token');        

        if (token) {

            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;  
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
        }

        return data;
      
    };

    const handleLogout = () => {

        localStorage.removeItem('token');
        api.defaults.headers.Authorization = '';
    }



    return(

        <AuthContext.Provider value={{ handleSignup, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}