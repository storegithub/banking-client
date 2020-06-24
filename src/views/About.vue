<template>
    <div class="body-color body">
      <b-container class="body-container">
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
 
@Component
export default class AboutComponent extends Vue
{  
    
    public model: IAboutUs = {
      email: "contact@homebank.com" ,
      phone: "+4072123456",
      details: "HomeBank este o aplicatie web internet banking destinata utilizatorilor pentru a isi gestiona finantele. Usor de folosit, HomeBank foloseste tehnologii noi si populare in randul programatorilor. Datorita Two-Factor Authentication, autentificarea utilizatorilor este sigura - protocolul Oauth2.0 este folosit."
      };

    back(){
        this.$router.back();
    }
    
}

</script>