<template>
   <div class="custom-header-card-body">
        <div class="row">
            <div class="col-sm-8 col-md-8 align-to-left"> 
                <display-text :value="data"></display-text>
            </div>
            <div class="col-sm-4 col-md-4 right">
                 <slot name="template"></slot>
            </div>
        </div>
   </div>
</template>

<style> 
    .custom-header-card-body
    {
        background-color: #343a40;
        color: white;
        padding: 10px;
        font-size: 0.8em;
        text-align: left;
        font-weight: bold; 
    } 
</style>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import DisplayText from '@/components/DisplayText.vue';

@Component({ name: 'bank-account-header', components: {
    DisplayText
} })
export default class BankAccountHeaderComponent extends Vue
{
    @Prop() data!: string;   
}

</script>