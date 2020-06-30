import { Module, VuexModule, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store'; 
import { getProfile, updateProfile } from '../api';
import { ICustomer, Customer } from '@/models/user.customer';

@Module({
    namespaced: true,
    name: 'profile',
    store,
    dynamic: true
})
class CustomerModule extends VuexModule
{
    private model!: ICustomer; 

    @Mutation
    setCustomer(data: ICustomer)
    {
        this.model = data;
    }

    get customer():  ICustomer
    {
        return this.model;
    }

    @Action({ commit: 'setCustomer' })
    async getCustomer(userId: number): Promise<ICustomer | null>
    {
        const value: ICustomer | null = await getProfile(userId);
         
        return value;
    }

    @Action({ commit: 'setCustomer' })
    async updateCustomer(model: Customer): Promise<ICustomer | null>
    {
        const value: ICustomer | null = await updateProfile(model);
         
        return value;
    }

}

export default getModule(CustomerModule);