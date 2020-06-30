import { SelectItem } from '@/models/helper.keyvalue';
import { CustomComponent } from '@/CustomComponent';
import Component from 'vue-class-component';

export class BankAccountItem
{  
    public id!: number;
    public alias!: string;
    public displayName!: string;    
    public accountType!: string;
    public amount!: number;
    public currency!: string; 
    public currencyValue!: string; 
    public accountNumber!: string;
    public iban!: string;

    public currencies: SelectItem<string, string>[] = [];
    public accountTypes: SelectItem<string, string>[] = [];

    public get money(): string
    {
        if (this.amount == null || this.currency == null) return "";
        return `${this.amount} ${this.currency}`;
    }

    public get customDisplay(): string
    {
        if(this.alias != null && this.alias != "")
            return this.alias;
        return this.displayName;
    }

    public static mapJson(input: string): BankAccountItem
    {
        let item: BankAccountItem = new BankAccountItem();
        item.id = -999; 

        if(input != "" || input != null)
        {
            let value = JSON.parse(input);
            item.id = value.id;
            item.alias = value.alias;
            item.amount = value.amount;
            item.currency = value.currency;
            item.accountType = value.accountType;
            item.displayName = value.displayName;
            item.iban=value.iban;
            item.accountNumber=value.accountNumber;
        }

        return item;
    }

    public static map({ id, alias, amount, currency, accountType, displayName, iban, accountNumber }: any): BankAccountItem
    {
        let item: BankAccountItem = new BankAccountItem(); 

        item.id = id;
        item.alias = alias;
        item.amount = amount;
        item.currency = currency;
        item.accountType = accountType; 
        item.displayName = displayName;
        item.iban=iban;
        item.accountNumber=accountNumber;

        return item;
    }
}