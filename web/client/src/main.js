import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';

Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common.auth = token;
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

Vue.use(VueRouter);
