<template>
    <div class="body-color body">
      <b-container class="body-container">
          
      </b-container>
      
    </div>
    
</template>

<style> 
  
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'; 
import { IAboutUs } from '@/models/about.interface';
import { CustomComponent } from '../CustomComponent';
import { BankAccountItem } from '../models/bank.account.item';
 
@Component
export default class BankAccountViewComponent extends CustomComponent
{   
  private bankAccountId!: number;
  private bankAccountType!: string;
  public set routeValues({ id, type }: any) 
  { 
    this.bankAccountId = id == null ? -9999: id;
    this.bankAccountType = type;

  }
  public get routeValues(): any 
  { 
    return { id: this.bankAccountId, type: this.bankAccountType }; 
  }

  mounted ()
  {
    this.routeValues = this.$route.params;

    
  }

  public model: BankAccountItem = new BankAccountItem();

  public back()
  {
      this.$router.back();
  }
}

</script>