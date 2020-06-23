<template>
    <div class="body-color body">
         <b-container class="body-container">
                <b-nav tabs fill>
                    <b-nav-item id="tab1" @click="setActive('tab1')">Date pasaportale</b-nav-item>
                    <b-nav-item id="tab2" @click="setActive('tab2')">Adresa</b-nav-item>
                    <b-nav-item id="tab3" @click="setActive('tab3')">Resetare parola</b-nav-item>
                </b-nav>
                <b-container v-if="currentTab == 'tab1'" class="body-container">
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="name" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Nume" label-for="person-name">
                                    <b-form-input 
                                        type="text"
                                        id="person-name"
                                        v-model="person.name" 
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
                            <validation-provider name="surname" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Prenume" label-for="person-surname">
                                    <b-form-input 
                                        type="text"
                                        id="person-surname"
                                        v-model="person.surname" 
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
                            <validation-provider name="email" :rules="{ required: true, min: 10 }" v-slot="validationContext">
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
                            <validation-provider name="branchName" :rules="{ required: true, min: 10 }" v-slot="validationContext">
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
                                        :options="genders" 
                                        :state="getValidationState(validationContext)">
                                    </b-form-select>
                                </b-form-group>
                                <b-form-invalid-feedback id="person-gender-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            </validation-provider>
                        </b-col>
                    </b-row>   
                    <b-row>
                        <b-col class="col-6">
                            <validation-provider name="details" :rules="{ required: true, min: 10 }" v-slot="validationContext">
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
                            <validation-provider name="city" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Oras" label-for="address-city">
                                    <b-form-input 
                                        type="text"
                                        id="address-city"
                                        v-model="address.city" 
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
                            <validation-provider name="zipCode" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Cod postal" label-for="address-zipCode">
                                    <b-form-input 
                                        type="text"
                                        id="address-zipCode"
                                        v-model="person.zipCode" 
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
                            <validation-provider name="details" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                <b-form-group size="sm" label="Detalii" label-for="address-details">
                                    <b-form-textarea 
                                        type="text"
                                        id="address-details"
                                        v-model="address.details" 
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
                            <validation-provider name="oldPassword" :rules="{ required: true, min: 10 }" v-slot="validationContext">
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
                            <validation-provider name="password" :rules="{ required: true, min: 10 }" v-slot="validationContext">
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
                            <validation-provider name="confirmPassword" :rules="{ required: true, min: 10 }" v-slot="validationContext">
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
                             <b-button block variant="primary" @click="save">Salvare</b-button>
                        </b-col>
                        <b-col class="col-3">
                             <b-button block variant="outline-secondary" @click="cancel">Renunta</b-button>
                        </b-col>
                    </b-row>
                </b-container>
        </b-container>
    </div>
</template>

<style> 
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ValidationContext } from 'vee-validate/dist/types/components/common';
import Stepper from '@/components/Stepper.vue';
import { IStepperSetting } from '../models/stepper.setting';
import { KeyValue, SelectItem } from '@/models/helper.keyvalue';
import { ICustomer } from '../models/user.customer';
import { IAddress } from '../models/user.address';
import { PasswordValidator } from '../models/user.password';

@Component
export default class Account extends Vue
{ 
    currentTab: string = "tab1";

    person: ICustomer = { id: 0, addressId: 0, branchName: "", gender: "", name: "", surname: "", phoneNo: "", email: "", details: "", userId: 0 };
    address: IAddress = { id: 0, city: "", zipCode: "", details: "" };

    passwordModel: PasswordValidator = new PasswordValidator();

    genders: SelectItem<string, string>[] = [{ value: 'M', text: 'Masculin' }, { value: 'F', text:'Feminin' }];

    getValidationState(context: ValidationContext) {
        const { dirty, validated, valid } = context;

        return dirty || validated ? valid : null;
    }
    
    back(){
        this.$router.back();
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

    save()
    {}

    cancel() { this.back(); }
    
}

</script>