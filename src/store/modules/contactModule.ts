import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { IAboutUs } from '@/models/about.interface';
import { getAbout, addContact } from '../api';
import { IUserContact } from '@/models/user.contact.interface';
import { IApiResult } from '@/models/api.result';

@Module({
    namespaced: true,
    name: 'contact',
    store,
    dynamic: true
})
class ContactModule extends VuexModule
{
    private response!: IApiResult;

    @Mutation
    setResult(authResponse: IApiResult)
    {
        this.response = authResponse;
    }

    get aboutUs():  IApiResult
    {
        return this.response;
    }

    @Action({ commit: 'setResult' })
    async post(data: IUserContact): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await addContact(data);
         
        return value;
    }
}

export default getModule(ContactModule);