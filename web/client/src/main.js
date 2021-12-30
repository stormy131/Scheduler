import Vue from 'vue';
import SSO from 'vue-sso'
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import axios from 'axios'

Vue.config.productionTip = false;
window.axios = axios;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');


Vue.use(VueRouter);
Vue.use(SSO, {
    baseURL: '/',
    authEndpoint: '/auth',
    key: 'scheduler'
});