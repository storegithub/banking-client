<template>
    <div class="body-color body">
        <b-container class="body-container">
            <div>
                <b-card
                    title="Suma disponibila"
                    tag="article"
                    class="mb-2"> 
                    <b-card-text> {{model.formatAmount('RON')}}</b-card-text> 
                </b-card>
            </div>
            
            <bank-account-card 
                label="Cont curent" 
                bankAccountType="CurrentAccount"
                :canAdd="canAdd"
                @onEditBanckAccount="onEditBanckAccount" 
                @onCreateBankAccount="onCreateBankAccount" 
                :values="JSON.stringify(model.currentAccounts)">
            </bank-account-card>

            <bank-account-card 
                label="Economii" 
                :canAdd="canAdd"
                bankAccountType="Economies"
                @onEditBanckAccount="onEditBanckAccount" 
                @onCreateBankAccount="onCreateBankAccount" 
                :values="JSON.stringify(model.economies)">
            </bank-account-card> 

            <bank-account-card 
                label="Depozite" 
                bankAccountType="Deposit"
                :canAdd="canAdd"
                @onEditBanckAccount="onEditBanckAccount" 
                @onCreateBankAccount="onCreateBankAccount" 
                :values="JSON.stringify(model.deposits)">
            </bank-account-card> 

            <bank-account-card 
                label="Imprumuturi" 
                bankAccountType="Due"
                @onEditBanckAccount="onEditBanckAccount" 
                @onCreateBankAccount="onCreateBankAccount" 
                :values="JSON.stringify(model.dues)">
            </bank-account-card> 

        </b-container>
    </div>
</template>

<style> 
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ValidationContext } from 'vee-validate/dist/types/components/common';
// import Stepper from '@/components/Stepper.vue';
import { IStepperSetting } from '../models/stepper.setting';
import { KeyValue } from '@/models/helper.keyvalue';

import BankAccountCardComponent from '@/components/BankAccountCard.vue';
import { Portfolio } from '@/models/portfolio.interface';
import { BankAccountItem } from '@/models/bank.account.item';
import { CustomComponent } from '../CustomComponent';
import { Mocks } from '@/mocks';
import portfolioModule from '../store/modules/portfolio.module';
import authModule from '@/store/modules/authModule';

@Component({
    components: {   
        'bank-account-card': BankAccountCardComponent
    }
})
export default class PortfolioPage extends CustomComponent
{ 
    public canAdd: boolean = true;
    public model: Portfolio = new Portfolio();
    public get currentAccounts(): string { return JSON.stringify(this.model.currentAccounts); }
    public get economies(): string { return JSON.stringify(this.model.economies); }
    public get deposits(): string { return JSON.stringify(this.model.deposits); } 
    public get dues(): string { return JSON.stringify(this.model.dues); }

    constructor()
    {
        super(); 
    }

    mounted()
    {
        // this.model.currentAccounts = Mocks.BankAccounts.filter(item => item.accountType == 'CurrentAccount');
        // this.model.economies = Mocks.BankAccounts.filter(item => item.accountType == 'Economies');
        // this.model.dues = Mocks.BankAccounts.filter(item => item.accountType == 'Due');
        // this.model.deposits = Mocks.BankAccounts.filter(item => item.accountType == 'Deposit');
    }
    
    getValidationState(context: ValidationContext) {
        const { dirty, validated, valid } = context;

        return dirty || validated ? valid : null;
    } 
    
    public onCreateBankAccount(bankAccountType: string)
    {
        this.$router.push({ name: "NewBankAccount", params: { type: bankAccountType.toLowerCase() } });
    }

    public onEditBanckAccount({ id, accountType }: BankAccountItem)
    {
        this.$router.push({ name: "ViewBankAccount", params: { id: id.toString() } });
    }

    public back()
    {
        this.$router.back();
    }

    public async beforeCreate()
    {
        try
        { 
            const result = await portfolioModule.getPortfolio(authModule.userId);
            if(result != null)
            {
                this.model=new Portfolio();
                this.model.currentAccounts=result.currentAccounts;
                this.model.economies=result.economies;
                this.model.deposits=result.deposits;
                this.model.dues=result.dues;
                this.model.amount=result.amount;
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }
    
}

</script>