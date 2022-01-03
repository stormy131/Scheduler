import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import Scheduler from './plugins/scheduler';
import '@fortawesome/fontawesome-free/js/all.min.js';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Scheduler);

const app = new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
if (token && user) {
  app.$http.defaults.headers.common.usertoken = token;
  const res = JSON.parse(user);
  app.$store.commit('auth_success', { token, res });
}
