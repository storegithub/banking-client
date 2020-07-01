import { BankAccountItem } from './bank.account.item';
import { BankAccountTransaction } from './bankaccount.transaction';

export class PortfolioDetail
{
    public bankAccountItem!: BankAccountItem;
    public transactions: Array<BankAccountTransaction>=[];
    public dateStart!: string;
    public dateEnd!: string;

    public formatAmount(currency: string)
    {
        return `${this.bankAccountItem.amount} ${currency}`;
    }
}

export class Portfolio
{
    public currentAccounts: Array<BankAccountItem> = [];
    public economies: Array<BankAccountItem> = [];
    public deposits: Array<BankAccountItem> = [];
    public dues: Array<BankAccountItem> = [];

    public amount: number = 0;

    public formatAmount(currency: string)
    {
        return `${this.amount} ${currency}`;
    }
}