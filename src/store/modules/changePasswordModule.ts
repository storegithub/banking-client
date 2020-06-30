import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store'; 
import { IApiResult } from '@/models/api.result';
import { ICheckCustomer } from '@/models/check.customer'; 
import { checkUser, changePassword, sendResetPasswordCode } from '../api';
import { ICodeValidate } from '@/models/caode.validate';
import { IChangePassword } from '@/models/changePassword.model';

@Module({
    namespaced: true,
    name: 'codeValidator',
    store,
    dynamic: true
})
class ChangePasswordModule extends VuexModule
{ 
    @Action 
    async checkUser(request: ICheckCustomer): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await checkUser(request); 
         
        return value;
    }

    @Action
    async changePassword(model: IChangePassword): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await changePassword(model); 
         
        return value;
    } 

    @Action
    async sendResetPasswordCode(email: string): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await sendResetPasswordCode(email); 
         
        return value;
    }
}
export default getModule(ChangePasswordModule);