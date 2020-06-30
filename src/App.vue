<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <div>
      <b-navbar type="dark" variant="dark" toggleable="sm">
         <b-navbar-brand v-if="enableBackbutton == true">
            <b-button variant="dark"><b-icon icon="arrow-left" @click="back"></b-icon></b-button>
        </b-navbar-brand >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="enableBackbutton == false" >
            <b-nav-item href="javascript:void(0)" @click="goto('/')">Home</b-nav-item>
            <b-nav-item href="javascript:void(0)" @click="goto('/about')">About</b-nav-item>
            <b-nav-item href="javascript:void(0)" @click="goto('/Contact')">Contact</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>{{authenticatedUser.firstName}} {{authenticatedUser.lastName}} </em>
              </template>
              <b-dropdown-item href="javascript:void(0)" @click="goto('/account')">Profile</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)" @click="clearSession()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div> 
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ValidationContext } from 'vee-validate/dist/types/components/common';
import { SessionUser } from '@/models/user.session';
import { AppConstants } from './App.Constants'; 
import authModule from '@/store/modules/authModule';
import { IAuthResponse } from './models/auth.response';

@Component
export default class App extends Vue
{
  goto(path: string)
  {
    if(this.$router.currentRoute.path !== path)
      this.$router.push({ path: path });
  }

  public get enableBackbutton(): boolean { return this.isAuthnticated && this.$route.name != "Contact" && this.$route.name != "About" && this.$route.name != "Home"; }

  get isAuthnticated(): boolean
  { 
    return this.authenticatedUser.id > 0;
  }

  get authenticatedUser(): SessionUser
  { 
    let json: string | null = localStorage.getItem(AppConstants.session_user);
    if(json == null)
      return { lastName: "", firstName: "", id: 0, fullName: "" };
    const userInfo: IAuthResponse = JSON.parse(json);
    return new SessionUser(userInfo.firstName, userInfo.lastName, userInfo.id);
  }

  public clearSession(): void
  {
    let authToken: string | null = localStorage.getItem(AppConstants.auth_token), 
        sessionUser: string | null = localStorage.getItem(AppConstants.session_user);

    if (authToken != null)  localStorage.removeItem(AppConstants.auth_token);
    if (sessionUser != null)  localStorage.removeItem(AppConstants.session_user);

    this.$router.push({ name: "Login" });
  }

  public back()
    {
        this.$router.back();
    }
}
</script>