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
                    <Stepper :settings="stepperSettings" bedge="primary" :canContinue="canContinue" :canFinish="canFinish">
                        <b-container fluid slot="tab1">
                            <b-row>
                                <b-col>
                                    <validation-provider name="username" :rules="{ required: true, min: 8 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Utilzator" label-for="username">
                                            <b-form-input 
                                                id="username"
                                                v-model="username" 
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
                                                v-model="pidSerial" 
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
                                                v-model="pidNo" 
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
                        <b-container fluid slot="tab2">
                            <b-row>
                                <b-col>
                                    <validation-provider name="validationCode" :rules="{ required: true, min: 8 }" v-slot="validationContext">
                                        <b-form-group size="sm" label="Cod validare" label-for="validationCode">
                                            <b-form-input 
                                                id="validationCode"
                                                v-model="validationCode" 
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

@Component({
    components: {
        Stepper
    }
})
export default class ChangePassword extends CustomComponent
{ 
    public stepperSettings: string = JSON.stringify([
        { id: "tab1", title: "Completeaza datele", subtitle: null, icon: "arrow-up", useIcon: false, order: 1 },
        { id: "tab2", title: "Primeste email", subtitle: null, icon: "arrow-down", useIcon: false, order: 2 },
        { id: "tab3", title: "Finalizare", subtitle: null, icon: "arrow-down", useIcon: false, order: 3 }
    ]);

    @Prop() username!:string;
    @Prop() pidSerial!:string;
    @Prop() pidNo!:string;

    @Prop() validationCode!:string;

    getValidationState(context: ValidationContext) {
        const { dirty, validated, valid } = context;

        return dirty || validated ? valid : null;
    }
    
    private errors: KeyValue<string, string>[] = [];

    get canContinue(): boolean { return true; }
    get canFinish(): boolean { return true; }

    public back()
    {
        this.$router.back();
    }
    
}

</script>