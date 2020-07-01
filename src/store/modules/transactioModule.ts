import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store'; 
import { getAbout, addTransaction, getAccountTransactions, newTransaction } from '../api';
import { BankAccountTransaction } from '@/models/bankaccount.transaction';
import { IApiResult } from '@/models/api.result';

@Module({
    namespaced: true,
    name: 'transaction',
    store,
    dynamic: true
})
class TransactionModule extends VuexModule
{

    @Action
    async addTransaction(transaction: BankAccountTransaction): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await addTransaction(transaction);
         
        return value;
    }

    @Action
    async getAccountTransactions(accountId: number): Promise<BankAccountTransaction[] >
    {
        const value: BankAccountTransaction[] = await getAccountTransactions(accountId);
         
        return value;
    }

    @Action
    async newTransaction(accountId: number): Promise<BankAccountTransaction | null>
    { 

        const value: BankAccountTransaction | null = await newTransaction(accountId);
         
        return value;
    }
}

export default getModule(TransactionModule);