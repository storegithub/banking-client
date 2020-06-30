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
    // (): number
    // { 
    //     const reducer = (accumulator: number, currentItem: number) => accumulator + currentItem;

    //     const currentAccountsSum: number = this.currentAccounts.map(item => item.amount).reduce(reducer, 0);
    //     const econimiesSum: number = this.economies.map(item => item.amount).reduce(reducer, 0);
    //     const depositsSum: number = this.deposits.map(item => item.amount).reduce(reducer, 0);
    //     const duesSum: number = this.dues.map(item => item.amount).reduce(reducer, 0);

    //     return currentAccountsSum + econimiesSum + depositsSum + duesSum;
    // }

    public formatAmount(currency: string)
    {
        return `${this.amount} ${currency}`;
    }
}