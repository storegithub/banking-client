import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { Portfolio } from '@/models/portfolio.interface';
import {  addPortfolio, createNewAccount, saveNewAccount } from '../api';
import { BankAccountItem } from '@/models/bank.account.item';

@Module({
    namespaced: true,
    name: 'portfolio',
    store,
    dynamic: true
})
class PortfolioModule extends VuexModule
{
    private response!: Portfolio;
    

    @Mutation
    setResult(authResponse: Portfolio)
    {
        this.response = authResponse;
    }

    get portfolio():  Portfolio
    {
        return this.response;
    }

    @Action({ commit: 'setResult' })
    async getPortfolio(userId: number): Promise<Portfolio | null>
    {
        const value: Portfolio | null = await addPortfolio(userId);
         
        return value;
    }

    @Action
    async createAccount(): Promise<BankAccountItem | null>
    {
        const value: BankAccountItem | null = await createNewAccount();
         
        return value;
    }

    @Action
    async post(data: BankAccountItem): Promise<BankAccountItem | null>
    {
        const value: BankAccountItem | null = await saveNewAccount(data);
         
        return value;
    }
}

export default getModule(PortfolioModule);