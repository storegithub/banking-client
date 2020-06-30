import { Module, VuexModule, getModule, MutationAction, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store'; 
import { IApiResult } from '@/models/api.result';
import { ICheckCustomer } from '@/models/check.customer'; 
import { sendRegisterCode, checkCustomer, validateCode } from '../api';
import { ICodeValidate } from '@/models/caode.validate';

@Module({
    namespaced: true,
    name: 'codeValidator',
    store,
    dynamic: true
})
class CodeValudatorModule extends VuexModule
{ 
    @Action 
    async checkCustomer(request: ICheckCustomer): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await checkCustomer(request); 
         
        return value;
    }

    @Action
    async sendRegisterCode(email: string): Promise<IApiResult | null>
    {
        const value: IApiResult | null = await sendRegisterCode(email); 
         
        return value;
    }

    @Action
    async validateCode(param: ICodeValidate): Promise<IApiResult | null>
    { 
        const value: IApiResult | null = await validateCode(param); 
         
        return value;
    }
}

export default getModule(CodeValudatorModule);