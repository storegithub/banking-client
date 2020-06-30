<template>
    <div class="body-color body">
      <b-container class="body-container" text="Contact"> 
        <b-row>
          <b-col>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="model.firstName" name="firstName" placeholder="Your name..">
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="model.lastName" name="lastName" placeholder="Your last name..">
          </b-col>
          <b-col></b-col>
        </b-row>
                <b-row>
          <b-col>
            <label for="email">E-mail</label>
            <input type="text" id="email" name="email" v-model="model.email" placeholder="Your name..">
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="phone">Your phone number.</label>
            <input type="text" id="phone" name="phone" v-model="model.phoneNumber" placeholder="Phone">
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="message">Your message</label>
            <b-form-textarea type="text" id="message" name="message" v-model="model.message" placeholder="Message"></b-form-textarea> 
          </b-col>
          <b-col></b-col>
        </b-row> 
        <b-row>
          <b-col>
             <b-button style="margin-top: 2vh" @click="save" block >Submit</b-button>
          </b-col>
          <b-col></b-col>
        </b-row> 
           
      </b-container> 
    </div> 
        
</template>

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* div {
  border-radius: 5px;
  background-color: #aaaaaa;
  padding: 20px;
} */
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'; 
import { IAboutUs } from '@/models/about.interface';
import { CustomComponent } from '../CustomComponent';
import { ICustomer } from '../models/user.customer';
import { IUserResponse } from '../models/user.response';
import { IUserContact } from '../models/user.contact.interface';
import contactModule from '../store/modules/contactModule';
import { IApiResult } from '../models/api.result';
 
@Component
export default class CotactComponent extends Vue
{  
    
    public model: IUserContact = {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      message: ""
    };
    
    public async save()
    {
      let value: IApiResult | null =  await contactModule.post(this.model);
      if(value != null && value.success == true) 
      {
        this.model = {
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          message: ""
        };
      }
    }

    public back()
    {
        this.$router.back();
    }
}

</script>