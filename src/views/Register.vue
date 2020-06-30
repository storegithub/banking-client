<template>
    <div class="body-color body">
        <div class="stepper-position">
            <b-container>
            <b-row>
                <b-col>
                    <Stepper ref="stepper" :settings="stepperSettings" @onNext="next" @onPrevious="previous" @onDone="done" bedge="primary">
                        <b-container fluid slot="firstTab">
                            <b-row>
                                <b-col>
                                    Completeaza datele din buletin
                                </b-col>
                                <b-col>
                                    <validation-provider name="pidSerial" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                        <b-form-input 
                                            id="pidSerial"
                                            v-model="model.pidSerial" 
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
                                            v-model="model.pidNo" 
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
                                            v-model="model.email" 
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
                                     <validation-provider name="username" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Nume utilizator" label-for="password">
                                            <b-form-input 
                                                type="text"
                                                id="username"
                                                v-model="model.userName" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Completeaza utilizatorul"
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="username-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                             <b-row>
                                <b-col>
                                     <validation-provider name="password" :rules="{ required: true, min: 10 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Parola" label-for="password">
                                            <b-form-input 
                                                type="password"
                                                id="password"
                                                v-model="model.password" 
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
                                                v-model="model.confirmPassword" 
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
                                                v-model="model.validationCode" 
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
import { IRegisterUser } from '../models/regiter.user';
import authModule from '../store/modules/authModule';
import codeValidator from '../store/modules/codeValidator';
import { IApiResult } from '../models/api.result'; 

@Component({
    components: {
        Stepper
    }
})
export default class Register extends CustomComponent
{
    public model: IRegisterUser = {
        userName: "",
        pidSerial: "",
        pidNo: "",
        email: "",
        password: "",
        confirmPassword: "",
        validationCode: ""
    };
  
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

    mounted()
    { 
    }

    async save()
    {
        const resposne: IApiResult | null = await authModule.register(this.model);
    }

    public back()
    {
        this.$router.back();
    }

    public async next(newIndex: number, model: any)
    { 
        const stepper: Stepper = this.$children[0] as Stepper;
        switch(newIndex)
        {
            case 1:
                const response1: IApiResult | null =  await codeValidator.checkCustomer({ email: this.model.email, number: this.model.pidNo, series: this.model.pidSerial });
                if(response1 == null || response1.success == false) throw new Error();
                stepper.increment(); 
            break;
            case 2:
                if(this.model.password != this.model.confirmPassword) throw new Error();
               const response2: IApiResult | null =  await codeValidator.sendRegisterCode(this.model.email);
               if(response2 == null || response2.success == false) throw new Error(); 
                stepper.increment(); 
            break;
            case 3:  
               const response3: IApiResult | null =  await codeValidator.validateCode({ code: this.model.validationCode, email: this.model.email });
               if(response3 == null || response3.success == false) throw new Error();
               const registerModel: IRegisterUser = { 
                   userName: this.model.userName, 
                   email: this.model.email, 
                   validationCode:  this.model.validationCode, 
                   confirmPassword: this.model.confirmPassword,
                   password: this.model.password,
                   pidSerial: this.model.pidSerial,
                   pidNo: this.model.pidNo
                 };
               const response4: IApiResult | null = await authModule.register(registerModel);
               if(response4 == null || response4.success == false) throw new Error(); 
                stepper.increment(); 
            break;

        }
        console.log(newIndex);
    }
    public previous(newIndex: number, model: any)
    {
        const stepper: Stepper = this.$children[0] as Stepper;
        stepper.decrement(); 
    }

    public done(newIndex: number, model: any)
    {
        this.$router.push("Login");
    }
}

</script>