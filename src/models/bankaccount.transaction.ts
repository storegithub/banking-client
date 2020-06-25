import { CustomComponent } from '../CustomComponent';

export class BankAccountTransaction
{
    public id!: number;
    public bankAccountId!: number;
    public transferedAmount!: number;
    public currentAmount!: number;
    public description!: string;
    public moment!: string;
    public type!: string;
    public IBAN!:string;
    public partner!: string;
    public currency!: string;

    public static map({id , bankAccountId, partner, IBAN, description, currentAmount, transferedAmount, moment, type, currency }: any): BankAccountTransaction
    {
        let item : BankAccountTransaction = new BankAccountTransaction();
        item.id=id;
        item.bankAccountId=bankAccountId;
        item.IBAN=IBAN;
        item.description=description;
        item.currentAmount=currentAmount;
        item.transferedAmount=transferedAmount;
        item.moment=moment;
        item.type=type;
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
            item.bankAccountId = value.bankAccountId;
            item.IBAN = value.IBAN;
            item.description = value.description;
            item.currentAmount = value.currentAmount;
            item.transferedAmount = value.transferedAmount;
            item.moment = value.moment;
            item.type = value.type;
            item.partner = value.partner;
            item.currency = value.currency;
        }

        return item;
    } 


    public getJson = (): string => JSON.stringify(this);

    public formatTransferedAmount = (): string => `${this.transferedAmount} ${this.currency}`;
    public formatCurrentAmount = (): string => `${this.currentAmount} ${this.currency}`;
}
