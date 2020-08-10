import Vue from 'vue'
import App from './App.vue'
import './quasar'
import router from './router'
import { Service } from './services';

Vue.config.productionTip = false

const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

Service.prototype.router = app.$router;
