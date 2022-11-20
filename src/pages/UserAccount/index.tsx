import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';

// components
import Button from '../../components/Button';

// utilities
import { useApi } from '../../hooks/useApi';
import { Account } from '../../@types/Account';
import { useFormatter } from '../../hooks/useFormatter';
import { AuthContext } from '../../contexts/Auth/AuthContext';

// styles
import * as C from './styles';

const UserAccount = () => {

    const [ account, setAccount ] = useState<Account | null>(null);
    const [ showBalance, setShowBalance ] = useState(false);
    const { handleLogout } = useContext(AuthContext);
    const api = useApi();
    const formatter = useFormatter();
    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const getUserAccount = async () => {

            const response = await api.getAccount(username as string);

            setAccount(response);
            
        }

        getUserAccount();

        // eslint-disable-next-line
    }, []);

    const handleLogOutClick = async () => {

        handleLogout();
        navigate('/');                        
    }

    if(!account) {

        return (

            <ClipLoader 
                color='#fff'
            />
        )
    }

    return(
        <C.Container>

            <C.Logout>
                <button
                    onClick={handleLogOutClick}
                >
                    logout
                </button>
            </C.Logout>


            <h1>@{username}</h1>
            <C.Balance>
                { showBalance && 
                    <C.BalanceDetails>{formatter.priceFormat(account?.userAccount.balance as number)}</C.BalanceDetails>
                }

                { !showBalance && <span></span>}
                
                <div onClick={() => setShowBalance(prevState => !prevState)}>

                    { !showBalance && 
                        <AiOutlineEyeInvisible 
                            size={20}
                        />
                    }

                    { showBalance && 
                        <AiOutlineEye 
                            size={20}
                        />
                    }

                </div>
            </C.Balance>

            <C.Buttons>
                <Button 

                    redirect={`${username}/transaction`}
                    text='transferir'
                 />

                <Button 

                    redirect={`${username}/transactions`}
                    text='ver transferências'
                />
            </C.Buttons>


        </C.Container>
    )
}

export default UserAccount


