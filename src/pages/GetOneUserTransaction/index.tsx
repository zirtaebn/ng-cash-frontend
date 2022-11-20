import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TbTransferOut, TbTransferIn } from 'react-icons/tb';
import ClipLoader from 'react-spinners/ClipLoader';

// utilities
import { useApi } from '../../hooks/useApi';
import { TransactionDetails } from '../../@types/TransactionDetails';
import { useFormatter } from '../../hooks/useFormatter';


// styles
import * as C from './styles';

const GetOneUserTransaction = () => {

    const { username, id } = useParams();
    const [ transactionDetails, setTransactionDetails ] = useState<TransactionDetails | null>(null); 
    const formatter = useFormatter();   
  
    const api = useApi();

    useEffect(() => {

        const getOneTransaction = async () => {

            const response = await api.getOneTransaction(username as string, id as string);

            setTransactionDetails(response);
            
        }

        getOneTransaction();

        // eslint-disable-next-line
    }, []);

    if(!transactionDetails) {

        return (
            
            <C.Container
                style={{justifyContent: 'center'}} 
            >
                <ClipLoader 
                    color='#000'
                />
            </C.Container>
        ) 
    }

    return(
        <C.Container>
            <C.Header>

                { transactionDetails?.userInfo.accountId === transactionDetails?.transaction.debitedAccountId &&
                    <>
                        <TbTransferOut 
                            size={40}
                            color='red'
                        />

                        <h1>
                            Tranferência enviada
                        </h1>
        
                    </>
                }

                
                { transactionDetails?.userInfo.accountId !== transactionDetails?.transaction.debitedAccountId &&
                    <>
                        <TbTransferIn 
                            size={40}
                            color='green'
                        />
                        <h1>
                            Tranferência recebida
                        </h1>
                    </>
                }
                
            </C.Header>  
            <C.Username>@{transactionDetails?.secondUserInfo.username}</C.Username>
            <C.Value
                style={{color: transactionDetails?.userInfo?.accountId === transactionDetails?.transaction.creditedAccountId ? 'green' : 'red'}}
            >
                {formatter.priceFormat(transactionDetails?.transaction.value as number)}
            </C.Value>
            <C.Date>
                {formatter.dateFormat(transactionDetails.transaction.createdAt)}
            </C.Date>
        </C.Container>
    )
}

export default GetOneUserTransaction;