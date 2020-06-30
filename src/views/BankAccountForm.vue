<template>
    <div class="body-color body">
      <b-container class="body-container font">
        <div class="row row-style">
            <div class="col-sm-12 col-md-12 left">
              <h3>Adaugare cont</h3>
            </div>
        </div>
      </b-container>
      <b-container class="body-container font form-background">
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Numar cont:</b></div>
            <div class="col-sm-2 col-md-4">{{model.accountNumber}}</div> 
        </div>
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>IBAN:</b></div>
            <div class="col-sm-2 col-md-4">{{model.iban}}</div> 
        </div>
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Tip cont:</b></div>
            <div class="col-sm-2 col-md-4">
              <b-form-select v-model="model.accountType" :options="model.accountTypes"></b-form-select>
            </div>
        </div> 
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Moneda:</b></div>
            <div class="col-sm-2 col-md-4">
              <b-form-select v-model="model.currency" :options="model.currencies"></b-form-select>
            </div> 
        </div>
      </b-container>
      <b-container class="container-style">
        <div class="row">
              <div class="col-sm-2 col-md-2">
                <b-button block variant="dark" @click="save">Salvare</b-button>
              </div>
              <div class="col-sm-2 col-md-2">
                <b-button block variant="secondary" @click="cancel">Renunta</b-button>
              </div>
              <div class="col-sm-8 col-md-8"></div>
          </div>
      </b-container>
    </div>
    
</template>

<style> 
  .font {  font-size: 0.8em; }
  .row-style {
    padding: 10px 0px 10px 0px;
  }
  .container-style {
    padding: 5vh 0px 5vh 0px;
  }
  .form-background { 
    background-color: white;
    border-radius: 5px; 
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'; 
import { IAboutUs } from '@/models/about.interface';
import { CustomComponent } from '../CustomComponent';
import { BankAccountItem } from '../models/bank.account.item';
import { IApiResult } from '../models/api.result';
import newBankAccountModule from '../store/modules/portfolio.module';
 
@Component
export default class BankAccountFormComponent extends CustomComponent
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

  public model: BankAccountItem | null = new BankAccountItem();

  async beforeCreate()
{
  const data: BankAccountItem | null = await newBankAccountModule.createAccount();
  if(data == null)
    console.log("err");
  
  if(this.model!=null && data!=null)
    this.model.accountNumber=data.accountNumber;

  this.model = data;
  }


  // mounted ()
  // {
  //   this.routeValues = this.$route.params;

  //   this.model = new BankAccountItem();
  //   this.model.accountType = this.routeValues.type;
  //   //this.model.accountNo = this.createBankAccountNo();
  //   this.model.iban=this.routeValues.iban;
  //   this.model.accountTypes=this.routeValues.accountTypes;
  //   this.model.currencies=this.routeValues.accountTypes
  //   // this.model.accountTypes = [
  //   //   { value:"currentaccount", text: "Cont curent" },
  //   //   { value:"economies", text: "Economii" },
  //   //   { value: "deposit", text: "Depozit" },
  //   //   { value: "debt", text: "Imprumut" }
      
  //   // ];

  //   // this.model.currencies = [
  //   //   { value:"RON", text: "RON" },
  //   //   { value:"EUR", text: "EURO" },
  //   // ];
  // }


  public createBankAccountNo(): string
   {
       let accountNo: string = "";

       return accountNo;
   }

   public async save()
    {
      if(this.model!=null){
        let value: BankAccountItem | null =  await newBankAccountModule.post(this.model);
        return value;
      }
    }

   public cancel()
   {
     this.back();
   }

  public back()
  {
      this.$router.back();
  }
}

</script>