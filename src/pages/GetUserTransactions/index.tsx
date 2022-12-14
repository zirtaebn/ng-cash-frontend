import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';


// utilities
import { useApi } from '../../hooks/useApi';
import { useFormatter } from '../../hooks/useFormatter';
import { TransactionsResponse } from '../../@types/TransactionsResponse';
import { Transaction } from '../../@types/Transaction';

// styles
import * as C from './styles';

const GetUserTransactions = () => {

    const api = useApi();
    const formatter = useFormatter();
    const { username } = useParams();
    const [ transactionResponse, setTransactionResponse] = useState<TransactionsResponse| null>(null);
    const [ transactions, setTransactions ] = useState<Transaction[] | null>(null);
    const navigate = useNavigate();
    
    useEffect(() => {

        const getUserTransactios = async () => {

           const response = await api.getTransactions(username as string);

           setTransactionResponse(response);
           setTransactions(response.userTransactions.reverse());
        }

        getUserTransactios();

        // eslint-disable-next-line
    }, []);

    const handleTransactionsClick = () => {
        

        setTransactions(transactionResponse?.userTransactions.reverse() as Transaction[]);
    };

    
    const handleCreditedTransactionsClick = () => {

        setTransactions(transactionResponse?.userCreditedTransactions.reverse() as Transaction[]);
    };

    const handleDebitedTransactionsClick = () => {

        setTransactions(transactionResponse?.userDebitedTransactions.reverse() as Transaction[]);
    };

    if(!transactionResponse){

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

    if(transactions?.length === 0) {

        navigate(`/${username}`)
    }

    return(

        <C.Container>
            <C.Header>
                <h1>Transfer??ncias</h1>
                <p>clique em uma transfer??ncia para mais informa????es</p>
            </C.Header>

            <C.Buttons>
                <button
                    onClick={handleTransactionsClick}

                >
                    transfer??ncias gerais
                </button>

                <button
                    onClick={handleCreditedTransactionsClick}
                >
                    transfer??ncias recebidas
                </button>
                    
                <button
                    onClick={handleDebitedTransactionsClick}
                >
                    transfer??ncias enviadas
                </button>
            </C.Buttons>

           <C.Transactions>
                {transactions?.map(transaction => (

                    <C.Transaction 
                        key={transaction.id}
                        onClick={() => navigate(`/${username}/transactions/${transaction.id}`)}
                    >
                        <span
                            style={{color: transactionResponse?.accountId === transaction.creditedAccountId ? 'green' : 'red'}}
                        > 
                            {formatter.priceFormat(transaction.value)} 
                        </span>
                        <span> {formatter.dateFormat(transaction.createdAt)} </span>
                    </C.Transaction>
                ))}
           </C.Transactions>
        </C.Container>

    )
}

export default GetUserTransactions;