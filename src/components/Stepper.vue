<template>
  <div class="stepper">
    <b-container fluid>
      <b-row>
          <b-col class="" v-for="item in config" :key="item.id">
            <div v-bind:class="{ 'active-icon': item.order == currentPage.order }" class="icon-contaner center">
              <b-icon v-if="item.useIcon" :icon="item.icon"></b-icon>
              <span v-if="!item.useIcon">{{item.order}}</span>
            </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col v-for="item in config" :key="item.id">
            <div><span class="title">{{item.title}}</span></div>
            <div v-if="item.subtitle != null"><span class="subtitle">{{item.subtitle}}</span></div>
          </b-col>
      </b-row>

      <b-row>
        <div class="stepper-container" v-for="item in config" :key="item.id">
          <b-container fluid v-if="item.order == currentPage.order">
            <div class="stepper-body" >
              <slot :name="item.id"></slot>
            </div>
          </b-container>
        </div>
          
      </b-row>

      <b-row>
          <b-col class="stepperControlLeft" v-if="firstPage.order !== currentPage.order" >
            <b-button variant="dark" @click="previous">Inapoi</b-button>
          </b-col>
          <b-col  class="stepperControlRight" v-if="currentPage.order == firstPage.order || currentPage.order < lastPage.order">
            <b-button :disabled="canContinue == false" variant="dark" @click="next">Inainte</b-button>
          </b-col> 
          <b-col class="stepperControlRight" v-if="lastPage.order == currentPage.order">
            <b-button :disabled="canFinish == false" variant="dark" @click="done">Finalizare</b-button>
          </b-col>
      </b-row>
    </b-container>
      
  </div>
</template>

<style>
  .stepper {
    padding: 1vh 0vh 1vh 0vh;
    /* border: lightgray 1px solid;*/
    border-radius: 5px; 
    margin: 5px 5px 5px 5px;
    background-color: white;
  }
  .icon-contaner {
    padding: 10px;
    border-radius: 50px;
    width: 45px;
    margin-left: 43%;
  }

  .active-icon {
    background-color: lightgray;
    font-weight: 10px !important;
  }
  .stepperControlLeft
  {
    text-align: left;
  }
  .stepperControlRight
  {
    text-align: right;
  }

  .stepper-body {
    padding: 6vh 1vw 2vh 1vw;
    width: 100%;
  }

  .stepper-container {
    width: 100%;
    text-align: left;
  }

  .center {text-align: center ;}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IStepperSetting } from '@/models/stepper.setting';

@Component({ name: 'AppStepper' })
export default class Stepper extends Vue {

  @Prop() settings!: string;
  @Prop() bedge!: string;

  @Prop() canContinue!: boolean;
  @Prop() canFinish!: boolean;

  private index: number = 0;

  constructor()
  {
    super();
  }
  

  get currentPage(): IStepperSetting
  {
    if (this.config != null && this.config.length > 0) return this.config[this.index];
    return { order: -1, id: "", title: "", subtitle: "", icon: "", useIcon: false };
  }
  get firstPage(): IStepperSetting
  {
    if(this.config !== null && this.config.length > 0 ) return this.config[0];
      
    return { order: -1, id: "", title: "", subtitle: "", icon: "", useIcon: false };
    
  }
  get lastPage(): IStepperSetting
  {
    if(this.config !== null && this.config.length > 0) {
      let latest: number = this.config.length -1;
      return this.config[latest];
    }
    
    return { order: 9999999, id: "", title: "", subtitle: "", icon: "" , useIcon: false};
    
  }

  get config(): Array<IStepperSetting> 
  {
    if (this.settings == null)
      return [];
    return JSON.parse(this.settings);
  }

  

  mounted()
  {
    
  }

  previous()
  {
    if(this.index ==0) return;
    this.$emit("onPrevious", this.index - 1); 
  }

  next()
  {
    let latestIndex: number = this.config.indexOf(this.lastPage);
    if(this.index < latestIndex && this.index > -1 )
       this.$emit("onNext", this.index + 1);
  }

  public increment()
  {
    let latestIndex: number = this.config.indexOf(this.lastPage);
    if(this.index < latestIndex && this.index > -1 )
      this.index++;
  }

  public decrement()
  {
    let latestIndex: number = this.config.indexOf(this.lastPage);
    if(this.index < latestIndex && this.index > -1 )
      this.index--;
  }

  done()
  {
    this.$emit("onDone", this.index);
  }
}
</script>
