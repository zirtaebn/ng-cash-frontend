import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// components
import Button from '../../components/Button';

// utilities
import { useApi } from '../../hooks/useApi';
import { Account } from '../../@types/Account';
import { useFormatter } from '../../hooks/useFormatter';

// styles
import * as C from './styles';

const UserAccount = () => {

    const { username } = useParams();
    const [ account, setAccount ] = useState<Account | null>(null);
    const [ showBalance, setShowBalance ] = useState(false);
    const api = useApi();
    const formatter = useFormatter();

    useEffect(() => {

        const getUserAccount = async () => {

            const response = await api.getAccount(username as string);

            setAccount(response);
            
        }

        getUserAccount();

        // eslint-disable-next-line
    }, []);

    if(!account?.userAccount.balance) {

        return <p style={{color:'#fff'}}>loading...</p>
    }

    return(
        <C.Container>

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
                    text='tranferir'
                 />

                <Button 

                    redirect={`${username}/transactions`}
                    text='ver transações'
                />
            </C.Buttons>


        </C.Container>
    )
}

export default UserAccount


