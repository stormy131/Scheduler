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
const user = localStorage.getItem('user');
if (token && user) {
  Vue.prototype.$http.defaults.headers.common.usertoken = token;
  store.commit('auth_success', { token, user });
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

Vue.use(VueRouter);
