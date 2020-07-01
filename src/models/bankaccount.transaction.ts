import { CustomComponent } from '../CustomComponent';

export class BankAccountTransaction
{
    public id!: number;
    public fromAccountId!: number;
    public fromAccount!: string;
    public fromAccountNumber!: string;
    public amount!: number; 
    public description!: string;
    public moment!: string;
    public transactionType!: string;
    public accountNumber!:string;
    public partner!: string;
    public currency!: string;

    public static map({id , fromAccountId, partner, accountNumber, description, amount, transactionType, currency }: any): BankAccountTransaction
    {
        let item : BankAccountTransaction = new BankAccountTransaction();
        item.id=id;
        item.fromAccountId = fromAccountId;
        item.accountNumber = accountNumber;
        item.description = description; 
        item.amount=amount; 
        item.transactionType = transactionType;
        item.partner = partner;
        item.currency = currency;
        return item;
    }

    public static mapJson(input: string): BankAccountTransaction
    {
        let item: BankAccountTransaction = new BankAccountTransaction();
        item.id = -999; 

        if(input != "" || input != null)
        {
            let value = JSON.parse(input);
            item.id = value.id;
            item.fromAccountId = value.fromAccountId;
            item.accountNumber = value.accountNumber;
            item.description = value.description; 
            item.amount = value.amount;
            item.moment = value.moment;
            item.transactionType = value.transactionType;
            item.partner = value.partner;
            item.currency = value.currency;
        }

        return item;
    } 


    public getJson = (): string => JSON.stringify(this);

    public formatAmount = (): string => `${this.amount} ${this.currency}`; 
}
