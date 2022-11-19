import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';

// components 
import SubmitForm from '../../components/SubmitForm';

// utilities
import { UserRequest } from '../../@types/UserRequest';
import { useApi } from '../../hooks/useApi';

// styles
import * as C from './styles';

const MakeTransaction = () => {

    const [ errorMessage, setErrorMessage ] = useState('');
    const [ successMessage, setSuccessMessage ] = useState('');
    const navigate = useNavigate();
    const param = useParams();
    const api = useApi();

    useEffect(() => {

        const transaction = async () => {

            await api.transaction(param.username as string);
        }

        transaction();

        // eslint-disable-next-line
    }, []);



    const handleTransferClick:SubmitHandler<UserRequest> = async ({ username, value }) => {

        const response = await api.makeTransaction(param.username as string, username, value as number);
        
        if(response.error) return setErrorMessage(response.error);

        if(response.status) {

            setSuccessMessage(response.status);

            setTimeout(() => {

                navigate(`/${param.username}`);
                
            }, 1500);
        } 
    }

    return(

        <C.Container>
            <C.Header>
                <h1>Fazer transferência</h1>
            </C.Header>
            
            <SubmitForm 
                handleSubmitClick={handleTransferClick}
                errorMessage={errorMessage}
                successMessage={successMessage}
                submitButtonText='Transferir'

            />

        </C.Container>

    )
}
export default MakeTransaction;