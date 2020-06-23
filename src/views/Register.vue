<template>
    <div class="body-color body">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand>
                    <b-button variant="dark"><b-icon icon="arrow-left" @click="back"></b-icon></b-button>
                </b-navbar-brand >
            </b-navbar>
        </div>
        <div class="stepper-position">
            <b-container>
            <b-row>
                <b-col>
                    <Stepper :settings="stepperSettings" bedge="primary">
                        <b-container fluid slot="firstTab">
                            <b-row>
                                <b-col>
                                    Completeaza datele din buletin
                                </b-col>
                                <b-col>
                                    <validation-provider name="pidSerial" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                        <b-form-input 
                                            id="pidSerial"
                                            v-model="pidSerial" 
                                            :state="getValidationState(validationContext)"
                                            placeholder="Serie"
                                            required>
                                        </b-form-input> 
                                        <b-form-invalid-feedback id="pidSerial-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                                <b-col>
                                    <validation-provider name="pidNo" :rules="{ required: true, min: 6 }" v-slot="validationContext">
                                        <b-form-input 
                                            id="pidNo"
                                            v-model="pidNo" 
                                            :state="getValidationState(validationContext)"
                                            placeholder="Numar"
                                            required>
                                        </b-form-input> 
                                        <b-form-invalid-feedback id="pidNo-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                             <b-row class="row-padding">
                                <b-col class="col-4">
                                    
                                </b-col>
                                <b-col class="col-8">
                                     <validation-provider name="email" :rules="{ required: true, min: 8 }" v-slot="validationContext">
                                        <b-form-input 
                                            id="email"
                                            v-model="email" 
                                            :state="getValidationState(validationContext)"
                                            placeholder="Adresa email"
                                            required>
                                        </b-form-input> 
                                        <b-form-invalid-feedback id="email-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col> 
                            </b-row>
                        </b-container>
                        <b-container fluid slot="secondTab">
                             <b-row>
                                <b-col>
                                     <validation-provider name="password" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Parola" label-for="password">
                                            <b-form-input 
                                                type="password"
                                                id="password"
                                                v-model="password" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Completeaza parola"
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="password-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                             <b-row>
                                <b-col>
                                     <validation-provider name="confirmPassword" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Confirmare parola" label-for="confirmPassword">
                                            <b-form-input 
                                                type="password"
                                                id="confirm-password"
                                                v-model="confirmPassword" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Completeaza parola"
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="confirmPassword-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container fluid slot="thirdTab">
                            <b-row>
                                <b-col>
                                    <validation-provider name="validationCode" :rules="{ required: true, min: 8 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Cod validare" label-for="validationCode">
                                            <b-form-input 
                                                id="validationCode"
                                                v-model="validationCode" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Indrodu codul"
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="validationCode-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container fluid slot="fourth">
                            <b-row>
                                <b-col></b-col>
                                <b-col style="text-align: center;padding: 2vh 0vh 2vh 0vh;"><b-icon icon="check-circle" variant="success" style="width: 120px; height: 120px;"></b-icon></b-col>
                                <b-col></b-col>
                            </b-row>
                            <b-row>
                                <b-col></b-col>
                                <b-col style="text-align: center;padding-bottom: 2vh;">Contul a fost creat cu success!</b-col>
                                <b-col></b-col>
                            </b-row>
                        </b-container>
                    </Stepper>
                </b-col>
            </b-row>
            
        </b-container>
        </div>
    </div>
</template>

<style>
    .stepper-position {
        padding-top: 10vh;
    }
    .row-padding {
        padding-top: 1vh;;
    }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ValidationContext } from 'vee-validate/dist/types/components/common';
import Stepper from '@/components/Stepper.vue';
import { CustomComponent } from '../CustomComponent';


@Component({
    components: {
        Stepper
    }
})
export default class Register extends CustomComponent
{
    private _pidSertial!: string;
    get pidSerial() :string
    {
        return this._pidSertial;
    }
    set pidSerial(data: string)
    {
        this._pidSertial = data;
    }

    private _pidNo!: string;
    get pidNo() :string
    {
        return this._pidNo;
    }
    set pidNo(data: string)
    {
        this._pidNo = data;
    }

    private _email!: string;
    get email() :string
    {
        return this._email;
    }
    set email(data: string)
    {
        this._email = data;
    }

    private _password!: string;
    get password() :string
    {
        return this._password;
    }
    set password(data: string)
    {
        this._password = data;
    }

    private _confirmPassword!: string;
    get confirmPassword() :string
    {
        return this._confirmPassword;
    }
    set confirmPassword(data: string)
    {
        this._confirmPassword = data;
    }

    private _validationCode!: string;
    get validationCode() :string
    {
        return this._validationCode;
    }
    set validationCode(data: string)
    {
        this._validationCode = data;
    }
  
    public stepperSettings: string = JSON.stringify([
        { id: "firstTab", title: "Identificare client", subtitle: null, icon: "arrow-up", useIcon: false, order: 1 },
        { id: "secondTab", title: "Completeaza datele", subtitle: null, icon: "arrow-up", useIcon: false, order: 2 },
        { id: "thirdTab", title: "Primeste email", subtitle: null, icon: "arrow-down", useIcon: false, order: 3 },
        { id: "fourth", title: "Finalizare", subtitle: null, icon: "arrow-down", useIcon: false, order: 4 }
    ]);
    getValidationState(context: ValidationContext) {
        const { dirty, validated, valid } = context;

        return dirty || validated ? valid : null;
    }

    public back()
    {
        this.$router.back();
    }
}

</script>