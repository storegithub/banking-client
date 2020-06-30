<template>
    <div class="body-color body"> 
        <div class="stepper-position">
            <b-container>
            <b-row>
                <b-col>
                    <Stepper ref="stepper" :settings="stepperSettings" bedge="primary" @onNext="next" @onPrevious="previous" @onDone="done">
                        <b-container fluid slot="tab1">
                            <b-row>
                                <b-col>
                                    <validation-provider name="username" :rules="{ required: true, min: 8 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Email" label-for="username">
                                            <b-form-input 
                                                id="username"
                                                v-model="model.email" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Completeaza..."
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="username-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                             <b-row>
                                <b-col>
                                    <validation-provider name="pidSerial" :rules="{ required: true, min: 2 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Seria" label-for="pidSerial">
                                            <b-form-input 
                                                id="pidSerial"
                                                v-model="model.series" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Completeaza..."
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="pidSerial-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                                <b-col>
                                    <validation-provider name="pidNo" :rules="{ required: true, min: 6 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Utilzator" label-for="pidNo">
                                            <b-form-input 
                                                id="pidNo"
                                                v-model="model.number" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Completeaza..."
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="pidNo-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
                        <b-container fluid slot="tab2">
                            <b-row>
                                <b-col>
                                    <validation-provider name="validationCode" :rules="{ required: true, min: 8 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Cod validare" label-for="validationCode">
                                            <b-form-input 
                                                id="validationCode"
                                                v-model="model.code" 
                                                :state="getValidationState(validationContext)"
                                                placeholder="Completeaza..."
                                                required>
                                            </b-form-input> 
                                        </b-form-group>
                                        <b-form-invalid-feedback id="validationCode-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                    </validation-provider>
                                </b-col>
                            </b-row>
                        </b-container>
                        <b-container fluid slot="tab3">
                            <b-row>
                                <b-col></b-col>
                                <b-col style="text-align: center;padding: 2vh 0vh 2vh 0vh;"><b-icon icon="check-circle" variant="success" style="width: 120px; height: 120px;"></b-icon></b-col>
                                <b-col></b-col>
                            </b-row>
                            <b-row>
                                <b-col></b-col>
                                <b-col style="text-align: center;padding-bottom: 2vh;">Parola a fost resetata cu success!</b-col>
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
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ValidationContext } from 'vee-validate/dist/types/components/common';
import Stepper from '@/components/Stepper.vue';
import { IStepperSetting } from '../models/stepper.setting';
import { KeyValue } from '@/models/helper.keyvalue';
import { CustomComponent } from '../CustomComponent';
import { ICheckCustomer } from '@/models/check.customer';
import { ICodeValidate } from '@/models/caode.validate';
import { IChangePassword } from '@/models/changePassword.model';
import { IApiResult } from '@/models/api.result';
import changePasswordModule from '../store/modules/changePasswordModule';

@Component({
    components: {
        Stepper
    }
})
export default class ChangePassword extends CustomComponent
{ 
    public stepperSettings: string = JSON.stringify([
        { id: "tab1", title: "Completeaza datele", subtitle: null, icon: "arrow-up", useIcon: false, order: 1 },
        { id: "secondTab", title: "Adauga parola", subtitle: null, icon: "arrow-down", useIcon: false, order: 2 },
        { id: "tab2", title: "Primeste email", subtitle: null, icon: "arrow-down", useIcon: false, order: 3 },
        { id: "tab3", title: "Finalizare", subtitle: null, icon: "arrow-down", useIcon: false, order: 4 }
    ]);

    public model: IChangePassword = {
        email: "",
        series: "",
        number: "",
        code: "",
        password: "",
        confirmPassword: ""
    };
 
    
    getValidationState(context: ValidationContext) {
        const { dirty, validated, valid } = context;

        return dirty || validated ? valid : null;
    }
    
    private errors: KeyValue<string, string>[] = [];
 
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
                const response1: IApiResult | null =  await changePasswordModule.checkUser({ email: this.model.email, number: this.model.number, series: this.model.series });
                if(response1 == null || response1.success == false) throw new Error();
                stepper.increment();  
            break;
            case 2:  
                const response2: IApiResult | null =  await changePasswordModule.sendResetPasswordCode(this.model.email);
                if(response2 == null || response2.success == false) throw new Error();
                stepper.increment();   
            break; 
            case 3:
                const response3: IApiResult | null =  await changePasswordModule.changePassword(this.model);
                if(response3 == null || response3.success == false) throw new Error();
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