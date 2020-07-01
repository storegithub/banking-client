<template>
    <div class="body-color body">
      <b-container class="body-container">
          <bank-account-detail
            v-if="displayHeader == true"
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
                    @click="addTransaction" 
                    variant="light">
                    <b-icon-plus-circle></b-icon-plus-circle>
                </b-button>
            </div>
        </bank-account-header>

        <!-- <div v-if="showFilter==true" class="transaction-report-container">
            <div class="row padding-row ">
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
        </div> -->

        <bank-account-transaction 
            v-for="row in model.transactions" 
            :key="row.id" 
            :name="bindName('bank-account-transaction', row.id)" 
            :data="JSON.stringify(row)" 
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

.padding-row { padding:  0px 5px 0px 5px;}

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
import transactioModule from '../store/modules/transactioModule';
import portfolioModule from '../store/modules/portfolio.module';


@Component({
  components: {
    'bank-account-transaction': BankAccountTransactionComponent ,
    'bank-account-detail':BankAccountDetailComponent,
    'bank-account-header': BankAccountHeader
  }
})
export default class BankAccountViewComponent extends CustomComponent
{   
  public displayHeader: boolean = false;
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
  
  async beforeCreate()
  {   
    this.routeValues = this.$route.params;
    this.model.transactions = await transactioModule.getAccountTransactions(this.bankAccountId);
    const account: BankAccountItem | null = await portfolioModule.getById(this.bankAccountId);
    if(account != null) 
    {
      this.model.bankAccountItem = account;
      this.displayHeader = true;
    }  
  }

  public model: PortfolioDetail = new PortfolioDetail();
  public filter: TransacionReport = new TransacionReport();

  public showFilter: boolean = false;
  public addTransaction()
  {
       this.$router.push({ name: "NewTransaction", params: { accountId: this.bankAccountId.toString() } });
  }

  public back()
  {
      this.$router.back();
  }
}

</script>