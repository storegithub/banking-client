import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { IAuthResponse } from '@/models/auth.response';
import { AuthRequest } from '@/models/auth.request';
import { login, authapi, register, checkCustomer, sendRegisterCode } from '../api';
import { AppConstants } from '@/App.Constants';
import { IRegisterUser } from '@/models/regiter.user';
import { IApiResult } from '@/models/api.result';
import { ICheckCustomer } from '@/models/check.customer'; 

@Module({
    namespaced: true,
    name: 'auth',
    store,
    dynamic: true
})
class AuthModule extends VuexModule
{
    public response!: IAuthResponse;

    @Mutation
    setAuth(authResponse: IAuthResponse)
    {
        debugger;
        this.response = authResponse;
        if(authResponse.success == true)
        {
            localStorage.setItem(AppConstants.auth_token, authResponse.token);
            localStorage.setItem(AppConstants.session_user, JSON.stringify({ firstName: authResponse.firstName, lastName: authResponse.lastName, id: authResponse.id }));
        }
    }

    get authenticated():  IAuthResponse
    {
        return this.response;
    }

    get userId():  number
    {
        const lsJson: string | null = localStorage.getItem(AppConstants.session_user);
        if(lsJson == null)
            return -1;
        const obj = JSON.parse(lsJson);
        return Number(obj.id);
    }


    @Action({ commit: 'setAuth' })
    async login(request: AuthRequest): Promise<IAuthResponse | null>
    {
        debugger;
        const value: IAuthResponse | null = await login(request); 
         
        return value;
    }

    @Action
    async register(request: IRegisterUser): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await register(request); 
         
        return value;
    } 
}

export default getModule(AuthModule);