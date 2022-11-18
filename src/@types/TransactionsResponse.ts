// utilities
import { Transaction } from './Transaction';

export type TransactionsResponse = {

    username:string,
    userTransactions:Transaction[],
    userDebitedTransactions:Transaction[],
    userCreditedTransactions:Transaction[]
}