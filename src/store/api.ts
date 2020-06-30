import axios, { AxiosResponse } from 'axios'; 
import { ICustomer, Customer } from '@/models/user.customer';
import { IAuthResponse } from '@/models/auth.response';
import { AuthRequest } from '@/models/auth.request';
import { IAboutUs } from '@/models/about.interface';
import { AppConstants } from '@/App.Constants';
import { IUserContact } from '@/models/user.contact.interface';
import { IApiResult } from '@/models/api.result';
import { IRegisterUser } from '@/models/regiter.user';
import { IConfirmationCode } from '@/models/confirmation.code';
import { ICheckCustomer } from '@/models/check.customer';
import { ICodeValidate } from '@/models/caode.validate';

export const authapi = axios.create({
    baseURL: "http://localhost:3002/",
    headers: { "Content-Type": "application/json;charset=UTF-8" }
});

export const api = axios.create({
    baseURL: "http://localhost:3001/",
    headers: { "Content-Type": "application/json;charset=UTF-8" }
});

export class AUTHJwtHelper
{
    static set(): void
    {
        const jwt: string | null = localStorage.getItem(AppConstants.auth_token);
        if(jwt != null) authapi.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    }

    static clear(): void
    {
        delete authapi.defaults.headers.common["Authorization"];
    }
}

export class APIJwtHelper
{
    static set(): void
    {
        const jwt: string | null = localStorage.getItem(AppConstants.auth_token);
        if(jwt != null) api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    }

    static clear(): void
    {
        delete api.defaults.headers.common["Authorization"];
    }
}


export async function login(request: AuthRequest): Promise<IAuthResponse | null>
{
    let data: IAuthResponse | null = null;
    try
    {  
        const response: AxiosResponse<IAuthResponse> = await authapi.post("auth/login", request);
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};

export async function register(request: IRegisterUser): Promise<IApiResult | null>
{
    let data: IApiResult | null = null;
    try
    {  
        const response: AxiosResponse<IApiResult> = await authapi.post("auth/register", request);
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};

export async function getAbout(): Promise<IAboutUs | null>
{
    let data: IAboutUs | null = null;
    try
    { 
        const response: AxiosResponse<IAboutUs> = await api.get("about");
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};

export async function checkCustomer(request: ICheckCustomer): Promise<IConfirmationCode | null>
{
    let data: IConfirmationCode | null = null;
    try
    { 
        const response: AxiosResponse<IConfirmationCode> = await authapi.post("auth/checkCustomer", request);
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
}; 

export async function sendRegisterCode(email: string): Promise<IApiResult | null>
{
    let data: IApiResult | null = null;
    try
    { 
        const response: AxiosResponse<IApiResult> = await authapi.post("auth/sendCode", { email: email });
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
}; 

export async function validateCode(param: ICodeValidate): Promise<IApiResult | null>
{
    let data: IApiResult | null = null;
    try
    {  
        const response: AxiosResponse<IApiResult> = await authapi.post("auth/checkRegisterCode", param);
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};

export async function getProfile(userId: number): Promise<ICustomer | null>
{
    let data: ICustomer | null = null;
    try
    { 
        AUTHJwtHelper.set();
        const response: AxiosResponse<ICustomer> = await authapi.get("auth/profile/"+userId);
        AUTHJwtHelper.clear();
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};

export async function updateProfile(customer: Customer): Promise<ICustomer | null>
{
    let data: ICustomer | null = null;
    try
    { 
        AUTHJwtHelper.set();
        const response: AxiosResponse<ICustomer> = await authapi.put("auth", customer);
        AUTHJwtHelper.clear();
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};

export async function addContact(customer: IUserContact): Promise<IApiResult | null>
{
    let data: IApiResult | null = null;
    try
    { 
        // APIJwtHelper.set();
        const response: AxiosResponse<IApiResult> = await api.post("contact", customer);
        // APIJwtHelper.clear();
         
        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};