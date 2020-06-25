<template>
   <div class="custom-item-card-body">
       <div>
            <b-card
                :title="title"
                tag="article"
                class="mb-2">

                <b-card-text> 
                    {{formatAmount("RON")}}
                </b-card-text> 
            </b-card>
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
</style>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BankAccountItem } from '@/models/bank.account.item';
import DisplayText from '@/components/DisplayText.vue';

@Component({ name: 'bank-account-detail', components: {
    DisplayText
} })
export default class BankAccountItemDetail extends Vue
{
    @Prop() data!: string;
    get model(): BankAccountItem
    {   
        return BankAccountItem.mapJson(this.data); 
    }

    public get title() { return `Suma disponibila cont`; }

    public formatAmount(currency: string): string
    { 
        if(this.model == null)
            return "";
        return `${this.model.amount} ${currency}`;
    }
}

</script>