// utilities
import { Transaction } from './Transaction';

export type TransactionsResponse = {

    username:string,
    accountId: number;
    userTransactions:Transaction[],
    userDebitedTransactions:Transaction[],
    userCreditedTransactions:Transaction[]
}