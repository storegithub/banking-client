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
            
            <bank-account-card label="Cont curent" @handler="handlePopup" :values="JSON.stringify(model.currentAccounts)"></bank-account-card>

            <bank-account-card label="Economii" @handler="handlePopup" :values="JSON.stringify(model.economies)"></bank-account-card> 

            <bank-account-card label="Depozite" @handler="handlePopup" :values="JSON.stringify([])"></bank-account-card> 

            <bank-account-card label="Imprumuturi" @handler="handlePopup" :values="JSON.stringify([])"></bank-account-card> 

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

@Component({
    components: {   
        'bank-account-card': BankAccountCardComponent
    }
})
export default class PortfolioPage extends Vue
{ 
    constructor()
    {
        super();
        this.model.currentAccounts.push(BankAccountItem.map({ id: 1, alias: "", amount: 550, currency: "RON", accountType: "CurrentAccount", display: "Cont curent" }));
        this.model.currentAccounts.push(BankAccountItem.map({ id: 2, alias: "", amount: 100, currency: "RON", accountType: "CurrentAccount", display: "Cont curent" }));

        this.model.economies.push(BankAccountItem.map({ id: 3, alias: "", amount: 5000, currency: "RON", accountType: "Econimies", display: "Cont economii" }));
        this.model.economies.push(BankAccountItem.map({ id: 4, alias: "", amount: 800, currency: "RON", accountType: "Econimies", display: "Cont economii" }));
    }

    
    getValidationState(context: ValidationContext) {
        const { dirty, validated, valid } = context;

        return dirty || validated ? valid : null;
    }
    
    back(){
        this.$router.back();
    }

    public model: Portfolio = new Portfolio();

    public defaultAccount: string = `{"id":-1,"alias":null,"accountType":"Current","amount":555,"currency":"RON"}`;

    public handlePopup({ id, accountType }: BankAccountItem)
    {
        // console.table({ id, accountType });
    }
    
}

</script>