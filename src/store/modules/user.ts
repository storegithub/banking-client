import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import appStore from '@/store';
import { ICustomer } from '@/models/user.customer';


@Module({
    namespaced: true,
    name: 'users',
    store: appStore,

})
class UserModule extends VuexModule
{
    customer: ICustomer | null = null;
}

export default getModule(UserModule);