<template>
   <div class="card-box">
        <bank-account-header 
            v-bind:data="label"
            v-bind:type="bankAccountType" 
            @onCreateBankAccount="onCreateBankAccount">
            <div class="right" slot="template">
                <b-button  
                    pill
                    v-if="canAdd == true"  
                    class="font-size-90" 
                    @click="onCreateBankAccount" 
                    variant="light">
                    <b-icon-plus-circle></b-icon-plus-circle>
                </b-button>
            </div>
        </bank-account-header>
        <bank-account-item 
            v-bind:name="bindName('bank-account-item', row.id)" 
            v-for="row in model" 
            :key="row.id" 
            :data="prepareModel(row)" 
            @onEditBanckAccount="onEditBanckAccount">
        </bank-account-item> 
    </div>
</template>

<style>  
    .card-box
    {
        padding: 10px 0px 10px 0px;
    }
</style>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import BankAccountItemComponent from '@/components/BankAccountItem.vue';
import BankAccountHeaderComponent from '@/components/BankAccountHeader.vue';
import { BankAccountItem } from '../models/bank.account.item';
import { CustomComponent } from '../CustomComponent';

@Component({ 
    name: 'bank-account-card', 
    components: {
        'bank-account-item' : BankAccountItemComponent, 
        'bank-account-header' : BankAccountHeaderComponent
    } 
})
export default class BankAccountCard extends CustomComponent
{
    @Prop() label!: string; 
    @Prop() values!: string;

    @Prop() bankAccountType!: string;
    @Prop() canAdd!: boolean;
 
    public get model(): Array<BankAccountItem>
    { 
        const items: Array<BankAccountItem> = JSON.parse(this.values) as Array<BankAccountItem>;  
        return items;
    } 

    public onCreateBankAccount()
    {
        this.$emit("onCreateBankAccount", this.bankAccountType);
    }
    public onEditBanckAccount(item: BankAccountItem)
    { 
        this.$emit("onEditBanckAccount", item);
    }
}

</script>