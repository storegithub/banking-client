import { BankAccountItem } from '@/models/bank.account.item';
import { BankAccountTransaction } from './models/bankaccount.transaction';

export class Mocks
{

    public static BankAccounts: Array<BankAccountItem> = [
        BankAccountItem.map({ id: 1, alias: "", amount: 550, currency: "RON", accountType: "CurrentAccount", display: "Cont curent" }),
        BankAccountItem.map({ id: 2, alias: "", amount: 100, currency: "RON", accountType: "CurrentAccount", display: "Cont curent" }),
        BankAccountItem.map({ id: 3, alias: "", amount: 5000, currency: "RON", accountType: "Economies", display: "Cont economii" }),
        BankAccountItem.map({ id: 4, alias: "", amount: 800, currency: "RON", accountType: "Economies", display: "Cont economii" })
    ];

    public static BankAccountTransactions: Array<BankAccountTransaction> = [
        BankAccountTransaction.map({id:1, bankAccountId: 1, IBAN: "123456", description: "salariu Mai", currentAmount: 550, transferedAmount: 100, moment: "05.06.2020", type: "debit"}),
        BankAccountTransaction.map({id:2, bankAccountId: 2, IBAN: "237846", description: "fara detalii suplimentare", currentAmount: 100, transferedAmount: 80, moment: "23.06.2020", type: "credit"}),
        BankAccountTransaction.map({id:3, bankAccountId: 3, IBAN: "894582", description: "plata lumina", currentAmount: 5000, transferedAmount: 570, moment: "21.06.2020", type: "credit"}),
        BankAccountTransaction.map({id:4, bankAccountId: 4, IBAN: "725341", description: "factura internet", currentAmount: 800, transferedAmount: 121, moment: "18.06.2020", type: "credit"}),
        BankAccountTransaction.map({id:5, bankAccountId: 4, IBAN: "914753", description: "fara detalii suplimentare", currentAmount: 800, transferedAmount: 84, moment: "10.05.2020", type: "debit"}),
        BankAccountTransaction.map({id:6, bankAccountId: 3, IBAN: "763492", description: "tranzactie", currentAmount: 5000, transferedAmount: 150, moment: "06.05.2020", type: "credit"}),
        BankAccountTransaction.map({id:7, bankAccountId: 2, IBAN: "143901", description: "fara detalii suplimentare", currentAmount: 100, transferedAmount: 20, moment: "26.05.2020", type: "credit"}),
        BankAccountTransaction.map({id:8, bankAccountId: 1, IBAN: "730821", description: "fara detalii suplimentare", currentAmount: 550, transferedAmount: 60, moment: "11.04.2020", type: "debit"}),
        BankAccountTransaction.map({id:9, bankAccountId: 3, IBAN: "339463", description: "salariu Iunie", currentAmount: 5000, transferedAmount: 237, moment: "05.07.2020", type: "debit"}),
        BankAccountTransaction.map({id:10, bankAccountId: 2, IBAN: "394874", description: "factura internet", currentAmount: 100, transferedAmount: 15, moment: "20.06.2020", type: "credit"})
    ]
}