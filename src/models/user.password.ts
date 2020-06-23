export class PasswordValidator
{

    public oldPassword!: string;
    public password!: string;
    public confirmPassword!: string;

    public validate(): boolean
    {
        return this.password == this.confirmPassword;
    }
}