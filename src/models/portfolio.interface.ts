import { BankAccountItem } from './bank.account.item';

export class Portfolio
{
    public currentAccounts: Array<BankAccountItem> = [];

    public economies: Array<BankAccountItem> = [];

    public get amount(): number
    { 
        const reducer = (accumulator: number, currentItem: number) => accumulator + currentItem;

        const currentAccountsSum: number = this.currentAccounts.map(item => item.amount).reduce(reducer);
        const econimiesSum: number = this.economies.map(item => item.amount).reduce(reducer);

        return currentAccountsSum + econimiesSum;
    }

    public formatAmount(currency: string)
    {
        return `${this.amount} ${currency}`;
    }
}