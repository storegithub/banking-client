export class BankAccountItem
{  
    public id!: number;
    public alias!: string;
    public display!: string;    
    public accountType!: string;
    public amount!: number;
    public currency!: string; 

    public get money(): string
    {
        if (this.amount == null || this.currency == null) return "";
        return `${this.amount} ${this.currency}`;
    }

    public get customDisplay(): string
    {
        if(this.alias != null && this.alias != "")
            return this.alias;
        return this.display;
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
            item.display = value.display;
        }

        return item;
    }

    public static map({ id, alias, amount, currency, accountType, display }: any): BankAccountItem
    {
        let item: BankAccountItem = new BankAccountItem(); 

        item.id = id;
        item.alias = alias;
        item.amount = amount;
        item.currency = currency;
        item.accountType = accountType; 
        item.display = display;
        return item;
    }
}