<template>
    <div class="body-color body">
      <b-container class="body-container">
        Contact
      </b-container>
    </div>
    
</template>

<style> 
  
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'; 
import { IAboutUs } from '@/models/about.interface';
import { CustomComponent } from '../CustomComponent';
 
@Component
export default class AboutComponent extends CustomComponent
{  
    
    public model: IAboutUs = {
      email: "contact@homebank.com" ,
      phone: "+4072123456",
      details: "HomeBank este o aplicatie web internet banking destinata utilizatorilor pentru a isi gestiona finantele. Usor de folosit, HomeBank foloseste tehnologii noi si populare in randul programatorilor. Datorita Two-Factor Authentication, autentificarea utilizatorilor este sigura - protocolul Oauth2.0 este folosit."};

    
    public back()
    {
        this.$router.back();
    }
}

</script>