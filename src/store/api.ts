import axios, { AxiosResponse } from 'axios';
import { ILogin } from '@/models/user.login';
import { ICustomer } from '@/models/user.customer';

export const api = axios.create({
    baseURL: ""
});

export class JwtHelper
{
    static set(item: string): void
    {
        api.defaults.headers.common["Authorization"] = `Bearer ${item}`;
    }

    static clear(item: string): void
    {
        delete api.defaults.headers.common["Authorization"];
    }
}

export async function login(user: ILogin): Promise<ICustomer | null>
{
    let data: ICustomer | null = null;
    try
    {
        const response: AxiosResponse<ICustomer> = await axios.post("users/login", {
            user
        });

        data = response.data;
    }
    catch(err)
    {
        console.log(err);
    }

    return data;
};