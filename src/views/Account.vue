<template>
    <div class="body-color body">
         <b-container v-if="person != null" type="dark" class="body-container">
                <b-nav tabs fill>
                    <b-nav-item link-classes="label-navbar" id="tab1" @click="setActive('tab1')">Date pasaportale</b-nav-item>
                    <b-nav-item link-classes="label-navbar" id="tab2" @click="setActive('tab2')">Adresa</b-nav-item>
                    <b-nav-item link-classes="label-navbar" id="tab3" @click="setActive('tab3')">Resetare parola</b-nav-item>
                </b-nav>
                <b-container v-if="currentTab == 'tab1'" class="body-container">
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="name" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Nume" label-for="person-name">
                                    <b-form-input 
                                        type="text"
                                        id="person-name"
                                        v-model="person.firstName" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="person-name-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    <!-- </b-row>
                    <b-row> -->
                        <b-col class="col-6">
                            <validation-provider name="surname" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Prenume" label-for="person-surname">
                                    <b-form-input 
                                        type="text"
                                        id="person-surname"
                                        v-model="person.lastName" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="person-surname-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="phoneNo" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Telefon" label-for="person-phoneNo">
                                    <b-form-input 
                                        type="text"
                                        id="person-phoneNo"
                                        v-model="person.phoneNo" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="person-phoneNo-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    <!-- </b-row>
                    <b-row> -->
                        <b-col class="col-6">
                            <validation-provider name="email" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Email" label-for="person-email">
                                    <b-form-input 
                                        type="text"
                                        id="person-email"
                                        v-model="person.email" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="person-email-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="branchName" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Sucursala" label-for="person-branchName">
                                    <b-form-input 
                                        type="text"
                                        disabled
                                        id="person-branchName"
                                        v-model="person.branchName" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="person-branchName-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    <!-- </b-row>
                    <b-row> -->
                        <b-col class="col-6">
                            <validation-provider name="gender" :rules="{ required: true }" v-slot="validationContext">
                                <b-form-group size="sm" label="Gender" label-for="person-gender">
                                    <b-form-select 
                                        id="person-gender" 
                                        v-model="person.gender" 
                                        :options="person.genderDropDown" 
                                        :state="getValidationState(validationContext)">
                                    </b-form-select>
                                </b-form-group>
                                <b-form-invalid-feedback id="person-gender-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>   
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="details" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Detalii" label-for="person-details">
                                    <b-form-textarea 
                                        type="text"
                                        id="person-details"
                                        v-model="person.details" 
                                        :state="getValidationState(validationContext)"
                                        rows="3"
                                        max-rows="6"
                                        required>
                                    </b-form-textarea> 
                                </b-form-group>
                                <b-form-invalid-feedback id="person-details-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>                 
                </b-container>

                <b-container v-if="currentTab == 'tab2'" class="body-container">
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="city" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Oras" label-for="address-city">
                                    <b-form-input 
                                        type="text"
                                        id="address-city"
                                        v-model="person.city" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="address-city-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    <!-- </b-row>
                    <b-row> -->
                        <b-col class="col-6">
                            <validation-provider name="zipCode" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Cod postal" label-for="address-zipCode">
                                    <b-form-input 
                                        type="text"
                                        id="address-zipCode"
                                        v-model="person.postalCode" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="address-zipCode-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="details" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Detalii" label-for="address-details">
                                    <b-form-textarea 
                                        type="text"
                                        id="address-details"
                                        v-model="person.addressDetail" 
                                        :state="getValidationState(validationContext)"
                                        rows="3"
                                        max-rows="6"
                                        required>
                                    </b-form-textarea> 
                                </b-form-group>
                                <b-form-invalid-feedback id="address-details-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>
                </b-container>
                 <b-container v-if="currentTab == 'tab3'" class="body-container">
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="oldPassword" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Parola veche" label-for="password-oldPassword">
                                    <b-form-input 
                                        type="password"
                                        id="password-oldPassword"
                                        v-model="passwordModel.oldPassword" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="password-oldPassword-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="password" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Password" label-for="password-password">
                                    <b-form-input 
                                        type="password"
                                        id="password-password"
                                        v-model="passwordModel.password" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="password-password-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="confirmPassword" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Confirmare parola" label-for="password-confirmPassword">
                                    <b-form-input 
                                        type="password"
                                        id="password-confirmPassword"
                                        v-model="passwordModel.confirmPassword" 
                                        :state="getValidationState(validationContext)"
                                        required>
                                    </b-form-input> 
                                </b-form-group>
                                <b-form-invalid-feedback id="password-confirmPassword-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>
                </b-container>
                <b-container>
                     <b-row>
                        <b-col class="col-3">
                             <b-button block variant="dark" @click="save">Salvare</b-button>
                        </b-col>
                        <b-col class="col-3">
                             <b-button block variant="secondary" @click="cancel">Renunta</b-button>
                        </b-col>
                    </b-row>
                </b-container>
        </b-container>
    </div>
</template>

<style> 
  .label-navbar 
  {
    color:black!important
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ValidationContext } from 'vee-validate/dist/types/components/common';
import Stepper from '@/components/Stepper.vue';
import { IStepperSetting } from '../models/stepper.setting';
import { KeyValue, SelectItem } from '@/models/helper.keyvalue';
import { ICustomer, Customer } from '../models/user.customer';
import { IAddress } from '../models/user.address';
import { PasswordValidator } from '../models/user.password';
import { CustomComponent } from '../CustomComponent';
import profileModule from '../store/modules/profileModule';
import authModule from '../store/modules/authModule';

@Component
export default class Account extends CustomComponent
{ 
    currentTab: string = "tab1";

    person: Customer | null | ICustomer = null; 

    passwordModel: PasswordValidator = new PasswordValidator();
 
    getValidationState(context: ValidationContext) {
        const { dirty, validated, valid } = context;

        return dirty || validated ? valid : null;
    }
    
    setActive(elementId: string)
    {
        // debugger;

        const els: HTMLCollectionOf<Element> = document.getElementsByClassName('nav-link');
        for(let item of els)
        {
            if(!item.classList.contains('active')) continue;
            item.classList.remove('active');
        }

        const el = document.getElementById(elementId);
        if(el == null)
            throw new Error();

        el.classList.add('active');

        this.currentTab = elementId;
    }

    async beforeCreate()
    {
        try
        {
            this.person = await profileModule.getCustomer(authModule.userId);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    async save()
    {
        const profile: Customer = this.person as Customer;
        profile.userId = authModule.userId;
        profile.oldPassword = this.passwordModel.oldPassword;
        profile.newPassword = this.passwordModel.password;
        profile.confirmPassword = this.passwordModel.confirmPassword;

  
        this.person = await profileModule.updateCustomer(profile);
        this.passwordModel = new PasswordValidator();
    }

    public back()
    {
        this.$router.back();
    }

    cancel() { this.back(); }
    
}

</script>