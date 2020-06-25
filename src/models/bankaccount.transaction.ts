import { CustomComponent } from '../CustomComponent';

export class BankAccountTransaction extends CustomComponent
{
    public id!: number;
    public bankAccountId!: number;
    public transferedAmount!: number;
    public currentAmount!: number;
    public description!: string;
    public moment!: string;
    public type!: string;
    public IBAN!:string;

    public static map({id,bankAccountId, IBAN, description, currentAmount, transferedAmount, moment, type }: any): BankAccountTransaction
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
        return item;
    }

}
