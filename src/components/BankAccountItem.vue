<template>
   <div class="custom-item-card-body">
        <div class="row">
            <div class="col-sm-8 col-md-8 align-to-left"> 
                <display-text :value="model.displayName"></display-text>
            </div>
            <div class="col-sm-2 col-md-2">
                <display-text :value="model.money"></display-text>
            </div>
            <div class="col-sm-2 col-md-2 right">
                <b-button pill class="font-size-90" @click="open" variant="outline-secondary"><b-icon-window></b-icon-window></b-button>
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
</style>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BankAccountItem } from '@/models/bank.account.item';
import DisplayText from '@/components/DisplayText.vue';

@Component({ name: 'bank-account-item', components: {
    DisplayText
} })
export default class BankAccount extends Vue
{
    @Prop() data!: string;
    get model(): BankAccountItem
    {
        return BankAccountItem.mapJson(this.data); 
    }

    public open(): void
    { 
        this.$emit("onEditBanckAccount", this.model);
    }
}

</script>