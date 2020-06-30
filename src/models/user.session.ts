import { IAuthResponse } from './auth.response';

export class SessionUser
{
    constructor(firstName: string, lastName: string, id: number  )
    {  
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;  
    }

    public id!: number;
    public firstName!: string;
    public lastName!: string;

    get fullName(): string
    {
        return `${this.firstName} ${this.fullName}`;
    }
}