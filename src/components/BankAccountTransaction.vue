<template>
   <div class="custom-item-card-body">
        <div class="row">
            <div class="col-sm-8 col-md-8 align-to-left"> 
                <div><b><display-text :value="model.partner"></display-text></b></div>
                <div><display-text :value="model.description"></display-text></div> 
            </div>
            <div class="col-sm-4 col-md-4 right">
                <span class="debit-color" v-if="model.type == 'debit'">-</span>
                <display-text :class="{ 'credit-color': model.type == 'credit', 'debit-color': model.type == 'debit' }" :value="model.formatTransferedAmount()"></display-text>
            </div>
        </div>
   </div>
</template>

<style> 
    .custom-item-card-body
    {
        background-color: white;
        padding: 10px;
        font-size: 0.8em;
        text-align: left;
        border-radius: 5px;
        font-weight: unset;
    } 

    .font-size-90 { font-size: 100%; }

    .credit-color { color: #00e600; }
    .debit-color { color: red; }
</style>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BankAccountTransaction } from '@/models/bankaccount.transaction';
import DisplayText from '@/components/DisplayText.vue';

@Component({ name: 'bank-account-transaction', components: {
    DisplayText
} })
export default class BankTransactionComponent extends Vue
{
    @Prop() data!: string;
    get model(): BankAccountTransaction
    {
        return BankAccountTransaction.mapJson(this.data); 
    }

    
}

</script>