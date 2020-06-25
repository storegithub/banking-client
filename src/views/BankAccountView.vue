<template>
    <div class="body-color body">
      <b-container class="body-container">
          <bank-account-detail
            v-if="model.bankAccountItem != null"
            :data="JSON.stringify(model.bankAccountItem)"
          >
          </bank-account-detail>

          
        <bank-account-header 
            style="margin-top: 2vh"
            name="istoricTranzactii"
            data="Istoric tranzactii">
            <div class="right" slot="template">
                <b-button  
                    pill
                    class="font-size-90" 
                    @click="onReportRequest" 
                    variant="light">
                    <b-icon-calendar2-date></b-icon-calendar2-date>
                </b-button>
            </div>
        </bank-account-header>

        <div v-if="showFilter==true" class="transaction-report-container">
            <div class="row">
                <div class="col-sm-4 col-md-4">
                     <div>
                        <label for="example-datepicker">Data inceput</label>
                        <b-form-datepicker id="example-datepicker" v-model="filter.dateStart"></b-form-datepicker>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                     <div>
                        <label for="example-datepicker2">Data sfarsit</label>
                        <b-form-datepicker id="example-datepicker2" v-model="filter.dateEnd"></b-form-datepicker>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <label for="example-datepicker">Operatie</label>
                    <b-form-select v-model="filter.type" :options="filter.typeOptions" ></b-form-select>
                </div>
            </div> 
        </div>

        <bank-account-transaction 
            v-for="row in model.transactions" 
            :key="row.id" 
            :name="bindName('bank-account-transaction', row.id)" 
            :data="row.getJson()" 
        >
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
.transaction-report-container 
{
    background-color: white; 
    margin: 0vh 0vh 2vh 0vh;
    padding: 10px 0px 10px 0px;
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
import { TransacionReport } from '../models/transaction.report';
import BankAccountHeader from '../components/BankAccountHeader.vue';
import BankAccountTransactionComponent from '@/components/BankAccountTransaction.vue';
import BankAccountDetailComponent from '@/components/BankAccountDetail.vue';


@Component({
  components: {
    'bank-account-transaction': BankAccountTransactionComponent ,
    'bank-account-detail':BankAccountDetailComponent,
    'bank-account-header': BankAccountHeader
  }
})
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
  
  created()
  {  
    this.routeValues = this.$route.params;
    const currentItem: BankAccountItem | undefined = Mocks.BankAccounts.find(item => item.id == this.bankAccountId);
    if(currentItem !== undefined) 
    { 
        this.model.bankAccountItem = currentItem; 
        this.model.transactions = Mocks.BankAccountTransactions.filter(item => item.bankAccountId == currentItem.id);
        this.filter.typeOptions = Mocks.TransactionTypes;
    }  
  }

  public model: PortfolioDetail = new PortfolioDetail();
  public filter: TransacionReport = new TransacionReport();

  public showFilter: boolean = false;
  public onReportRequest()
  {
      this.showFilter = !this.showFilter;
  }

  public back()
  {
      this.$router.back();
  }
}

</script>