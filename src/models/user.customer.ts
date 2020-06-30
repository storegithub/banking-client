import { SelectItem } from './helper.keyvalue';

export interface ICustomer
{
    userName: string;
    firstName: string;
    lastName: string;
    phoneNo: string;
    email: string;
    branch: string;
    gender: string;

    genderDropDown: SelectItem<string, string> [];

    details: string;

    city?: string;
    postalCode?: string;

    addressDetail?: string;
    branchName?: string;
}

export class Customer implements ICustomer
{
    userId!: number;
    branchName!: string;
    userName!: string;
    firstName!: string;
    lastName!: string;
    phoneNo!: string;
    email!: string;
    branch!: string;
    gender!: string;
    details!: string;
    city?: string;
    postalCode?: string;
    addressDetail?: string;

    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;

    genderDropDown!: SelectItem<string, string> [];
}