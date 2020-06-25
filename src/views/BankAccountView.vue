<template>
    <div class="body-color body">
      <b-container class="body-container">
          <div>
            <b-nav class="nav justify-content-center">Lista tranzactii</b-nav>
          </div>

          <!-- <div class="row transaction-label">
        <div class="col-sm-4 col-md-4">
          
        </div>
      </div> -->

      <bank-account-transaction class="row transaction-label"
        :values="JSON.stringify(model.currentItem)">
        lista
      </bank-account-transaction>

      </b-container>
    </div>
</template>

<style> 
.transaction-label
{
  text-align: left;
  padding-top: 2vh !important;
  color: black !important;
}

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'; 
import { IAboutUs } from '@/models/about.interface';
import { CustomComponent } from '../CustomComponent';
import { BankAccountItem } from '../models/bank.account.item';
import { PortfolioDetail } from '../models/portfolio.interface';
import { Mocks } from '../mocks';
import { BankAccountTransaction } from '../models/bankaccount.transaction';
import BankAccountCard from '../components/BankAccountCard.vue';


// @Component({
//   components: {
//     'bank-account-transaction': BankAccountItem
//     // 'bank-account-transaction': BankAccountItem
//   }
//   })

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

    const currentItem: BankAccountItem | undefined = Mocks.BankAccounts.find(item => item.id == this.bankAccountId);
    if(currentItem !== undefined)
      this.model.bankAccountItem = currentItem;   
  }

  // public model: BankAccountItem = new BankAccountItem();

  public model: PortfolioDetail = new PortfolioDetail();

  

  public back()
  {
      this.$router.back();
  }
}

</script>