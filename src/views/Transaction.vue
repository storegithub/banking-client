<template>
   <div class="body-color body">
      <b-container class="body-container font">
        <div class="row row-style">
            <div class="col-sm-12 col-md-12 left">
              <h3>Efectueaza o plata</h3>
            </div>
        </div>
      </b-container>
      <b-container v-if="model != null" class="body-container font form-background">
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Din contul:</b></div>
            <div class="col-sm-2 col-md-4 left">{{model.fromAccount}}</div> 
        </div>
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Din contul nr:</b></div>
            <div class="col-sm-2 col-md-4 left">{{model.fromAccountNumber}}</div> 
        </div>
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Moneda:</b></div>
            <div class="col-sm-2 col-md-4 left">{{model.currency}}</div> 
        </div>
         <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Partener:</b></div>
            <div class="col-sm-2 col-md-4">
                <b-input type="text" v-model="model.partner" />
            </div> 
        </div>
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>IBAN/Nr. cont:</b></div>
            <div class="col-sm-2 col-md-4">
                <b-input type="text" v-model="model.accountNumber" />
            </div> 
        </div>
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Suma:</b></div>
             <div class="col-sm-2 col-md-4">
                <b-input type="number" v-model="model.amount" />
            </div> 
        </div>
        <div class="row row-style">
            <div class="col-sm-2 col-md-2 right"><b>Comentarii:</b></div>
             <div class="col-sm-2 col-md-4">
               <b-form-textarea type="text" id="message" name="message" v-model="model.description" placeholder=""></b-form-textarea>
            </div> 
        </div>
        
      </b-container>
      <b-container class="container-style">
        <div class="row">
              <div class="col-sm-2 col-md-2">
                <b-button block variant="dark" @click="save">Salvare</b-button>
              </div>
              <div class="col-sm-2 col-md-2">
                <b-button block variant="secondary" @click="back">Renunta</b-button>
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
import transactioModule from '../store/modules/transactioModule';
import { BankAccountTransaction } from '../models/bankaccount.transaction';
import { IApiResult } from '../models/api.result';
 
@Component
export default class AboutComponent extends Vue
{   
    public model: BankAccountTransaction | null = new BankAccountTransaction();

    public async beforeCreate()
    { 
        const { accountId } = this.$route.params;
        this.model = await transactioModule.newTransaction(Number(accountId));
    }

    public async save()
    {
        debugger;
        if(this.model == null) throw new Error();

        const webApiResult: IApiResult | null = await transactioModule.addTransaction(this.model);
        if(webApiResult != null && webApiResult.success == true)
            this.back();
    }

    public back(){
        this.$router.back();
    }
    
}

</script>