import axios from 'axios';

// utilities
import { UserRequest } from '../@types/UserRequest';
import { Account } from '../@types/Account';
import { TransactionsResponse } from '../@types/TransactionsResponse';
import { TransactionDetails } from '../@types/TransactionDetails';

export const api = axios.create({

    baseURL: process.env.REACT_APP_BASE_API_URL, 
    headers: {

        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

export const useApi = () => ({

    signup: async ({ username, password } : UserRequest) => {   

        const { data } = await api.post('/signup', { username, password });

        return data;

    },

    login: async ({ username, password } : UserRequest) => {

        const { data } = await api.post('/login', { username, password });

        return data;
    },

    getAccount: async ( username:string ) : Promise<Account> => {

        const { data } = await api.get(`/${username}`);

        return data;
    },

    getTransactions: async ( username:string ) : Promise<TransactionsResponse> => {

        const { data } = await api.get(`/${username}/transactions`);

        return data;
    },

    getOneTransaction: async ( username:string, id:string ) : Promise<TransactionDetails> => {

        const { data } = await api.get(`/${username}/transactions/${id}`);

        return data;
    }, 

    transaction: async (username:string) => {

        const { data } = await api.get(`${username}/transaction`);

        return data;
    },

    makeTransaction: async ( usernameCashOut: string, username:string, value: number) => {

        const { data } = await api.post(`${usernameCashOut}/transaction`, { username, value });

        return data;

    }

});