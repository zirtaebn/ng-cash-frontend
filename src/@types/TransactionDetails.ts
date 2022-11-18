// utilities
import { Transaction } from './Transaction';

export type TransactionDetails = {

    userInfo: {

        username:string,
        accountId:number
    },

    secondUserInfo: {

        username:string,
        accountId:number
    },

    transaction: Transaction
}