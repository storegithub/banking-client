<template>
   <div class="card-box">
        <bank-account-header 
            v-bind:data='label'>
        </bank-account-header>
        <bank-account-item 
            v-bind:name="bindName('bank-account-item', row.id)" 
            v-for="row in model" 
            :key="row.id" 
            :data="prepareModel(row)" 
            @handleClick="handleClick">
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

    public get model(): Array<BankAccountItem>
    { 
        const items: Array<BankAccountItem> = JSON.parse(this.values) as Array<BankAccountItem>;  
        return items;
    } 

    public handleClick(item: BankAccountItem)
    { 
        this.$emit("handler", item);
    }
}

</script>