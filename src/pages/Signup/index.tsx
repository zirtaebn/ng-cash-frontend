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

const Signup = () => {

    const [ errorMessage, setErrorMessage ] = useState('');
    const { handleSignup } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignupClick: SubmitHandler<UserRequest> = async ({ username, password }) => {

        const response = await handleSignup({ username, password });
        
        if(response.error) return setErrorMessage(response.error)
        
        navigate('/login');
        
    }   

    return(

        <C.Container>

            <C.Header>
                <h1>Signup</h1>
            </C.Header>

            <SubmitForm
                handleSubmitClick={handleSignupClick}
                errorMessage={errorMessage}
                submitButtonText='Criar conta'
                password
            />
        </C.Container>
    )
}

export default Signup;