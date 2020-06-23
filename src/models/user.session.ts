export class SessionUser
{
    constructor(param: string)
    {
        if(param !== "")
        {
            let json: any = JSON.parse(param);
            this.id = json.id;
            this.firstName = json.firstName;
            this.lastName = json.lastName;
        }
    }

    public id!: number;
    public firstName!: string;
    public lastName!: string;

    get fullName(): string
    {
        return `${this.firstName} ${this.fullName}`;
    }
}