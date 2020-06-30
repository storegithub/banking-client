import { ICheckCustomer } from './check.customer';

export interface IChangePassword extends ICheckCustomer
{
    code: string;
    password: string;
    confirmPassword: string;
}