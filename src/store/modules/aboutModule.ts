import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { IAboutUs } from '@/models/about.interface';
import { getAbout } from '../api';

@Module({
    namespaced: true,
    name: 'about',
    store,
    dynamic: true
})
class AboutModule extends VuexModule
{
    private response!: IAboutUs;

    @Mutation
    setAbout(authResponse: IAboutUs)
    {
        this.response = authResponse;
    }

    get aboutUs():  IAboutUs
    {
        return this.response;
    }

    @Action({ commit: 'setAbout' })
    async getAboutUs(): Promise<IAboutUs | null>
    {
        const value: IAboutUs | null = await getAbout();
         
        return value;
    }
}

export default getModule(AboutModule);