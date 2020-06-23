<template>
    <div class="body-color body">
      <b-container class="body-container">
        <div class="row about-us-label">
          <div class="col-sm-4 col-md-4"><h4>About us</h4></div>
          <div class="col-sm-4 col-md-4"></div>
          <div class="col-sm-4 col-md-4"></div>
        </div>
        <div class="row about-us-label">
          <div class="col-sm-4 col-md-4"><b>Email:</b> {{model.email}}</div>
          <div class="col-sm-4 col-md-4"></div>
          <div class="col-sm-4 col-md-4"></div>
        </div>
        <div class="row about-us-label">
          <div class="col-sm-4 col-md-4"><b>Numar telefon:</b> {{model.email}}</div>
          <div class="col-sm-4 col-md-4"></div>
          <div class="col-sm-4 col-md-4"></div>
        </div>
      </b-container>

      

      
    </div>
</template>

<style> 
  .about-us-label 
  {
    text-align: left;
    padding-top: 2vh !important;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'; 
import { IAboutUs } from '@/models/about.interface';
 
@Component
export default class AboutComponent extends Vue
{  
    
    public model: IAboutUs = { email: "contact@homebank.com" };

    back(){
        this.$router.back();
    }
    
}

</script>