import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { Portfolio } from '@/models/portfolio.interface';
import {  addPortfolio } from '../api';

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
}

export default getModule(PortfolioModule);