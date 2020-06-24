<template>
    <div class="loginPage body-color">
        <b-container class="loginContainer"> 
            <b-row>
                <b-col class="register">
                    Esti client si nu ai un cont?  
                    <router-link class="createAccount" :to="{ name: 'Register' }">Creaza cont</router-link>
                </b-col>
                <b-col></b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col class="loginColContainer">
                    <b-input-group class="loginHeader">
                        <template v-slot:prepend>
                            <svg class="bi bi-lock prepadIcon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                            </svg>
                        </template>
                        <div>
                            Te rugam sa te autentifici
                        </div>
                    </b-input-group>
                    <validation-provider name="Name" :rules="{ required: true, min: 8 }" v-slot="validationContext">
                        <b-form-group size="md" label="Utilzator" label-for="username">
                            <b-form-input 
                                id="username"
                                v-model="username" 
                                :state="getValidationState(validationContext)"
                                placeholder="Completati utilizatorul"
                                required>
                            </b-form-input> 
                        </b-form-group>
                        <b-form-invalid-feedback id="username-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </validation-provider>

                    <validation-provider name="Name" :rules="{ required: true, min: 5 }" v-slot="validationContext">
                        <b-form-group size="md" label="Parola" label-for="password"> 
                                <b-form-input 
                                    id="password"
                                    type="password"
                                    v-model="password" 
                                    placeholder="Completati parola"
                                    :state="getValidationState(validationContext)"
                                    required>
                                </b-form-input> 
                        </b-form-group>
                        <b-form-invalid-feedback id="password-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </validation-provider>

                    <b-input-group>
                        <b-button block variant="primary" @click="login">Autentificare</b-button>
                    </b-input-group>            
                    <b-input-group class="loginButton">
                        <b-button block variant="outline-secondary" @click="resetPassword">Resetare parola</b-button>
                    </b-input-group>            
                </b-col>
                <b-col></b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    label.d-block {
        text-align:  left;
    }
    .loginPage {
        height: 100vh;
        
    }
    .loginContainer {
        padding-top: 35vh;
    }
    .loginHeader
    {
        background-color: lightgray;
        padding: 7px;
        border-radius: 5px;
        margin-bottom: 5%;
        font-size: 11pt;
    }
    .prepadIcon
    {
        margin: 3px;
    }
    .loginColContainer {
        padding: 35px;
        border-radius: 5px;
        border: 1px lightgray solid;
        background-color: white;
    }
    .loginButton {
        padding-top: 5px;
    }
    .register { 
        text-align: left;
        padding: 7px 0px 7px 10px;
        
     }
     .createAccount{
         padding: 0px 15px 0px 15px;
     }
</style>>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ValidationContext } from 'vee-validate/dist/types/components/common';
import router from '@/router';

@Component
export default class Login extends Vue
{
    username: string | null = null;
    password: string | null = null;


    async login()
    {
    }

    resetPassword()
    {
        debugger;
        this.$router.push({ name: "ResetPassword" });
    }
 
    getValidationState({ dirty, validated, valid }: ValidationContext) {
      return dirty || validated ? valid : null;
    }

}

</script>>