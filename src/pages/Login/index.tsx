import { SubmitHandler } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import SubmitForm from '../../components/SubmitForm';

// utilities
import { UserRequest } from '../../@types/UserRequest';
import { AuthContext } from '../../contexts/Auth/AuthContext';

// styles
import * as C from './styles';

const Login = () => {

    const [ errorMessage, setErrorMessage ] = useState('');
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginClick: SubmitHandler<UserRequest> = async ({ username, password }) => {

        const response = await handleLogin({ username, password });
        
        if(response.error) return setErrorMessage(response.error);
        
        navigate(`/${response.username}`);            
    }   

    return(

        <C.Container>
            <C.Header>
                <h1>Login</h1>
            </C.Header>
            
            <SubmitForm
                handleSubmitClick={handleLoginClick}
                errorMessage={errorMessage}
                submitButtonText='Entrar'
                password
            />
        </C.Container>
    )
}

export default Login;


