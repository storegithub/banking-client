import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from "vee-validate/dist/rules";
require('@/assets/login.asset.css');
require('@/assets/app.css');


for (let [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider); 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
