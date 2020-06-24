import { BankAccountItem } from '@/models/bank.account.item';

export class Mocks
{

    public static BankAccounts: Array<BankAccountItem> = [
        BankAccountItem.map({ id: 1, alias: "", amount: 550, currency: "RON", accountType: "CurrentAccount", display: "Cont curent" }),
        BankAccountItem.map({ id: 2, alias: "", amount: 100, currency: "RON", accountType: "CurrentAccount", display: "Cont curent" }),
        BankAccountItem.map({ id: 3, alias: "", amount: 5000, currency: "RON", accountType: "Economies", display: "Cont economii" }),
        BankAccountItem.map({ id: 4, alias: "", amount: 800, currency: "RON", accountType: "Economies", display: "Cont economii" })
    ];
}