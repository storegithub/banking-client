<template>
    <div class="body-color body">
      <b-container v-if="model != null" class="body-container">
        <div class="row about-us-label">
          <div class="col-sm-4 col-md-4"><h4>About us</h4></div>
          <div class="col-sm-4 col-md-4"></div>
          <div class="col-sm-4 col-md-4"></div>
        </div>
        
        <div class="row about-us-label">
          <div class="col-sm-4 col-md-4"><b>E-mail:</b> {{model.email}}</div>
          <div class="col-sm-4 col-md-4"></div>
          <div class="col-sm-4 col-md-4"></div>
        </div>
         <div class="row about-us-label">
          <div class="col-sm-4 col-md-4"><b>Numar telefon:</b> {{model.phone}}</div>
          <div class="col-sm-4 col-md-4"></div>
          <div class="col-sm-4 col-md-4"></div>
        </div>
          <div class="row bottom-label">
          <div class="col-sm-12 col-md-12"><b>Cine suntem?</b></div>
        </div>
        <div class="row about-us-label">
          <div class="col-sm-12 col-md-12">{{model.details}}</div>
        </div>
        <div class="row about-us-label">
          <div class="col-sm-12 col-md-12">
          <img :src="require('@/assets/banking.jpg')" :style="{ height: 350 + 'px', width:1100+'px'}"/>
          </div>
        </div>
      </b-container>
    </div>
    
</template>

<style> 
  .about-us-label 
  {
    text-align: left;
    padding-top: 3vh !important;
  }

   .bottom-label 
  {
    text-align: left;
    padding-top: 10vh !important;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'; 
import { IAboutUs } from '@/models/about.interface';
import about from '../store/modules/aboutModule';
import aboutModule from '../store/modules/aboutModule';
 
@Component
export default class AboutComponent extends Vue
{  
    
    public model: IAboutUs | null = {
      email: "" ,
      phone: "",
      details: ""
    };

    async beforeCreate()
    {
      const data: IAboutUs | null = await aboutModule.getAboutUs();
      if(data == null)
        console.log("err");
      this.model = data;
    }

    back(){
        this.$router.back();
    }
    
}

</script>