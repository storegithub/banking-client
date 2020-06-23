<template>
    <span class="display-text">{{value}}</span>
</template>

<style>
    .display-text
    {
        padding: 0px 0px 0px 5px;
    }
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 

@Component({ name: 'display-text'})
export default class DisplayText extends Vue
{
    @Prop() value!: string; 
}
</script>