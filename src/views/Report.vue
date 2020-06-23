<template>
    <div class="body-color body">
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
import  { CustomComponent }  from '../CustomComponent';

@Component
export default class Report extends CustomComponent
{  
    back()
    {
        this.$router.back();
    }
}

</script>